import { ProductCard } from '@/components/product-card';
import type { Product } from '@/lib/types';

const allProducts: Product[] = [
    { id: '1', name: 'Glow Serum', price: 45.00, image: 'https://placehold.co/400x500.png', aiHint: 'serum bottle' },
    { id: '2', name: 'Hydrating Cleanser', price: 28.00, image: 'https://placehold.co/400x500.png', aiHint: 'cleanser bottle' },
    { id: '3', name: 'Daily Moisturizer', price: 35.00, image: 'https://placehold.co/400x500.png', aiHint: 'moisturizer jar' },
    { id: '4', name: 'Vitamin C Mist', price: 22.00, image: 'https://placehold.co/400x500.png', aiHint: 'mist bottle' },
    { id: '5', name: 'Revitalizing Eye Cream', price: 42.00, image: 'https://placehold.co/400x500.png', aiHint: 'eye cream' },
    { id: '6', name: 'Exfoliating Toner', price: 30.00, image: 'https://placehold.co/400x500.png', aiHint: 'toner bottle' },
    { id: '7', name: 'Overnight Repair Mask', price: 55.00, image: 'https://placehold.co/400x500.png', aiHint: 'face mask' },
    { id: '8', name: 'Soothing Face Oil', price: 48.00, image: 'https://placehold.co/400x500.png', aiHint: 'face oil' },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {allProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}
