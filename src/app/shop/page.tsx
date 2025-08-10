import { ProductCard } from '@/components/product-card';
import type { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const allProducts: Product[] = [
    { id: '1', name: 'Round Lab 1025 Dokdo Cleanser', price: 1450.00, image: 'https://placehold.co/400x500.png', aiHint: 'serum bottle', category: 'cleanser' },
    { id: '2', name: 'Beauty of Joseon Relief Sun Rice...', price: 1790.00, image: 'https://placehold.co/400x500.png', aiHint: 'cleanser bottle', category: 'sunscreen' },
    { id: '3', name: 'Q+A Hyaluronic Acid Daily Moisturiser', price: 1300.00, image: 'https://placehold.co/400x500.png', aiHint: 'moisturizer jar', category: 'cream' },
    { id: '4', name: 'Round Lab Birch Juice Moisturizing Sun...', price: 1500.00, image: 'https://placehold.co/400x500.png', aiHint: 'mist bottle', category: 'sunscreen' },
    { id: '5', name: 'Round Lab Soybean Nourishing Toner', price: 2490.00, image: 'https://placehold.co/400x500.png', aiHint: 'eye cream', category: 'toner' },
    { id: '6', name: 'Exfoliating Toner', price: 30.00, image: 'https://placehold.co/400x500.png', aiHint: 'toner bottle', category: 'toner' },
    { id: '7', name: 'Overnight Repair Mask', price: 55.00, image: 'https://placehold.co/400x500.png', aiHint: 'face mask', category: 'mask' },
    { id: '8', name: 'Soothing Face Oil', price: 48.00, image: 'https://placehold.co/400x500.png', aiHint: 'face oil', category: 'oil' },
];

export default function ShopPage() {
  return (
    <>
      <section className="w-full md:pt-8 pt-7 md:mb-5 mb-3">
        <div className="w-[96%] mx-auto px-0">
          <div className="relative w-full h-[322px] md:h-[65vh] rounded-[26px] overflow-hidden">
            <Image
                src="https://cdn.shopify.com/s/files/1/0723/1376/6028/files/WEBSITE_REVAMP_DESIGNS_4.webp?v=1754619697"
                alt="Shop hero image"
                fill
                priority
                className="object-cover w-full h-full"
                data-ai-hint="skincare products lifestyle"
            />
            <div className="absolute inset-0 z-10 h-full flex flex-col justify-center items-center text-center text-primary">
                <div className="container mx-auto px-8 md:px-12 lg:px-24">
                    <div className="max-w-md md:max-w-lg mx-auto">
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

      <div id="products" className="w-[96%] mx-auto">
        <div className="container py-16 sm:py-24">
          <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">All Products</h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                  Explore our full collection of natural skincare.
              </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {allProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
