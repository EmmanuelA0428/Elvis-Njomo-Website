/**
 * Run: node scripts/extract-migration-source.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const collectionsPath = path.join(root, "src/data/collections-static.ts");
const videosPath = path.join(root, "src/data/videos-static.ts");
if (!fs.existsSync(collectionsPath) || !fs.existsSync(videosPath)) {
  console.error(
    "collections-static.ts / videos-static.ts are no longer in the repo. Restore them from git history to regenerate scripts/migration-source.ts, or edit migration-source.ts manually.",
  );
  process.exit(1);
}
const src = fs.readFileSync(collectionsPath, "utf8");

const photoRe = /\{\s*id:\s*"([^"]+)"\s*,\s*src:\s*[^,]+,\s*alt:\s*"((?:[^"\\]|\\.)*)"\s*\}/g;

function extractBalancedObject(startIndex) {
  if (src[startIndex] !== "{") return null;
  let depth = 0;
  for (let j = startIndex; j < src.length; j++) {
    if (src[j] === "{") depth++;
    if (src[j] === "}") {
      depth--;
      if (depth === 0) return { text: src.slice(startIndex, j + 1), end: j + 1 };
    }
  }
  return null;
}

function findCollectionBlock(constName) {
  const needle = `const ${constName}: Collection = `;
  const idx = src.indexOf(needle);
  if (idx === -1) throw new Error(`Missing ${constName}`);
  const braceStart = src.indexOf("{", idx);
  const got = extractBalancedObject(braceStart);
  if (!got) throw new Error(`Unclosed ${constName}`);
  return got.text;
}

function extractPhotosFromBracketContent(inner) {
  const photos = [];
  let mm;
  const r = new RegExp(photoRe.source, "g");
  while ((mm = r.exec(inner)) !== null) {
    photos.push({ id: mm[1], alt: mm[2].replace(/\\"/g, '"') });
  }
  return photos;
}

function extractNamedPhotoArray(name) {
  const re = new RegExp(`const ${name}: Photo\\[\\] = \\[([\\s\\S]*?)\\n\\];`, "m");
  const m = src.match(re);
  if (!m) throw new Error(`Array ${name} not found`);
  return extractPhotosFromBracketContent(m[1]);
}

function extractCollectionPhotos(constName) {
  const block = findCollectionBlock(constName);
  const refMatch = block.match(/photos:\s*(\w+)\s*,/);
  if (refMatch) {
    const refName = refMatch[1];
    return extractNamedPhotoArray(refName);
  }
  const inline = block.match(/photos:\s*\[([\s\S]*)\]\s*,\s*(?:photoCount|cover)/);
  if (!inline) {
    const inline2 = block.match(/photos:\s*\[([\s\S]*)\]\s*,\s*\}/);
    if (inline2) return extractPhotosFromBracketContent(inline2[1]);
    throw new Error(`No photos in ${constName}`);
  }
  return extractPhotosFromBracketContent(inline[1]);
}

const coverFile = {
  theater: "theater-1.jpg",
  dance: "dance-1.jpg",
  sports: "sports-6.jpg",
  graduation: "graduation-3.jpg",
  events: "events-20.jpg",
  travel: "travel-2.jpg",
  landscapes: "landscape-4.jpg",
  wildlife: "wildlife-6.jpg",
};

const entries = [
  ["theaterCollection", "theater", "Theater"],
  ["danceCollection", "dance", "Dance"],
  ["sportsCollection", "sports", "Sports"],
  ["graduationCollection", "graduation", "Graduation"],
  ["eventsCollection", "events", "Events"],
  ["travelCollection", "travel", "Travel"],
  ["landscapesCollection", "landscapes", "Landscapes"],
  ["wildlifeCollection", "wildlife", "Wildlife"],
];

const migrationCollections = entries.map(([constName, id, title]) => ({
  id,
  title,
  coverFile: coverFile[id],
  photos: extractCollectionPhotos(constName),
}));

const videosSrc = fs.readFileSync(videosPath, "utf8");
const migrationVideos = [];
const vidBlock = /{\s*id:\s*"[^"]*"[\s\S]*?title:\s*"((?:[^"\\]|\\.)*)"[\s\S]*?youtubeId:\s*"([^"]+)"/g;
let vm;
while ((vm = vidBlock.exec(videosSrc)) !== null) {
  migrationVideos.push({
    title: vm[1].replace(/\\"/g, '"'),
    youtubeId: vm[2],
  });
}

const out = `/** Snapshot for optional \`npm run migrate:sanity\` when JPEGs exist under \`migration-assets/\`. */
export type MigrationPhoto = { id: string; alt: string };
export type MigrationCollection = {
  id: string;
  title: string;
  coverFile: string;
  photos: MigrationPhoto[];
};

export const migrationCollections: MigrationCollection[] = ${JSON.stringify(migrationCollections, null, 2)};

export const migrationVideos: { title: string; youtubeId: string }[] = ${JSON.stringify(migrationVideos, null, 2)};
`;

fs.writeFileSync(path.join(root, "scripts/migration-source.ts"), out);
console.log("Wrote scripts/migration-source.ts", {
  collections: migrationCollections.length,
  photoCounts: migrationCollections.map((c) => c.photos.length),
  videos: migrationVideos.length,
});
