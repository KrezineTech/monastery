'use client';

import { useEffect, useState } from 'react';
import { ProductCard } from './product-card';
import type { Product } from '@/lib/types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';

interface FeaturedProductsSliderProps {
  title?: string;
  description?: string;
}

export function FeaturedProductsSlider({
  title = 'Featured Products',
  description = 'Discover our most loved skincare essentials',
}: FeaturedProductsSliderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/shopify/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err instanceof Error ? err.message : 'Failed to load products');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 sm:py-24">
        <div className="w-[96%] mx-auto">
          <div className="flex items-center justify-center h-96">
            <Loader className="w-8 h-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (error || products.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="w-[96%] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold font-headline text-primary mb-2">{title}</h2>
            <p className="text-foreground/80">{description}</p>
          </div>
          <Button asChild>
            <Link href="/shop">View All</Link>
          </Button>
        </div>

        <div className="relative group/carousel">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2.5">
              {products.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4 pl-2.5">
                  <div className="p-1">
                    <ProductCard product={product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/3 -translate-y-1/2 h-10 w-10 bg-white border-2 border-gray-200 text-gray-800 hover:bg-gray-100 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300" />
            <CarouselNext className="absolute right-4 top-1/3 -translate-y-1/2 h-10 w-10 bg-white border-2 border-gray-200 text-gray-800 hover:bg-gray-100 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
