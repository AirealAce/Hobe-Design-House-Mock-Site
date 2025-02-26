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
          onSelect={(category) => setSelectedCategory(category === "All" ? "" : category)}
        />
        <ProductGrid category={selectedCategory || undefined} />
      </div>
      <TestimonialSection />
    </div>
  );
}
