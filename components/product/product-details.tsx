'use client';

import { useState } from 'react';
import { MenuItem } from '@/types/menu';
import { Button } from '../ui/button';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '../ui/alert';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';

interface ProductDetailsProps {
  product: MenuItem;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { addItem, items } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    const existingItem = items.find(item => item.menuItem.id === product.id);
    if (existingItem) {
      toast({
        title: 'Item already in cart',
        description: 'You can adjust the quantity in the cart section.',
      });
      return;
    }
    addItem(product, []);
    setShowConfirmation(false);
    toast({
      title: 'Item added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="mt-4 space-y-4">
      <div>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-muted-foreground">{product.description}</p>
        <p className="font-medium mt-2">₹{product.price}</p>
      </div>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogTrigger asChild>
          <Button className="w-full">Add to Cart</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Addition</DialogTitle>
          </DialogHeader>
          <Alert>
            <AlertDescription>
              Add {product.name} to your cart for ₹{product.price}?
            </AlertDescription>
          </Alert>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmation(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddToCart}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}