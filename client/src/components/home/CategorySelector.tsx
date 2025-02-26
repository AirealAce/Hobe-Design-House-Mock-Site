import { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CategorySelectorProps {
  onSelect: (category: string) => void;
  selectedCategory: string;
}

export default function CategorySelector({ onSelect, selectedCategory }: CategorySelectorProps) {
  const categories = [
    "All",
    "Accessories",
    "Bags",
    "Lighting",
    "Stationery",
    "Home Decor",
  ];

  return (
    <div className="py-8 flex justify-center">
      <ScrollArea className="w-full max-w-3xl mx-auto rounded-md">
        <div className="flex justify-center space-x-4 p-1">
          {categories.map((category) => (
            <motion.div
              key={category}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => onSelect(category)}
                className="min-w-[100px]"
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}