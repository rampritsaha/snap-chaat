import { MenuItem } from '@/types/menu';

export const menuItems: MenuItem[] = [
  {
    id: 'pani-puri',
    name: 'Pani Puri',
    category: 'Chaat',
    price: 30,
    description: 'Crispy hollow puris filled with spicy and tangy water',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-puri', name: 'Extra Puri', price: 10, type: 'addon' },
      { id: 'extra-spicy', name: 'Extra Spicy', price: 0, type: 'option' },
    ],
  },
  {
    id: 'sev-puri',
    name: 'Sev Puri',
    category: 'Chaat',
    price: 40,
    description: 'Crispy puris topped with potatoes, onions, and crunchy sev',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-sev', name: 'Extra Sev', price: 10, type: 'addon' },
    ],
  },
  {
    id: 'sukha-bhelpuri',
    name: 'Sukha Bhelpuri',
    category: 'Chaat',
    price: 40,
    description: 'A dry variant of Bhelpuri, without the tamarind sauce',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-chutney', name: 'Extra Chutney', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'bhelpuri-gila',
    name: 'Bhelpuri (Gila)',
    category: 'Chaat',
    price: 50,
    description: 'A wet variant of Bhelpuri, with tamarind sauce',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-papdi', name: 'Extra Papdi', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'dahi-sev-puri',
    name: 'Dahi Sev Puri',
    category: 'Chaat',
    price: 60,
    description:
      'Crispy puris topped with yogurt, potatoes, onions, and crunchy sev',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-dahi', name: 'Extra Dahi', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'ragda-pattice',
    name: 'Ragda Pattice',
    category: 'Chaat',
    price: 60,
    description: 'Crispy potato patties served with a spicy curry',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-ragda', name: 'Extra Ragda', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'ragda-sev-puri',
    name: 'Ragda Sev Puri',
    category: 'Chaat',
    price: 60,
    description:
      'Crispy puris topped with spicy curry, potatoes, onions, and crunchy sev',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-ragda', name: 'Extra Ragda', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'dahi-bhalla',
    name: 'Dahi Bhalla',
    category: 'Chaat',
    price: 70,
    description: 'Fried dough balls soaked in yogurt and spices',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-dahi', name: 'Extra Dahi', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'delhi-papdi-chaat',
    name: 'Delhi Papdi Chaat',
    category: 'Chaat',
    price: 70,
    description: 'A flavorful mix of crispy papdis, yogurt, and spices',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-papdi', name: 'Extra Papdi', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'aloo-tikki-chaat',
    name: 'Aloo Tikki Chaat',
    category: 'Chaat',
    price: 70,
    description: 'Crispy potato patties served with yogurt, onions, and spices',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      {
        id: 'extra-aloo-tikki',
        name: 'Extra Aloo Tikki',
        price: 5,
        type: 'addon',
      },
    ],
  },
  {
    id: 'samosa-chaat',
    name: 'Samosa Chaat',
    category: 'Chaat',
    price: 65,
    description: 'Crispy samosas served with yogurt, onions, and spices',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-samosa', name: 'Extra Samosa', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'chole-samosa',
    name: 'Chole Samosa',
    category: 'Chaat',
    price: 65,
    description: 'Samosas served with a spicy chickpea curry',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-chole', name: 'Extra Chole', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'chaat-platter',
    name: 'Chaat Platter',
    category: 'Chaat',
    price: 250,
    description: 'A platter of assorted chaat items',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-item', name: 'Extra Item', price: 10, type: 'addon' },
    ],
  },
  {
    id: 'bread-butter-toast',
    name: 'Bread Butter Toast',
    category: 'Toast Sandwich',
    price: 30,
    description: 'Toasted bread with butter',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-butter', name: 'Extra Butter', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'cheese-toast',
    name: 'Cheese Toast',
    category: 'Toast Sandwich',
    price: 50,
    description: 'Toasted bread with melted cheese',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-cheese', name: 'Extra Cheese', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'jam-toast',
    name: 'Jam Toast',
    category: 'Toast Sandwich',
    price: 50,
    description: 'Toasted bread with jam',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-jam', name: 'Extra Jam', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'jam-cheese-toast',
    name: 'Jam Cheese Toast',
    category: 'Toast Sandwich',
    price: 65,
    description: 'Toasted bread with jam and melted cheese',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-jam', name: 'Extra Jam', price: 5, type: 'addon' },
      { id: 'extra-cheese', name: 'Extra Cheese', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'veg-toast',
    name: 'Veg Toast',
    category: 'Toast Sandwich',
    price: 70,
    description: 'Toasted bread with vegetables',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-veg', name: 'Extra Veg', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'veg-cheese-toast',
    name: 'Veg Cheese Toast',
    category: 'Toast Sandwich',
    price: 75,
    description: 'Toasted bread with vegetables and melted cheese',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-veg', name: 'Extra Veg', price: 5, type: 'addon' },
      { id: 'extra-cheese', name: 'Extra Cheese', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'cheesy-nachos',
    name: 'Cheesy Nachos',
    category: 'Nachos',
    price: 120,
    description: 'Tortilla chips smothered in melted cheese',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-cheese', name: 'Extra Cheese', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'mexican-nachos',
    name: 'Mexican Nachos',
    category: 'Nachos',
    price: 150,
    description:
      'Tortilla chips smothered in melted cheese, salsa, and jalapenos',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-salsa', name: 'Extra Salsa', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'peri-peri-nachos',
    name: 'Peri Peri Nachos',
    category: 'Nachos',
    price: 150,
    description:
      'Tortilla chips smothered in melted cheese and peri peri sauce',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      {
        id: 'extra-peri-peri',
        name: 'Extra Peri Peri',
        price: 5,
        type: 'addon',
      },
    ],
  },
  {
    id: 'makhani-nachos',
    name: 'Makhani Nachos',
    category: 'Nachos',
    price: 150,
    description: 'Tortilla chips smothered in melted cheese and makhani sauce',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-makhani', name: 'Extra Makhani', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'classic-french-fries',
    name: 'Classic French Fries',
    category: 'Sides',
    price: 80,
    description: 'Crispy fried potatoes',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-fries', name: 'Extra Fries', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'peri-fries',
    name: 'Peri Fries',
    category: 'Sides',
    price: 100,
    description: 'Crispy fried potatoes tossed in peri peri seasoning',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      {
        id: 'extra-peri-peri',
        name: 'Extra Peri Peri',
        price: 5,
        type: 'addon',
      },
    ],
  },
  {
    id: 'cheesy-french-fries',
    name: 'Cheesy French Fries',
    category: 'Sides',
    price: 150,
    description: 'Crispy fried potatoes smothered in melted cheese',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-cheese', name: 'Extra Cheese', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'mexican-cheesy-fries',
    name: 'Mexican Cheesy Fries',
    category: 'Sides',
    price: 150,
    description:
      'Crispy fried potatoes smothered in melted cheese, salsa, and jalapenos',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-salsa', name: 'Extra Salsa', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'potato-wedges',
    name: 'Potato Wedges',
    category: 'Sides',
    price: 100,
    description: 'Crispy fried potato wedges',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-wedges', name: 'Extra Wedges', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'peri-wedges',
    name: 'Peri Wedges',
    category: 'Sides',
    price: 100,
    description: 'Crispy fried potato wedges tossed in peri peri seasoning',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      {
        id: 'extra-peri-peri',
        name: 'Extra Peri Peri',
        price: 5,
        type: 'addon',
      },
    ],
  },
  {
    id: 'veg-sandwich',
    name: 'Veg Sandwich',
    category: 'Sandwich',
    price: 45,
    description: 'A sandwich filled with vegetables',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-veg', name: 'Extra Veg', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'veg-cheese-sandwich',
    name: 'Veg Cheese Sandwich',
    category: 'Sandwich',
    price: 60,
    description: 'A sandwich filled with vegetables and melted cheese',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-veg', name: 'Extra Veg', price: 5, type: 'addon' },
      { id: 'extra-cheese', name: 'Extra Cheese', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'aloo-sandwich',
    name: 'Aloo Sandwich',
    category: 'Sandwich',
    price: 45,
    description: 'A sandwich filled with potatoes',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-aloo', name: 'Extra Aloo', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'aloo-cheese-sandwich',
    name: 'Aloo Cheese Sandwich',
    category: 'Sandwich',
    price: 60,
    description: 'A sandwich filled with potatoes and melted cheese',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-aloo', name: 'Extra Aloo', price: 5, type: 'addon' },
      { id: 'extra-cheese', name: 'Extra Cheese', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'veg-mayo-sandwich',
    name: 'Veg Mayo Sandwich',
    category: 'Sandwich',
    price: 60,
    description: 'A sandwich filled with vegetables and mayonnaise',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-veg', name: 'Extra Veg', price: 5, type: 'addon' },
      { id: 'extra-mayo', name: 'Extra Mayo', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'veg-cheese-mayo-sandwich',
    name: 'Veg Cheese Mayo Sandwich',
    category: 'Sandwich',
    price: 80,
    description:
      'A sandwich filled with vegetables, melted cheese, and mayonnaise',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-veg', name: 'Extra Veg', price: 5, type: 'addon' },
      { id: 'extra-cheese', name: 'Extra Cheese', price: 5, type: 'addon' },
      { id: 'extra-mayo', name: 'Extra Mayo', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'chutney-sandwich',
    name: 'Chutney Sandwich',
    category: 'Sandwich',
    price: 35,
    description: 'A sandwich filled with chutney',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-chutney', name: 'Extra Chutney', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'chutney-cheese-sandwich',
    name: 'Chutney Cheese Sandwich',
    category: 'Sandwich',
    price: 55,
    description: 'A sandwich filled with chutney and melted cheese',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-chutney', name: 'Extra Chutney', price: 5, type: 'addon' },
      { id: 'extra-cheese', name: 'Extra Cheese', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'veg-grilled',
    name: 'Veg Grilled',
    category: 'Grilled Sandwich',
    price: 100,
    description: 'A grilled sandwich filled with vegetables',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-veg', name: 'Extra Veg', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'veg-cheese-grilled',
    name: 'Veg Cheese Grilled',
    category: 'Grilled Sandwich',
    price: 130,
    description: 'A grilled sandwich filled with vegetables and melted cheese',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-veg', name: 'Extra Veg', price: 5, type: 'addon' },
      { id: 'extra-cheese', name: 'Extra Cheese', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'bombay-masala-grilled',
    name: 'Bombay Masala Grilled',
    category: 'Grilled Sandwich',
    price: 150,
    description:
      'A grilled sandwich filled with Bombay masala spices and vegetables',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-masala', name: 'Extra Masala', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'bombay-masala-cheese-grilled',
    name: 'Bombay Masala Cheese Grilled',
    category: 'Grilled Sandwich',
    price: 170,
    description:
      'A grilled sandwich filled with Bombay masala spices, vegetables, and melted cheese',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-masala', name: 'Extra Masala', price: 5, type: 'addon' },
      { id: 'extra-cheese', name: 'Extra Cheese', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'cheese-chilly-grilled',
    name: 'Cheese Chilly Grilled',
    category: 'Grilled Sandwich',
    price: 160,
    description:
      'A grilled sandwich filled with melted cheese and chilly flakes',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-cheese', name: 'Extra Cheese', price: 5, type: 'addon' },
      { id: 'extra-chilly', name: 'Extra Chilly', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'tandoori-paneer-cheese',
    name: 'Tandoori Paneer Cheese',
    category: 'Grilled Sandwich',
    price: 180,
    description:
      'A grilled sandwich filled with tandoori paneer and melted cheese',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-paneer', name: 'Extra Paneer', price: 5, type: 'addon' },
      { id: 'extra-cheese', name: 'Extra Cheese', price: 5, type: 'addon' },
    ],
  },
  {
    id: 'double-trouble',
    name: 'Double Trouble',
    category: 'Grilled Sandwich',
    price: 180,
    description:
      'A grilled sandwich filled with double the amount of cheese and chilly flakes',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    customizations: [
      { id: 'extra-cheese', name: 'Extra Cheese', price: 5, type: 'addon' },
    ],
  },
];

export const categories = Array.from(
  new Set(menuItems.map((item) => item.category))
);
