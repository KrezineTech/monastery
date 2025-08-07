import { ProductCard } from '@/components/product-card';
import type { Product } from '@/lib/types';

const allProducts: Product[] = [
    { id: '1', name: 'Round Lab 1025 Dokdo Cleanser', price: 1450.00, image: 'https://placehold.co/400x500.png', aiHint: 'serum bottle', category: 'пенка' },
    { id: '2', name: 'Beauty of Joseon Relief Sun Rice...', price: 1790.00, image: 'https://placehold.co/400x500.png', aiHint: 'cleanser bottle', category: 'солнцезащитный крем' },
    { id: '3', name: 'Q+A Hyaluronic Acid Daily Moisturiser', price: 1300.00, image: 'https://placehold.co/400x500.png', aiHint: 'moisturizer jar', category: 'крем' },
    { id: '4', name: 'Round Lab Birch Juice Moisturizing Sun...', price: 1500.00, image: 'https://placehold.co/400x500.png', aiHint: 'mist bottle', category: 'солнцезащитный крем' },
    { id: '5', name: 'Round Lab Soybean Nourishing Toner', price: 2490.00, image: 'https://placehold.co/400x500.png', aiHint: 'eye cream', category: 'тонер' },
    { id: '6', name: 'Exfoliating Toner', price: 30.00, image: 'https://placehold.co/400x500.png', aiHint: 'toner bottle', category: 'тонер' },
    { id: '7', name: 'Overnight Repair Mask', price: 55.00, image: 'https://placehold.co/400x500.png', aiHint: 'face mask', category: 'маска' },
    { id: '8', name: 'Soothing Face Oil', price: 48.00, image: 'https://placehold.co/400x500.png', aiHint: 'face oil', category: 'масло' },
];

export default function ShopPage() {
  return (
    <div className="w-[96%] mx-auto">
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
  );
}
