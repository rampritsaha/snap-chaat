'use client';

import { useRef } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { DishCard } from '@/components/dishes/dish-card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { menuItems } from '@/data/menu';

export function TrendingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const trendingItems = menuItems.slice(0, 6);

  return (
    <section className="relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Trending & Popular</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <ScrollArea>
        <div
          ref={scrollRef}
          className="flex gap-4 pb-4"
          style={{ paddingLeft: '1px' }}
        >
          {trendingItems.map((item) => (
            <div key={item.id} className="flex-none w-[280px]">
              <DishCard dish={item} />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
