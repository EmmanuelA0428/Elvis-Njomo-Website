import type { Collection, Photo, Video } from "@/data/types";
import { sanityClient, sanityConfigured, urlForImage } from "@/lib/sanity";
import type { SanityImageSource } from "@sanity/image-url";

const collectionsQuery = `*[_type == "collection"] | order(order asc) {
  "id": slug.current,
  title,
  cover,
  "coverAssetUrl": cover.asset->url,
  photos[] {
    _key,
    alt,
    image,
    "imageAssetUrl": image.asset->url
  }
}`;

type SanityCollectionRow = {
  id: string;
  title: string;
  cover?: SanityImageSource;
  coverAssetUrl?: string | null;
  photos?: Array<{
    _key: string;
    alt?: string;
    image?: SanityImageSource;
    imageAssetUrl?: string | null;
  }>;
};

export async function fetchCollectionsFromSanity(): Promise<Collection[]> {
  if (!sanityConfigured || !sanityClient) {
    throw new Error("Sanity is not configured");
  }
  const rows = await sanityClient.fetch<SanityCollectionRow[]>(collectionsQuery);
  return rows.map(mapSanityCollection);
}

function mapSanityCollection(row: SanityCollectionRow): Collection {
  const photos: Photo[] = (row.photos ?? [])
    .filter((p) => p.image || p.imageAssetUrl)
    .map((p) => ({
      id: p._key,
      src:
        (p.image ? urlForImage(p.image, 2200) : "") ||
        p.imageAssetUrl ||
        "",
      alt: p.alt ?? "",
    }));

  const coverSrc =
    (row.cover ? urlForImage(row.cover, 1400) : "") ||
    row.coverAssetUrl ||
    "";

  return {
    id: row.id,
    title: row.title,
    cover: coverSrc,
    photoCount: photos.length,
    photos,
  };
}

const videosQuery = `*[_type == "video"] | order(order asc) {
  "_id": _id,
  title,
  youtubeId
}`;

type SanityVideoRow = { _id: string; title: string; youtubeId: string };

export async function fetchVideosFromSanity(): Promise<Video[]> {
  if (!sanityConfigured || !sanityClient) {
    throw new Error("Sanity is not configured");
  }
  const rows = await sanityClient.fetch<SanityVideoRow[]>(videosQuery);
  return rows.map((row) => ({
    id: row._id,
    title: row.title,
    youtubeId: row.youtubeId,
    thumbnail: `https://img.youtube.com/vi/${row.youtubeId}/maxresdefault.jpg`,
    youtubeUrl: `https://www.youtube.com/watch?v=${row.youtubeId}`,
  }));
}

const siteSettingsHomeQuery = `*[_type == "siteSettings" && _id == "siteSettings"][0]{
  "photosImage": homePhotosPanelImage,
  "photosAssetUrl": homePhotosPanelImage.asset->url,
  "videosImage": homeVideosPanelImage,
  "videosAssetUrl": homeVideosPanelImage.asset->url
}`;

type SanitySiteSettingsHomeRow = {
  photosImage?: SanityImageSource;
  photosAssetUrl?: string | null;
  videosImage?: SanityImageSource;
  videosAssetUrl?: string | null;
};

export type HomePanelSettings = {
  photosPanelSrc: string;
  videosPanelSrc: string;
};

function resolveSanityImageUrl(
  image: SanityImageSource | undefined,
  assetUrl: string | null | undefined,
  width: number,
): string {
  return (image ? urlForImage(image, width) : "") || assetUrl || "";
}

/** Homepage Photos/Videos tile backgrounds; empty strings mean “use fallback in UI”. */
export async function fetchSiteSettingsHomePanels(): Promise<HomePanelSettings | null> {
  if (!sanityConfigured || !sanityClient) {
    throw new Error("Sanity is not configured");
  }
  const row = await sanityClient.fetch<SanitySiteSettingsHomeRow | null>(siteSettingsHomeQuery);
  if (!row) {
    return null;
  }
  return {
    photosPanelSrc: resolveSanityImageUrl(row.photosImage, row.photosAssetUrl, 2000),
    videosPanelSrc: resolveSanityImageUrl(row.videosImage, row.videosAssetUrl, 2000),
  };
}
