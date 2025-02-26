import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { type Product } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();

  const { data: product, isLoading } = useQuery<Product>({
    queryKey: [`/api/products/${id}`],
  });

  if (isLoading) {
    return (
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Skeleton className="aspect-square w-full" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-6 w-1/4" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-bold text-primary">
              ${(product.price / 100).toFixed(2)}
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>
          <Button size="lg" className="w-full md:w-auto">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
          <div className="pt-6 border-t">
            <h3 className="font-semibold mb-2">Product Details</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Premium materials</li>
              <li>Handcrafted with care</li>
              <li>Free shipping over $100</li>
              <li>30-day return policy</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
