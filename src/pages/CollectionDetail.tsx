import { useMemo, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { motion } from "framer-motion";
import { collections, Photo } from "@/data/collections";

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
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const collection = collections.find((c) => c.id === id);

  const shuffledPhotos = useMemo(() => {
    if (!collection) return [];
    return shuffleArray(collection.photos);
  }, [collection]);

  useEffect(() => {
    if (!selectedPhoto) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPhoto(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedPhoto]);

  if (!collection) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Collection not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background px-6 py-12">
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
                onClick={() => setSelectedPhoto(photo)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-h-full max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-2 top-2 rounded-full bg-white/90 p-2 text-black shadow"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-h-[90vh] w-auto max-w-full rounded-lg"
            />
            <p className="mt-2 text-center text-sm text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{selectedPhoto.alt}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default CollectionDetail;
