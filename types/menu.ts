export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  image?: string;
  customizations?: Customization[];
  suggestedItems?: string[];
}

export interface Customization {
  id: string;
  name: string;
  price: number;
  type: 'addon' | 'option';
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  customizations: {
    id: string;
    name: string;
    price: number;
  }[];
  totalPrice: number;
  customizationKey: string;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
}