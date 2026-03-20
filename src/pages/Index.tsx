import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import VideoHero from "@/components/VideoHero";
import WorkNavigation from "@/components/WorkNavigation";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <VideoHero />
      <WorkNavigation />
      <ContactSection />
    </main>
  );
};

export default Index;
