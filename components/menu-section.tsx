'use client';

import { MenuItem as MenuItemType } from '@/types/menu';
import { menuItems } from '@/data/menu';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { useCart } from '@/hooks/use-cart';

interface MenuSectionProps {
  category: string;
}

export function MenuSection({ category }: MenuSectionProps) {
  const items = menuItems.filter((item) => item.category === category);
  
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function MenuItem({ item }: { item: MenuItemType }) {
  const [selectedCustomizations, setSelectedCustomizations] = useState<{
    id: string;
    name: string;
    price: number;
  }[]>([]);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(item, selectedCustomizations);
  };

  return (
    <Card>
      <CardHeader>
        {item.image && (
          <div className="relative w-full h-48 mb-4">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover rounded-md"
            />
          </div>
        )}
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">₹{item.price}</p>
          {item.customizations ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button>Customize & Add</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Customize {item.name}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {item.customizations.map((customization) => (
                    <div key={customization.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={customization.id}
                        checked={selectedCustomizations.some((c) => c.id === customization.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedCustomizations([...selectedCustomizations, {
                              id: customization.id,
                              name: customization.name,
                              price: customization.price,
                            }]);
                          } else {
                            setSelectedCustomizations(
                              selectedCustomizations.filter((c) => c.id !== customization.id)
                            );
                          }
                        }}
                      />
                      <label htmlFor={customization.id} className="flex-1">
                        {customization.name}
                      </label>
                      <span>₹{customization.price}</span>
                    </div>
                  ))}
                  <Button onClick={handleAddToCart} className="w-full">
                    Add to Cart - ₹{item.price + selectedCustomizations.reduce((sum, c) => sum + c.price, 0)}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ) : (
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}