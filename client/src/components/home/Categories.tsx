import { useQuery } from "@tanstack/react-query";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import type { Category } from "@shared/schema";

interface CategoryItemProps {
  category: Category;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

function CategoryItem({ category, isSelected, onSelect }: CategoryItemProps) {
  return (
    <Button
      variant={isSelected ? "default" : "outline"}
      className="whitespace-nowrap"
      onClick={() => onSelect(category.id)}
    >
      {category.name}
    </Button>
  );
}

interface CategoriesProps {
  selectedCategory: number | null;
  onSelectCategory: (id: number | null) => void;
}

export default function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  return (
    <section className="py-6 border-y">
      <div className="container mx-auto px-4">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-4">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => onSelectCategory(null)}
            >
              All
            </Button>
            {categories.map((category) => (
              <CategoryItem
                key={category.id}
                category={category}
                isSelected={selectedCategory === category.id}
                onSelect={onSelectCategory}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
