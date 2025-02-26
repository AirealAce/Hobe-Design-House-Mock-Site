import { type Product } from "@shared/schema";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={`/product/${product.id}`}>
        <Card className="cursor-pointer overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-square relative">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start p-4">
            <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
            <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
              {product.description}
            </p>
            <p className="font-bold text-primary">
              ${(product.price / 100).toFixed(2)}
            </p>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
