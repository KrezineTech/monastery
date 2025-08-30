
import { ProductCard } from '@/components/product-card';
import { allProducts } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ShopPage() {
  return (
    <>
      <section className="w-full md:pt-8 pt-7 md:mb-5 mb-3">
        <div className="w-[96%] mx-auto px-0">
          <div className="relative w-full h-[300px] md:h-[45vh] rounded-[26px] overflow-hidden">
            <Image
                src="https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Untitled_design.webp?v=1754813718"
                alt="Shop hero image"
                fill
                priority
                className="object-cover w-full h-full"
                data-ai-hint="skincare products lifestyle"
            />
            <div className="absolute inset-0 bg-black/30 z-10 h-full flex flex-col justify-end items-start text-white p-12">
                <div className="w-full">
                     <h2 className="text-4xl md:text-[52px] font-extrabold font-headline">
                        Shop Island
                    </h2>
                    <div className="mt-4 border-t border-white/50 w-full"></div>
                </div>
            </div>
         </div>
        </div>
      </section>

      <div id="products">
        <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
              <h1 className="text-4xl font-bold font-headline tracking-tight text-primary sm:text-5xl">All Products</h1>
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
