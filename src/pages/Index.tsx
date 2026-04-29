import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import VideoHero from "@/components/VideoHero";
import WorkNavigation from "@/components/WorkNavigation";
import ContactSection from "@/components/ContactSection";
import { useCollections } from "@/hooks/useCollections";
import { useSiteSettingsHome } from "@/hooks/useSiteSettingsHome";
import { useVideos } from "@/hooks/useVideos";

const Index = () => {
  const { data: siteHome } = useSiteSettingsHome();
  const { data: collections = [] } = useCollections();
  const { data: videos = [] } = useVideos();

  const firstCollection = collections[0];
  const firstVideo = videos[0];

  const photosImageSrc = siteHome?.photosPanelSrc || firstCollection?.cover;
  const videosImageSrc = siteHome?.videosPanelSrc || firstVideo?.thumbnail;
  const videosYoutubeId = siteHome?.videosPanelSrc ? undefined : firstVideo?.youtubeId;

  return (
    <main className="min-h-screen bg-background">
      <VideoHero />
      <WorkNavigation
        photosImageSrc={photosImageSrc}
        videosImageSrc={videosImageSrc}
        videosYoutubeId={videosYoutubeId}
      />
      <ContactSection />
    </main>
  );
};

export default Index;
