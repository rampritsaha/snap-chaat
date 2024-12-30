'use client';

import { Card } from '@/components/ui/card';
import { CartItems } from './cart-items';
import { CartTotal } from './cart-total';
import { useCart } from '@/hooks/use-cart';

export function CartSection() {
  const { items } = useCart();

  return (
    <Card className="p-4">
      <h2 className="text-xl font-semibold mb-4">Your Order</h2>
      {items.length === 0 ? (
        <p className="text-muted-foreground text-center py-8">
          Your cart is empty
        </p>
      ) : (
        <div className="space-y-4">
          <CartItems />
          <CartTotal />
        </div>
      )}
    </Card>
  );
}
