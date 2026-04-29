/**
 * One-time: uploads local assets and creates collection + video documents in Sanity.
 * Requires: npm install && SANITY_API_WRITE_TOKEN in env (from sanity.io/manage → API → Tokens).
 *
 * Run: npm run migrate:sanity
 */
import "dotenv/config";
import { createClient } from "@sanity/client";
import { createReadStream, existsSync } from "node:fs";
import { join } from "node:path";
import { collections } from "../src/data/collections-static.ts";
import { videos as videosStatic } from "../src/data/videos-static.ts";

const projectId = process.env.SANITY_PROJECT_ID || "mokhd6fe";
const dataset = process.env.SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error("Set SANITY_API_WRITE_TOKEN (Editor permissions) in your environment.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const ASSETS = join(process.cwd(), "src/assets");

const COVER_FILE: Record<string, string> = {
  theater: "theater-1.jpg",
  dance: "dance-1.jpg",
  sports: "sports-6.jpg",
  graduation: "graduation-3.jpg",
  events: "events-20.jpg",
  travel: "travel-2.jpg",
  landscapes: "landscape-4.jpg",
  wildlife: "wildlife-6.jpg",
};

function photoIdToFilename(id: string): string {
  if (id.startsWith("land-")) return `landscape-${id.slice(5)}.jpg`;
  if (id.startsWith("wild-")) return `wildlife-${id.slice(5)}.jpg`;
  return `${id}.jpg`;
}

function safeKey(id: string): string {
  return id.replace(/[^a-zA-Z0-9_-]/g, "-");
}

const UPLOAD_GAP_MS = Number(process.env.MIGRATE_UPLOAD_GAP_MS) || 120;

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

function isRetryableNetworkError(err: unknown): boolean {
  const e = err as { statusCode?: number; code?: string; message?: string };
  const code = e.statusCode;
  if (code === 502 || code === 503 || code === 504 || code === 429) return true;
  if (e.code === "ETIMEDOUT" || e.code === "ECONNRESET" || e.code === "ECONNREFUSED") return true;
  const msg = String(e.message ?? err ?? "");
  if (/502|503|504|Bad Gateway|ECONNRESET/i.test(msg)) return true;
  return false;
}

/** Sanity occasionally returns 502 under load; asset uploads are retried with backoff. */
async function withRetry<T>(label: string, fn: () => Promise<T>, maxAttempts = 8): Promise<T> {
  let last: unknown;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      return await fn();
    } catch (e) {
      last = e;
      if (attempt === maxAttempts || !isRetryableNetworkError(e)) {
        throw e;
      }
      const backoffMs = Math.min(45_000, 1500 * 2 ** (attempt - 1));
      console.warn(`  ${label} — ${String((e as Error).message ?? e).slice(0, 120)} (attempt ${attempt}/${maxAttempts}, wait ${backoffMs}ms)`);
      await sleep(backoffMs);
    }
  }
  throw last;
}

async function uploadImageFile(filepath: string, filename: string) {
  return withRetry(`upload ${filename}`, () =>
    client.assets.upload("image", createReadStream(filepath), { filename }),
  );
}

async function main() {
  for (let i = 0; i < collections.length; i += 1) {
    const c = collections[i];
    const slug = c.id;
    const coverName = COVER_FILE[slug];
    if (!coverName) {
      console.warn(`No cover mapping for ${slug}, skip`);
      continue;
    }
    const coverPath = join(ASSETS, coverName);
    if (!existsSync(coverPath)) {
      console.warn(`Missing cover ${coverPath}, skip collection ${slug}`);
      continue;
    }
    const coverAsset = await uploadImageFile(coverPath, coverName);
    await sleep(UPLOAD_GAP_MS);

    const photos: Array<{
      _key: string;
      image: { _type: "image"; asset: { _type: "reference"; _ref: string } };
      alt: string;
    }> = [];

    for (const p of c.photos) {
      const fn = photoIdToFilename(p.id);
      const fp = join(ASSETS, fn);
      if (!existsSync(fp)) {
        console.warn(`  skip missing file: ${fn}`);
        continue;
      }
      const asset = await uploadImageFile(fp, fn);
      await sleep(UPLOAD_GAP_MS);
      photos.push({
        _key: safeKey(p.id),
        image: {
          _type: "image",
          asset: { _type: "reference", _ref: asset._id },
        },
        alt: p.alt,
      });
    }

    const doc = {
      _id: `collection-${slug}`,
      _type: "collection" as const,
      title: c.title,
      slug: { _type: "slug" as const, current: slug },
      order: i,
      cover: {
        _type: "image" as const,
        asset: { _type: "reference" as const, _ref: coverAsset._id },
      },
      photos,
    };

    await withRetry(`save ${slug}`, () => client.createOrReplace(doc));
    console.log(`Published collection “${c.title}” (${photos.length} photos)`);
  }

  for (let i = 0; i < videosStatic.length; i += 1) {
    const v = videosStatic[i];
    const doc = {
      _id: `video-${v.youtubeId}`,
      _type: "video" as const,
      title: v.title,
      youtubeId: v.youtubeId,
      order: i,
    };
    await withRetry(`save video ${v.youtubeId}`, () => client.createOrReplace(doc));
    console.log(`Published video “${v.title}”`);
  }

  console.log("Done. Open the Studio with: npm run studio");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
