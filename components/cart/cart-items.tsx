'use client';

import { useCart } from '@/hooks/use-cart';
import { CartItemCard } from './cart-item-card';
import { ScrollArea } from '@/components/ui/scroll-area';

export function CartItems() {
  const { items } = useCart();

  return (
    <ScrollArea className="h-[330px] pr-4">
      <div className="space-y-4">
        {items.map((item) => (
          <CartItemCard
            key={`${item.menuItem.id}-${item.customizationKey}`}
            item={item}
          />
        ))}
      </div>
    </ScrollArea>
  );
}
