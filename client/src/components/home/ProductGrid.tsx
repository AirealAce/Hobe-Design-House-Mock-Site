import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Product } from "@shared/schema";

interface ProductGridProps {
  categoryId: number | null;
}

export default function ProductGrid({ categoryId }: ProductGridProps) {
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products", categoryId],
    queryFn: async () => {
      const url = new URL("/api/products", window.location.origin);
      if (categoryId) {
        url.searchParams.set("categoryId", categoryId.toString());
      }
      const res = await fetch(url);
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(8)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <div className="aspect-square bg-gray-200" />
            <CardContent className="p-4">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={`/product/${product.id}`}>
            <a>
              <Card className="group cursor-pointer transition-transform hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 line-clamp-2">{product.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <p className="font-bold text-primary">
                    ${(product.price / 100).toFixed(2)}
                  </p>
                </CardFooter>
              </Card>
            </a>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}