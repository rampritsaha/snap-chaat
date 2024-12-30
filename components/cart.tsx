'use client';

import { useCart } from '@/hooks/use-cart';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

export function Cart() {
  const { items, removeItem, updateQuantity, subtotal, tax, total, clearCart } = useCart();
  const [tableNumber, setTableNumber] = useState('');

  const handlePlaceOrder = () => {
    if (!tableNumber) {
      toast({
        title: 'Table number required',
        description: 'Please enter your table number to place the order.',
        variant: 'destructive',
      });
      return;
    }

    // Here you would typically send the order to your backend
    toast({
      title: 'Order placed successfully!',
      description: `Your order will be served at table ${tableNumber}`,
    });
    clearCart();
  };

  if (items.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Cart</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">Your cart is empty</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle>Your Cart</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.menuItem.id} className="flex justify-between items-start space-x-4">
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
                      onClick={() => updateQuantity(item.menuItem.id, Math.max(0, item.quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.menuItem.id, item.quantity + 1)}
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
                    onClick={() => removeItem(item.menuItem.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex-col space-y-4">
        <div className="w-full space-y-2">
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
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">Place Order</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Complete Your Order</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label htmlFor="table-number" className="text-sm font-medium">
                  Table Number
                </label>
                <Input
                  id="table-number"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  placeholder="Enter your table number"
                />
              </div>
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
            </div>
            <DialogFooter>
              <Button onClick={handlePlaceOrder} className="w-full">
                Confirm Order
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}