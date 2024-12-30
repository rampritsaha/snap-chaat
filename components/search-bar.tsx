'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { menuItems } from '@/data/menu';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { useRouter } from 'next/navigation';

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Search menu items..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Menu Items">
          {menuItems.map((item) => (
            <CommandItem
              key={item.id}
              value={item.name}
              onSelect={() => {
                const element = document.getElementById(item.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
                setOpen(false);
              }}
            >
              <span>{item.name}</span>
              <span className="ml-2 text-muted-foreground">₹{item.price}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}