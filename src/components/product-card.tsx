
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ShoppingCart, Eye, Star, Heart } from 'lucide-react';
import { QuickViewDialog } from './quick-view-dialog';
import { useWishlist } from '@/hooks/use-wishlist';

interface ProductCardProps {
  product: Product;
  className?: string;
  href?: string;
}

export function ProductCard({ product, className, href }: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();

  const isProductWishlisted = isWishlisted(product.id);

  const toTitleCase = (str: string) => {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isProductWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const cardContent = (
    <Card className="overflow-hidden border-none shadow-none rounded-[26px] h-full">
      <div className="relative w-full h-full overflow-hidden rounded-[26px]">
        {product.videoUrl && product.title ? (
          <>
            <video
              src={product.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={product.aiHint}
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end text-center text-white p-6">
              <h3 className="text-2xl font-bold font-headline">{toTitleCase(product.name.replace(/ with SPF 15/g, '').replace(/ Toner & Essence/g, '').replace(/ Boost Serum/g, ''))}</h3>
              {product.category && <p className="text-sm mt-1 capitalize">{product.category.replace(/-/g, ' ')}</p>}
              <Button variant="outline" className="mt-4 bg-transparent border-white text-white hover:bg-white hover:text-black rounded-full">
                Buy Now
              </Button>
            </div>
          </>
        ) : (
          <>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={product.aiHint}
          />
           <Button 
              size="icon" 
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-primary rounded-full h-10 w-10 backdrop-blur-sm"
              onClick={handleWishlistClick}
            >
              <Heart className={cn("w-5 h-5", isProductWishlisted && "fill-primary")} />
            </Button>
          </>
        )}
      </div>
    </Card>
  );

  const cardContainer = (
    <div className={cn("flex flex-col group", className)}>
        <div className="relative w-full aspect-square overflow-hidden rounded-[26px]">
            {cardContent}
        </div>
        <div className="pt-4">
          <h3 className="font-semibold font-headline text-sm text-foreground mt-1">{product.name}</h3>
          <div className="flex items-center mt-2">
              <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
              </div>
              <p className="text-xs text-muted-foreground ml-2">(15 reviews)</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
              <p className="font-bold text-foreground/90">₹{product.price.toFixed(2)}</p>
              {product.originalPrice && (
                  <p className="text-muted-foreground line-through text-sm">₹{product.originalPrice.toFixed(2)}</p>
              )}
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Button 
              variant="secondary" 
              className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 flex-1"
              onClick={() => setIsQuickViewOpen(true)}
            >
              <Eye className="w-4 h-4 mr-2" />
              Quick view
            </Button>
            <Button variant="secondary" size="icon" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80">
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
  );
  
  const videoCardContainer = (
    <div className={cn("flex flex-col group h-full", className)}>
      <div className="relative w-full h-[85vh] overflow-hidden rounded-[26px] group">
          {cardContent}
      </div>
    </div>
  );

  const finalContainer = (
    <>
      {product.videoUrl && product.title ? videoCardContainer : cardContainer}
      <QuickViewDialog open={isQuickViewOpen} onOpenChange={setIsQuickViewOpen} product={product} />
    </>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {finalContainer}
      </Link>
    );
  }

  return finalContainer;
}
