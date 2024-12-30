'use client';

import { useState } from 'react';
import { menuItems } from '@/data/menu';
import { DishCard } from '@/components/dishes/dish-card';
import { CategoriesSection } from './categories-section';

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState(menuItems[0].category);

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <section className="space-y-6">
      <CategoriesSection onCategoryChange={setSelectedCategory} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <DishCard key={item.id} dish={item} />
        ))}
      </div>
    </section>
  );
}