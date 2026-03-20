import { useEffect, useState } from "react";

const VideoHero = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fade = Math.max(1 - scrollY / (window.innerHeight * 0.6), 0);
      setOpacity(fade);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden" style={{ opacity }}>
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster=""
      >
        {/* Replace with your showreel video */}
        <source
          src="/videos/hero-reel.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
          ELVIS NJOMO
        </h1>
        <p className="max-w-xl text-xl italic text-foreground/80 md:text-2xl lg:text-3xl">
          Photography & Videography
        </p>
        <div className="mt-12 animate-bounce">
          <svg
            className="h-6 w-6 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
