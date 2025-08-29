

import { ProductCard } from '@/components/product-card';
import type { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const allProducts: Product[] = [
    { id: '1', name: 'Round Lab 1025 Dokdo Cleanser', price: 1450.00, image: 'https://placehold.co/400x500.png', aiHint: 'serum bottle', category: 'cleanser', description: 'A gentle, award-winning cleanser that whisks away impurities and makeup while maintaining skin\'s natural moisture balance. Formulated with deep-sea water from Dokdo Island, it\'s rich in minerals to soothe and hydrate.' },
    { id: '2', name: 'Beauty of Joseon Relief Sun Rice...', price: 1790.00, image: 'https://placehold.co/400x500.png', aiHint: 'cleanser bottle', category: 'sunscreen', description: 'A lightweight, creamy sunscreen that feels comfortable on the skin. Infused with 30% rice extract and grain-derived probiotics, it provides broad-spectrum UV protection while deeply hydrating and nourishing the skin.' },
    { id: '3', name: 'Q+A Hyaluronic Acid Daily Moisturiser', price: 1300.00, image: 'https://placehold.co/400x500.png', aiHint: 'moisturizer jar', category: 'cream', description: 'An ultra-hydrating daily moisturizer powered by hyaluronic acid to quench thirsty skin. This non-greasy formula absorbs quickly, leaving your skin feeling soft, supple, and perfectly prepped for the day.' },
    { id: '4', name: 'Round Lab Birch Juice Moisturizing Sun...', price: 1500.00, image: 'https://placehold.co/400x500.png', aiHint: 'mist bottle', category: 'sunscreen', description: 'A refreshing and hydrating sunscreen that doubles as a moisturizer. Formulated with birch tree sap, it helps to keep skin cool and hydrated while offering robust protection against harmful UV rays.' },
];

export default function ShopPage() {
  return (
    <>
      <section className="w-full md:pt-8 pt-7 md:mb-5 mb-3">
        <div className="w-[96%] mx-auto px-0">
          <div className="relative w-full h-[322px] md:h-[65vh] rounded-[26px] overflow-hidden">
            <Image
                src="https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Untitled_design.webp?v=1754813718"
                alt="Shop hero image"
                fill
                priority
                className="object-cover w-full h-full"
                data-ai-hint="skincare products lifestyle"
            />
            <div className="absolute inset-0 z-10 h-full flex flex-col justify-start items-start text-left text-primary pt-12 md:pt-24">
                <div className="container mx-auto px-8 md:px-12 lg:px-24">
                    <div className="max-w-md md:max-w-lg">
                         <h2 className="text-4xl md:text-[52px] font-extrabold text-primary">
                            Discover Your Glow
                        </h2>
                        <p className="mt-4 text-lg md:text-2xl text-primary/90">
                            Thoughtfully curated for your unique skin.
                        </p>
                        <Button size="lg" className="mt-8 rounded-full bg-white text-primary hover:bg-white/90" asChild>
                            <Link href="#products">Explore Products</Link>
                        </Button>
                    </div>
                </div>
            </div>
         </div>
        </div>
      </section>

      <div id="products">
        <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">All Products</h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                  Explore our full collection of natural skincare.
              </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {allProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
