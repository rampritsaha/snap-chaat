'use client';

import { useRef, useEffect } from 'react';
import { ChatMessages } from './chat-messages';
import { SearchInput } from './search-input';
import { useCart } from '@/hooks/use-cart';
import { menuItems } from '@/data/menu';
import { ProductSearch } from '../product/product-search';

export function ChatContainer() {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { items } = useCart();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [items]);

  const handleSearch = (query: string) => {
    const item = menuItems.find(
      (item) => item.name.toLowerCase() === query.toLowerCase()
    );
    if (item) {
      useCart.getState().addItem(item, []);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-7rem)]">
      <div className="flex-1 overflow-y-auto">
        <ChatMessages />
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t p-4 bg-background">
        <ProductSearch onSearch={handleSearch} />
      </div>
    </div>
  );
}
