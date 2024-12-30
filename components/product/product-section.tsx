'use client';

import { useState } from 'react';
import { ProductSearch } from './product-search';
import { ProductDetails } from './product-details';
import { MenuItem } from '@/types/menu';
import { menuItems } from '@/data/menu';
import { useSpellCheck } from '@/hooks/use-spell-check';
import { Card } from '../ui/card';

export function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const { checkSpelling } = useSpellCheck();

  const handleSearch = (query: string) => {
    const correctedQuery = checkSpelling(query);
    const product = menuItems.find(
      item => item.name.toLowerCase() === correctedQuery.toLowerCase()
    );
    setSelectedProduct(product || null);
  };

  return (
    <Card className="p-4">
      <ProductSearch onSearch={handleSearch} />
      {selectedProduct && (
        <ProductDetails product={selectedProduct} />
      )}
    </Card>
  );
}