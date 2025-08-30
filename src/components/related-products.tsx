
import { allProducts } from '@/lib/data';
import { ProductCard } from './product-card';

interface RelatedProductsProps {
    currentProductId: string;
    currentProductCategory?: string;
}

export function RelatedProducts({ currentProductId, currentProductCategory }: RelatedProductsProps) {
    const relatedProducts = allProducts.filter(p => 
        p.id !== currentProductId && p.category === currentProductCategory
    ).slice(0, 3);

    if (relatedProducts.length === 0) {
        // Fallback to showing any 3 products if no related products in the same category are found
        const fallbackProducts = allProducts.filter(p => p.id !== currentProductId).slice(0,3);
        relatedProducts.push(...fallbackProducts);
    }
    
    return (
        <div className="w-full">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">You might also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
