'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { MenuItem } from '@/types/menu';
import { useToast } from '@/hooks/use-toast';

interface DishCardProps {
  dish: MenuItem;
}

export function DishCard({ dish }: DishCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem(dish, []);
    toast({
      title: 'Added to cart',
      description: `${dish.name} has been added to your cart`,
    });
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        {dish.image && (
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover"
          />
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg">{dish.name}</h3>
          </div>
          <p className="font-bold">₹{dish.price}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
