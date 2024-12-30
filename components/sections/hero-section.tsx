'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
    title: 'Authentic Indian Street Food',
    subtitle: 'Experience the true taste of India',
  },
  {
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84',
    title: 'Fresh & Delicious Chaats',
    subtitle: 'Made with love and tradition',
  },
  {
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0',
    title: 'Crispy Samosas',
    subtitle: 'Perfectly spiced, perfectly crispy',
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover brightness-50"
            priority={index === 0}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-4 p-4">
              <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
              <p className="text-xl md:text-2xl">{slide.subtitle}</p>
              <Button size="lg" className="mt-4">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
