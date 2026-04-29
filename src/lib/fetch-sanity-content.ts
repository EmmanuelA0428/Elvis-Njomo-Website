import type { Collection, Photo, Video } from "@/data/types";
import { sanityClient, sanityConfigured, urlForImage } from "@/lib/sanity";
import type { SanityImageSource } from "@sanity/image-url";

const collectionsQuery = `*[_type == "collection"] | order(order asc) {
  "id": slug.current,
  title,
  cover,
  photos[] {
    _key,
    alt,
    image
  }
}`;

type SanityCollectionRow = {
  id: string;
  title: string;
  cover: SanityImageSource;
  photos?: Array<{ _key: string; alt?: string; image?: SanityImageSource }>;
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
    .filter((p) => p.image)
    .map((p) => ({
      id: p._key,
      src: urlForImage(p.image!, 2200),
      alt: p.alt ?? "",
    }));

  return {
    id: row.id,
    title: row.title,
    cover: urlForImage(row.cover, 1400),
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
