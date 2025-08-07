import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <Card className="overflow-hidden border-none shadow-none rounded-lg">
        <div className="relative aspect-[1/1] w-full overflow-hidden p-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={product.aiHint}
          />
        </div>
      </Card>
      <div className="pt-4">
        <p className="text-sm text-muted-foreground">{product.category}</p>
        <h3 className="font-semibold text-base text-foreground mt-1">{product.name}</h3>
        <p className="font-bold text-foreground/90 mt-2">{product.price.toFixed(2)} P</p>
        <div className="flex items-center gap-2 mt-4">
          <Button variant="secondary" className="rounded-lg bg-pink-100 text-pink-800 hover:bg-pink-200 flex-1">
            Подробнее
          </Button>
          <Button variant="secondary" size="icon" className="rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-200">
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
