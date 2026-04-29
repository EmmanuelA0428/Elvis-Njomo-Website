import { useMemo, useEffect, useLayoutEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { motion } from "framer-motion";
import { useCollections } from "@/hooks/useCollections";

const shuffleArray = <T,>(items: T[]): T[] => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const CollectionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number | null>(null);
  const { data: collections = [], isLoading } = useCollections();
  const collection = collections.find((c) => c.id === id);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  const shuffledPhotos = useMemo(() => {
    if (!collection) return [];
    return shuffleArray(collection.photos);
  }, [collection]);

  const selectedPhoto = currentPhotoIndex !== null ? shuffledPhotos[currentPhotoIndex] : null;

  const goPrevious = useCallback(() => {
    if (currentPhotoIndex === null || shuffledPhotos.length === 0) return;
    setCurrentPhotoIndex((prev) => {
      if (prev === null) return 0;
      return (prev - 1 + shuffledPhotos.length) % shuffledPhotos.length;
    });
  }, [currentPhotoIndex, shuffledPhotos.length]);

  const goNext = useCallback(() => {
    if (currentPhotoIndex === null || shuffledPhotos.length === 0) return;
    setCurrentPhotoIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % shuffledPhotos.length;
    });
  }, [currentPhotoIndex, shuffledPhotos.length]);

  useEffect(() => {
    if (selectedPhoto === null) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCurrentPhotoIndex(null);
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrevious();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedPhoto, goNext, goPrevious]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading collection…</p>
      </div>
    );
  }

  if (!collection) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Collection not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background px-6 pb-12 pt-20">
      <div className="mx-auto max-w-6xl">
        <button
          onClick={() => navigate("/photos")}
          className="mb-8 flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Collections
        </button>
        <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-6xl">
          {collection.title}
        </h1>
        <p className="mb-12 text-muted-foreground font-semibold">{collection.photoCount} photos</p>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {shuffledPhotos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="mb-4 break-inside-avoid overflow-hidden rounded-lg"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full cursor-pointer object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
                onClick={() => setCurrentPhotoIndex(i)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={() => setCurrentPhotoIndex(null)}
        >
          <div className="relative max-h-full max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setCurrentPhotoIndex(null)}
              className="absolute right-2 top-2 rounded-full bg-white/90 p-2 text-black shadow"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <button
              onClick={goPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black shadow hover:bg-white"
              aria-label="Previous photo"
            >
              ‹
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="mx-auto max-h-[80vh] w-auto max-w-[80vw] rounded-lg"
              onClick={goNext}
              title="Click image to go next"
            />
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black shadow hover:bg-white"
              aria-label="Next photo"
            >
              ›
            </button>
            <p className="mt-3 text-center text-sm text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {currentPhotoIndex !== null && `${currentPhotoIndex + 1} / ${shuffledPhotos.length}`} • {selectedPhoto.alt}
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default CollectionDetail;
