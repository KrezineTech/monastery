import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const cardContent = (
    <Card className="overflow-hidden border-none shadow-none rounded-[26px] h-full">
      <div className="relative aspect-[1/1.25] w-full h-full overflow-hidden rounded-[26px]">
        {product.videoUrl ? (
          <video
            src={product.videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={product.aiHint}
          />
        ) : (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={product.aiHint}
          />
        )}
      </div>
    </Card>
  );

  // If it's a video, the whole card is a link without text details
  if (product.videoUrl) {
    return (
      <Link href={`/shop/${product.id}`} className={cn("flex flex-col group h-full", className)}>
        {cardContent}
      </Link>
    );
  }

  // Original card with details for non-video products
  return (
    <div className={cn("flex flex-col group", className)}>
      {cardContent}
      <div className="pt-4">
        <h3 className="font-semibold text-sm text-foreground mt-1">{product.name}</h3>
        <p className="font-bold text-foreground/90 mt-2">₹{product.price.toFixed(2)}</p>
        <div className="flex items-center gap-2 mt-4">
          <Button variant="secondary" className="rounded-lg bg-pink-100 text-pink-800 hover:bg-pink-200 flex-1">
            Details
          </Button>
          <Button variant="secondary" size="icon" className="rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-200">
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}