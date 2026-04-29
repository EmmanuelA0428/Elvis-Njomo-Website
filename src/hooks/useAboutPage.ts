import { useQuery } from "@tanstack/react-query";
import type { AboutPageContent } from "@/data/types";
import { fetchAboutPage } from "@/lib/fetch-sanity-content";
import { sanityConfigured } from "@/lib/sanity";

export function useAboutPage() {
  return useQuery({
    queryKey: ["aboutPage", import.meta.env.VITE_SANITY_PROJECT_ID],
    queryFn: async (): Promise<AboutPageContent | null> => {
      if (!sanityConfigured) {
        return null;
      }
      try {
        return await fetchAboutPage();
      } catch {
        return null;
      }
    },
    staleTime: 60_000,
  });
}
