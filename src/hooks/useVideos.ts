import { useQuery } from "@tanstack/react-query";
import type { Video } from "@/data/types";
import { videos as videosStatic } from "@/data/videos-static";
import { sanityConfigured } from "@/lib/sanity";
import { fetchVideosFromSanity } from "@/lib/fetch-sanity-content";

export function useVideos() {
  return useQuery({
    queryKey: ["videos", import.meta.env.VITE_SANITY_PROJECT_ID],
    queryFn: async (): Promise<Video[]> => {
      if (!sanityConfigured) {
        return videosStatic;
      }
      try {
        const data = await fetchVideosFromSanity();
        if (data.length === 0) {
          return videosStatic;
        }
        return data;
      } catch {
        return videosStatic;
      }
    },
    staleTime: 60_000,
  });
}
