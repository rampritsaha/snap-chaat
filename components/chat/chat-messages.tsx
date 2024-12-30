'use client';

import { useCart } from '@/hooks/use-cart';
import { CartItemCard } from './cart-item-card';
import { CartSummary } from './cart-summary';

export function ChatMessages() {
  const { items } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        Type an item name and press Enter to add it to your order
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CartItemCard
          key={`${item.menuItem.id}-${item.customizationKey}`}
          item={item}
        />
      ))}
      <div className="sm:hidden">
        <CartSummary />
      </div>
    </div>
  );
}
