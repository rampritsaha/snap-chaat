'use client';

import { create } from 'zustand';
import { CartItem, MenuItem } from '@/types/menu';

interface CartStore {
  items: CartItem[];
  addItem: (item: MenuItem, customizations: CartItem['customizations']) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  updateCustomizations: (itemId: string, customizations: CartItem['customizations']) => void;
  clearCart: () => void;
  subtotal: number;
  tax: number;
  total: number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  subtotal: 0,
  tax: 0,
  total: 0,
  
  addItem: (menuItem, customizations) => {
    set((state) => {
      const existingItem = state.items.find(item => item.menuItem.id === menuItem.id);

      const newItems = existingItem
        ? state.items.map((item) =>
            item === existingItem
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [
            ...state.items,
            {
              menuItem,
              quantity: 1,
              customizations,
              totalPrice: menuItem.price + customizations.reduce((sum, c) => sum + c.price, 0),
            },
          ];

      const subtotal = calculateSubtotal(newItems);
      const tax = subtotal * 0.1;
      const total = subtotal + tax;

      return { items: newItems, subtotal, tax, total };
    });
  },

  updateCustomizations: (itemId, customizations) => {
    set((state) => {
      const newItems = state.items.map((item) =>
        item.menuItem.id === itemId
          ? {
              ...item,
              customizations,
              totalPrice: item.menuItem.price + customizations.reduce((sum, c) => sum + c.price, 0),
            }
          : item
      );

      const subtotal = calculateSubtotal(newItems);
      const tax = subtotal * 0.1;
      const total = subtotal + tax;

      return { items: newItems, subtotal, tax, total };
    });
  },

  removeItem: (itemId) => {
    set((state) => {
      const newItems = state.items.filter(item => item.menuItem.id !== itemId);
      const subtotal = calculateSubtotal(newItems);
      const tax = subtotal * 0.1;
      const total = subtotal + tax;

      return { items: newItems, subtotal, tax, total };
    });
  },

  updateQuantity: (itemId, quantity) => {
    set((state) => {
      const newItems = state.items.map((item) =>
        item.menuItem.id === itemId
          ? { ...item, quantity }
          : item
      ).filter(item => item.quantity > 0);

      const subtotal = calculateSubtotal(newItems);
      const tax = subtotal * 0.1;
      const total = subtotal + tax;

      return { items: newItems, subtotal, tax, total };
    });
  },

  clearCart: () => {
    set({ items: [], subtotal: 0, tax: 0, total: 0 });
  },
}));

function calculateSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => {
    const itemTotal = item.totalPrice * item.quantity;
    return sum + itemTotal;
  }, 0);
}