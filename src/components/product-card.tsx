import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Card className={cn("overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-xl bg-accent group", className)}>
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={product.aiHint}
        />
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="font-semibold text-lg text-primary">{product.name}</h3>
        <p className="text-foreground/80 mb-4">${product.price.toFixed(2)}</p>
        <Button variant="outline" className="w-full bg-background hover:bg-background/90 text-primary border-primary hover:border-primary/90">Quick View</Button>
      </CardContent>
    </Card>
  );
}
