import { type Product } from "@shared/schema";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 50) + 10);
  const rating = (Math.random() * 2 + 3).toFixed(1); // Random rating between 3.0 and 5.0

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={`/product/${product.id}`}>
        <Card className="group cursor-pointer overflow-hidden relative">
          <button
            onClick={handleLike}
            className="absolute top-2 right-2 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
          >
            <Heart
              className={`h-5 w-5 transition-colors ${
                isLiked ? "fill-red-500 text-red-500" : "text-gray-500"
              }`}
            />
          </button>

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
            <div className="w-full flex justify-between items-center">
              <p className="font-bold text-primary">
                ${(product.price / 100).toFixed(2)}
              </p>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm">{rating}</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span className="ml-1 text-sm">{likes}</span>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}