import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import type { Product } from '@/lib/types';

const trioProducts: Product[] = [
    { id: '1', name: 'Round Lab 1025 Dokdo Cleanser', price: 1450.00, image: 'https://placehold.co/400x500.png', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', aiHint: 'serum bottle' },
    { id: '2', name: 'Beauty of Joseon Relief Sun Rice...', price: 1790.00, image: 'https://placehold.co/400x500.png', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', aiHint: 'cleanser bottle' },
    { id: '3', name: 'Q+A Hyaluronic Acid Daily Moisturiser', price: 1300.00, image: 'https://placehold.co/400x500.png', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', aiHint: 'moisturizer jar' },
];

export function FeaturedTrio() {
  return (
    <section className="mt-[120px]">
      <div className="w-[96%] mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trioProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}