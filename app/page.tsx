import { HeroSection } from '@/components/sections/hero-section';
import { TrendingSection } from '@/components/sections/trending-section';
import { CategoriesSection } from '@/components/sections/categories-section';
import { MenuSection } from '@/components/sections/menu-section';
import { FloatingCart } from '@/components/cart/floating-cart';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <div className="container mx-auto px-4 space-y-8 py-8">
        <TrendingSection />
        <MenuSection />
      </div>
      <FloatingCart />
    </main>
  );
}
