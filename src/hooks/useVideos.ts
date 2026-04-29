import { useQuery } from "@tanstack/react-query";
import type { Video } from "@/data/types";
import { sanityConfigured } from "@/lib/sanity";
import { fetchVideosFromSanity } from "@/lib/fetch-sanity-content";

export function useVideos() {
  return useQuery({
    queryKey: ["videos", import.meta.env.VITE_SANITY_PROJECT_ID],
    queryFn: async (): Promise<Video[]> => {
      if (!sanityConfigured) {
        return [];
      }
      try {
        return await fetchVideosFromSanity();
      } catch {
        return [];
      }
    },
    staleTime: 60_000,
  });
}
