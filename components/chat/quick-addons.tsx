"use client";

import { MenuItem } from "@/types/menu";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Checkbox } from "@/components/ui/checkbox";

interface QuickAddonsProps {
  item: MenuItem;
  selectedCustomizations: { id: string; name: string; price: number }[];
  onCustomizationChange: (
    customizations: { id: string; name: string; price: number }[]
  ) => void;
}

export function QuickAddons({
  item,
  selectedCustomizations,
  onCustomizationChange,
}: QuickAddonsProps) {
  if (!item.customizations?.length) return null;

  return (
    <div className="mt-4 flex items-center gap-x-4">
      {item.customizations.map((customization) => {
        const isSelected = selectedCustomizations.some(
          (c) => c.id === customization.id
        );

        return (
          <div key={customization.id} className="flex items-center space-x-2">
            <Checkbox
              id={customization.id}
              checked={isSelected}
              onCheckedChange={(checked) => {
                if (checked) {
                  onCustomizationChange([
                    ...selectedCustomizations,
                    {
                      id: customization.id,
                      name: customization.name,
                      price: customization.price,
                    },
                  ]);
                } else {
                  onCustomizationChange(
                    selectedCustomizations.filter(
                      (c) => c.id !== customization.id
                    )
                  );
                }
              }}
            />
            <label htmlFor={customization.id} className="text-sm">
              {customization.name} (+₹{customization.price})
            </label>
          </div>
        );
      })}
    </div>
  );
}
