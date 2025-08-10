import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import type { Product } from '@/lib/types';

const trioProducts: Product[] = [
    { id: '1', name: 'Round Lab 1025 Dokdo Cleanser', price: 1450.00, image: '', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', aiHint: 'serum bottle', title: 'PURITY IN A DROP', subtitle: 'Toner & Essence' },
    { id: '2', name: 'Beauty of Joseon Relief Sun Rice...', price: 1790.00, image: '', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', aiHint: 'cleanser bottle', title: 'DEWDROP EVENNESS', subtitle: 'Serum' },
    { id: '3', name: 'Q+A Hyaluronic Acid Daily Moisturiser', price: 1300.00, image: '', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', aiHint: 'moisturizer jar', title: 'MORNING DEW', subtitle: 'Moisturiser' },
];

export function FeaturedTrio() {
  return (
    <section className="mt-[120px]">
      <div className="w-[96%] mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trioProducts.map((product) => (
            <div key={product.id} className="h-[500px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
