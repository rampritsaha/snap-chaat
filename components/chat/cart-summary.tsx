'use client';

import { useCart } from '@/hooks/use-cart';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function CartSummary() {
  const { subtotal, tax, total, clearCart } = useCart();

  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (10%)</span>
            <span>₹{tax}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>
        <Button onClick={clearCart} variant="outline" className="w-full">
          Clear Cart
        </Button>
      </CardContent>
    </Card>
  );
}