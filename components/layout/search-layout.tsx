'use client';

import { useState } from 'react';
import { SearchBox } from '@/components/search/search-box';
import { MobileTabs } from '@/components/navigation/mobile-tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CartSection } from '@/components/cart/cart-section';
import { ProductSection } from '@/components/product/product-section';
import { useCart } from '@/hooks/use-cart';
import { menuItems } from '@/data/menu';

export function SearchLayout() {
  const [activeTab, setActiveTab] = useState('search');
  const { addItem } = useCart();

  const handleSearch = (query: string) => {
    const item = menuItems.find(
      (item) => item.name.toLowerCase() === query.toLowerCase()
    );
    if (item) {
      addItem(item, []);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 h-[calc(100vh-14rem)]">
          {/* Left column - Products */}
          <div className="lg:col-span-3 flex flex-col">
            <ScrollArea className="flex-1">
              <ProductSection />
            </ScrollArea>
          </div>

          {/* Right column - Cart */}
          <div className="lg:col-span-2">
            <ScrollArea className="h-full">
              <CartSection />
            </ScrollArea>
          </div>
        </div>
      </div>

      {/* Fixed bottom search box */}
      <div className="border-t bg-background p-4">
        <div className="container mx-auto">
          <SearchBox onSearch={handleSearch} className="max-w-3xl mx-auto" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileTabs onTabChange={setActiveTab} />
    </div>
  );
}
