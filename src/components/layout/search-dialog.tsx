'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import { allProducts } from '@/lib/data';
import type { Product } from '@/lib/types';
import { ScrollArea } from '../ui/scroll-area';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const featuredKeywords = ['Toner', 'Serum', 'Moisturizer', 'Set'];

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const results = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5); // Limit results to 5
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      onOpenChange(false);
    }
  };
  
  const handleKeywordClick = (keyword: string) => {
    setSearchQuery(keyword);
  }
  
  const handleClose = () => {
    setSearchQuery('');
    onOpenChange(false);
  }

  // For "Recently Viewed", we'll just show some featured products for now.
  const recentlyViewed = allProducts.slice(0, 4);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <div 
        className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={handleClose}
      />
      <div
        className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 w-[90%] max-w-3xl rounded-2xl bg-white shadow-lg transition-all ${open ? 'opacity-100 top-4' : 'opacity-0 top-0 pointer-events-none'}`}
      >
        <div className="p-6">
          <form onSubmit={handleSearchSubmit} className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Searching..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border-2 border-input bg-background py-3 pl-12 pr-4 text-base h-14"
              autoFocus
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
              onClick={handleClose}
            >
              <X className="h-5 w-5" />
            </Button>
          </form>

          {searchQuery.trim().length > 1 ? (
            // Search results view
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground px-2 mb-2">Products</h3>
              {filteredProducts.length > 0 ? (
                <ul className="divide-y">
                  {filteredProducts.map(product => (
                    <li key={product.id}>
                      <Link href={`/shop/${product.id}`} onClick={handleClose} className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted">
                        <Image src={product.image} alt={product.name} width={48} height={48} className="rounded-md" />
                        <span className="font-medium">{product.name}</span>
                        <span className="ml-auto text-sm text-muted-foreground">₹{product.price.toFixed(2)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="p-4 text-center text-muted-foreground">No products found.</p>
              )}
            </div>
          ) : (
            // Default view
            <div className="max-h-[70vh] overflow-y-auto">
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-muted-foreground mb-4">Feature Keywords Today</h3>
                <div className="flex flex-wrap gap-2">
                  {featuredKeywords.map(keyword => (
                    <Button key={keyword} variant="outline" className="rounded-full" onClick={() => handleKeywordClick(keyword)}>
                      {keyword}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-4">Recently Viewed Products</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {recentlyViewed.map(product => (
                    <Link key={product.id} href={`/shop/${product.id}`} className="group block" onClick={handleClose}>
                      <div className="aspect-square w-full relative overflow-hidden rounded-lg mb-2">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                          data-ai-hint={product.aiHint}
                        />
                      </div>
                      <h4 className="text-sm font-medium truncate">{product.name}</h4>
                      <p className="text-sm text-muted-foreground">₹{product.price.toFixed(2)}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
}
