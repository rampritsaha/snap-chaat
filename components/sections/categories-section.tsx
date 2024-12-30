'use client';

import { useState } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/menu';
import { cn } from '@/lib/utils';

interface CategoriesSectionProps {
  onCategoryChange?: (category: string) => void;
}

export function CategoriesSection({ onCategoryChange }: CategoriesSectionProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <section className="sticky top-20 bg-background z-10 border-b">
      <ScrollArea className="w-full">
        <div className="flex p-4 space-x-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={cn(
                "flex-none h-10 px-4 transition-colors",
                activeCategory === category && "bg-primary text-primary-foreground"
              )}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}