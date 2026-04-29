import { useQuery } from "@tanstack/react-query";
import {
  fetchSiteSettingsHomePanels,
  type HomePanelSettings,
} from "@/lib/fetch-sanity-content";
import { sanityConfigured } from "@/lib/sanity";

export function useSiteSettingsHome() {
  return useQuery({
    queryKey: ["siteSettingsHome", import.meta.env.VITE_SANITY_PROJECT_ID],
    queryFn: async (): Promise<HomePanelSettings | null> => {
      if (!sanityConfigured) {
        return null;
      }
      try {
        return await fetchSiteSettingsHomePanels();
      } catch {
        return null;
      }
    },
    staleTime: 60_000,
  });
}
