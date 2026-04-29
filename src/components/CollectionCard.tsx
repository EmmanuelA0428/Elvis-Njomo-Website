import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { Collection } from "@/data/types";

interface CollectionCardProps {
  collection: Collection;
  index: number;
}

const CollectionCard = ({ collection, index }: CollectionCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => navigate(`/photos/${collection.id}`)}
      className="group cursor-pointer overflow-hidden rounded-lg"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={collection.cover}
          alt={collection.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-6">
          <h3 className="text-xl font-bold text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">{collection.title}</h3>
          <p className="text-sm font-semibold text-foreground drop-shadow-[0_1px_3px_rgba(0,0,0,0.75)]">{collection.photoCount} photos</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CollectionCard;
