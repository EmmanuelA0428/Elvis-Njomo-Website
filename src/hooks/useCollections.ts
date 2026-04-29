import { useQuery } from "@tanstack/react-query";
import type { Collection } from "@/data/types";
import { sanityConfigured } from "@/lib/sanity";
import { fetchCollectionsFromSanity } from "@/lib/fetch-sanity-content";

export function useCollections() {
  return useQuery({
    queryKey: ["collections", import.meta.env.VITE_SANITY_PROJECT_ID],
    queryFn: async (): Promise<Collection[]> => {
      if (!sanityConfigured) {
        return [];
      }
      try {
        return await fetchCollectionsFromSanity();
      } catch {
        return [];
      }
    },
    staleTime: 60_000,
  });
}
