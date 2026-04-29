import { useQuery } from "@tanstack/react-query";
import type { Collection } from "@/data/types";
import { collections as collectionsStatic } from "@/data/collections-static";
import { sanityConfigured } from "@/lib/sanity";
import { fetchCollectionsFromSanity } from "@/lib/fetch-sanity-content";

export function useCollections() {
  return useQuery({
    queryKey: ["collections", import.meta.env.VITE_SANITY_PROJECT_ID],
    queryFn: async (): Promise<Collection[]> => {
      if (!sanityConfigured) {
        return collectionsStatic;
      }
      try {
        const data = await fetchCollectionsFromSanity();
        if (data.length === 0) {
          return collectionsStatic;
        }
        return data;
      } catch {
        return collectionsStatic;
      }
    },
    staleTime: 60_000,
  });
}
