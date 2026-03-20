import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { collections } from "@/data/collections";

const CollectionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const collection = collections.find((c) => c.id === id);

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
        <p className="mb-12 text-muted-foreground">{collection.photoCount} photos</p>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {collection.photos.map((photo, i) => (
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
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CollectionDetail;
