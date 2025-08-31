'use client';

import { useSearchParams } from 'next/navigation';
import { ProductCard } from '@/components/product-card';
import { allProducts } from '@/lib/data';
import Link from 'next/link';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  const filteredProducts = query
    ? allProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-primary sm:text-5xl">
          Search Results
        </h1>
        {query ? (
          <p className="mt-4 text-lg text-foreground/80">
            {filteredProducts.length > 0
              ? `Showing ${filteredProducts.length} results for "${query}"`
              : `No results found for "${query}"`}
          </p>
        ) : (
          <p className="mt-4 text-lg text-foreground/80">
            Please enter a search term to find products.
          </p>
        )}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/shop/${product.id}`} className="group block">
                <ProductCard product={product} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">Try searching for something else.</p>
        </div>
      )}
    </div>
  );
}
