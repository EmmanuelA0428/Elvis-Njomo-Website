import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { collections } from "@/data/collections";
import CollectionCard from "@/components/CollectionCard";

const Photos = () => {
  const navigate = useNavigate();

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
          Photo Collections
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection, i) => (
            <CollectionCard key={collection.id} collection={collection} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Photos;
