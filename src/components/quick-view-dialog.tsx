

'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Minus, Plus, Package, Truck, RefreshCw } from 'lucide-react';
import type { Product } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

interface QuickViewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product;
}

export function QuickViewDialog({ open, onOpenChange, product }: QuickViewDialogProps) {
  const galleryImages = [
    product.image,
    'https://placehold.co/800x1000.png',
    'https://placehold.co/800x1000.png',
    'https://placehold.co/800x1000.png',
    'https://placehold.co/800x1000.png',
  ];

  const [mainImage, setMainImage] = useState(galleryImages[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedVolume, setSelectedVolume] = useState('250ML');

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };
  
  const volumes = ['250ML', '300ML', '500ML'];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
              <Image
                src={mainImage}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <Carousel opts={{ align: 'start' }} className="w-full">
              <CarouselContent className="-ml-2">
                {galleryImages.map((img, index) => (
                  <CarouselItem key={index} className="basis-1/4 pl-2">
                    <div
                      className={cn(
                        'relative aspect-square rounded-md overflow-hidden cursor-pointer border-2',
                        mainImage === img ? 'border-primary' : 'border-transparent'
                      )}
                      onClick={() => setMainImage(img)}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
          <div className="p-8 bg-background rounded-r-lg">
            <p className="text-sm text-muted-foreground">Aura Naturals</p>
            <h1 className="text-3xl font-bold text-foreground mt-1">{product.name}</h1>
            <p className="text-2xl font-semibold text-foreground mt-4">₹{product.price.toFixed(2)}</p>
            {product.description && (
              <p className="text-sm text-muted-foreground mt-4">{product.description}</p>
            )}
            <Separator className="my-6" />
            
            <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
              <CheckCircle className="w-5 h-5" />
              <span>53 in stock</span>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-foreground">VOLUME : {selectedVolume}</p>
              <div className="flex gap-2 mt-2">
                {volumes.map(v => (
                   <Button 
                    key={v}
                    variant={selectedVolume === v ? 'default' : 'outline'}
                    onClick={() => setSelectedVolume(v)}
                    >
                      {v}
                    </Button>
                ))}
              </div>
            </div>
            
            <div className="mt-8 space-y-2">
               <p className="text-sm font-medium text-foreground">Quantity</p>
               <div className="flex items-center gap-2">
                    <div className="flex items-center border rounded-full w-fit">
                        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => handleQuantityChange(-1)}>
                        <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-10 text-center">{quantity}</span>
                        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => handleQuantityChange(1)}>
                        <Plus className="w-4 h-4" />
                        </Button>
                    </div>
                    <Button size="lg" variant="outline" className="flex-1 rounded-full">Add To Cart</Button>
                </div>
                <Button size="lg" className="w-full rounded-full">Buy it now</Button>
            </div>
            
            <div className="mt-6 p-4 bg-muted/50 rounded-lg flex items-start gap-4 text-sm">
                <Package className="w-6 h-6 text-muted-foreground mt-1"/>
                <div>
                    <div className="flex justify-between items-center">
                        <p className="font-medium">Pickup available at United State</p>
                        <Button variant="link" className="p-0 h-auto text-xs">View store information</Button>
                    </div>
                    <p className="text-muted-foreground">Usually ready in 24 hours</p>
                </div>
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-muted-foreground" />
                <p>Free delivery on February 7th - 13th</p>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-muted-foreground" />
                <p>Free + easy returns</p>
              </div>
            </div>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
