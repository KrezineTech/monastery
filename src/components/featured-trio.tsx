
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import type { Product } from '@/lib/types';

const trioProducts: Product[] = [
    {
        id: '1',
        name: 'Purity in a Drop Toner & Essence',
        title: 'For Dullness & Uneven Tone',
        subtitle: 'A gentle reset for your skin, this two-in-one toner and essence sweeps away impurities while hydrating deeply. The water-light formula is infused with rice water, glycolic acid, turmeric, and salicylic acid to visibly refine pores, even tone, and leave your skin feeling calm and softly radiant.',
        price: 999.00,
        originalPrice: 1199.00,
        image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Untitled-2.webp?v=1756537408',
        videoUrl: 'https://cdn.shopify.com/videos/c/o/v/c319ba0f716a4c01b43fccbf4232aa13.mp4',
        aiHint: 'toner essence bottle',
        category: 'essence',
    },
    {
        id: '2',
        name: 'DewDrop Evenness Boost Serum',
        title: 'For Dark Spots & Pigmentation',
        subtitle: 'Your skin, only smoother. This daily serum primes, hydrates, and visibly evens tone in one silky step. Powered by 50% Korean rice water, Niacinamide, Turmeric, and Hyaluronic acid, the lightweight gel-serum texture sinks in instantly - softening the look of pores and leaving a dewy, balanced finish.',
        price: 999.00,
        originalPrice: 1299.00,
        image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Serum_copy.webp?v=1754934890',
        videoUrl: 'https://cdn.shopify.com/videos/c/o/v/b3c5d81c41e84fa0a5c9bb3c2502cdb2.mp4',
        aiHint: 'serum bottle',
        category: 'serum',
    },
    {
        id: '3',
        name: 'Morning Dew Moisturizer with SPF 15',
        title: 'For Dryness & Sun Protection',
        subtitle: 'A daily moisturizer that provides essential hydration and sun protection. Its non-greasy formula leaves the skin feeling fresh and dewy, perfect for a morning skincare routine.',
        price: 1300.00,
        image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Untitled-1.webp?v=1754914138',
        videoUrl: 'https://cdn.shopify.com/videos/c/o/v/8be0e8a971384750a438fe3622c65683.mp4',
        aiHint: 'moisturizer bottle',
        category: 'moisturizer',
    },
];

export function FeaturedTrio() {
  return (
    <section className="mt-[120px]">
      <div className="w-[96%] mx-auto">
        <h2 className="text-3xl font-bold font-headline text-center text-primary mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trioProducts.map((product) => (
            <Link key={product.id} href={`/shop/${product.id}`} className="block">
                <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
