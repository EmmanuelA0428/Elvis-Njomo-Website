import { useLayoutEffect } from "react";
import CollectionCard from "@/components/CollectionCard";
import { useCollections } from "@/hooks/useCollections";

const Photos = () => {
  const { data: collections = [], isLoading } = useCollections();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <main className="min-h-screen bg-background px-6 pb-12 pt-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-12 text-4xl font-bold tracking-tight md:text-6xl">
          Photo Collections
        </h1>
        {isLoading ? (
          <p className="text-muted-foreground">Loading collections…</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection, i) => (
              <CollectionCard key={collection.id} collection={collection} index={i} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Photos;
