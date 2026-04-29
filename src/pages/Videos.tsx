import { useNavigate } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useVideos } from "@/hooks/useVideos";

const Videos = () => {
  const navigate = useNavigate();
  const { data: videos = [], isLoading } = useVideos();

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        <h1 className="mb-12 text-4xl font-bold tracking-tight md:text-6xl">
          Video Work
        </h1>
        {isLoading ? (
          <p className="text-muted-foreground">Loading videos…</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, i) => (
            <motion.a
              key={video.id}
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground/80">
                  <Play className="h-6 w-6 fill-background text-background" />
                </div>
              </div>
              <p className="mt-2 text-sm font-bold text-foreground drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{video.title}</p>
            </motion.a>
          ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Videos;
