'use client';

import { CartItem } from '@/types/menu';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';

interface CartItemCardProps {
  item: CartItem;
}

export function CartItemCard({ item }: CartItemCardProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h4 className="font-medium">{item.menuItem.name}</h4>
            {item.customizations.length > 0 && (
              <p className="text-sm text-muted-foreground">
                {item.customizations.map((c) => c.name).join(', ')}
              </p>
            )}
            <div className="flex items-center space-x-2 mt-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateQuantity(
                  item.menuItem.id, 
                  Math.max(0, item.quantity - 1),
                  item.customizationKey
                )}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span>{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateQuantity(
                  item.menuItem.id, 
                  item.quantity + 1,
                  item.customizationKey
                )}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium">₹{item.totalPrice * item.quantity}</p>
            <Button
              variant="ghost"
              size="icon"
              className="mt-2"
              onClick={() => removeItem(item.menuItem.id, item.customizationKey)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}