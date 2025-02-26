import { useState } from "react";
import AnnouncementBanner from "@/components/layout/AnnouncementBanner";
import WelcomeSection from "@/components/home/WelcomeSection";
import CategorySelector from "@/components/home/CategorySelector";
import ProductGrid from "@/components/products/ProductGrid";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div>
      <AnnouncementBanner />
      <WelcomeSection />
      <div className="container py-12">
        <CategorySelector
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <ProductGrid category={selectedCategory === "All" ? undefined : selectedCategory} />
      </div>
      <TestimonialSection />
    </div>
  );
}