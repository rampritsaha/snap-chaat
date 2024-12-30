'use client';

import { ChatContainer } from '@/components/chat/chat-container';
import { CartSection } from '@/components/cart/cart-section';

export function OrderLayout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-3">
        <ChatContainer />
      </div>
      <div className="lg:col-span-2">
        <CartSection />
      </div>
    </div>
  );
}
