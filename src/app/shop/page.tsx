
import { ProductCard } from '@/components/product-card';
import type { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const allProducts: Product[] = [
    { id: '1', name: 'Purity in a Drop Toner & Essence', price: 1450.00, image: 'https://placehold.co/400x500.png', aiHint: 'toner essence bottle', category: 'essence', description: 'A dual-action formula that hydrates like a toner and nourishes like an essence. It purifies pores and preps the skin to absorb serums and moisturizers more effectively, leaving it soft and supple.' },
    { id: '2', name: 'DewDrop Evenness Boost Serum', price: 1790.00, image: 'https://placehold.co/400x500.png', aiHint: 'serum bottle', category: 'serum', description: 'This lightweight serum targets uneven skin tone and texture. Packed with powerful antioxidants, it brightens the complexion and reduces the appearance of dark spots for a dewy, even glow.' },
    { id: '3', name: 'Morning Dew Moisturizer with SPF 15', price: 1300.00, image: 'https://placehold.co/400x500.png', aiHint: 'moisturizer bottle', category: 'moisturizer', description: 'A daily moisturizer that provides essential hydration and sun protection. Its non-greasy formula leaves the skin feeling fresh and dewy, perfect for a morning skincare routine.' },
    { id: '4', name: 'Yusuru Radiance Combo Set', price: 2490.00, image: 'https://placehold.co/400x500.png', aiHint: 'skincare combo set', category: 'set', description: 'The ultimate radiance-boosting collection. This set includes our best-selling products to cleanse, tone, treat, and moisturize, revealing a brighter, more luminous complexion.' },
];

export default function ShopPage() {
  return (
    <>
      <section className="w-full md:pt-8 pt-7 md:mb-5 mb-3">
        <div className="px-0">
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
