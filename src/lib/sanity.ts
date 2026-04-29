import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;
const dataset = (import.meta.env.VITE_SANITY_DATASET as string | undefined) || "production";

export const sanityConfigured = Boolean(projectId);

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : null;

const builder = projectId ? imageUrlBuilder({ projectId, dataset }) : null;

export function urlForImage(source: SanityImageSource, width = 2000): string {
  if (!builder || !source) return "";
  return builder.image(source).width(width).quality(85).auto("format").url();
}
