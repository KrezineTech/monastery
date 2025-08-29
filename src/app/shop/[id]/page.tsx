
'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { allProducts } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Star, CheckCircle, Minus, Plus, Truck, RefreshCw, Package, Share2, Heart } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { ProductCard } from '@/components/product-card';
import { ProductReviews } from '@/components/product-reviews';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useToast } from '@/hooks/use-toast';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = allProducts.find((p) => p.id === params.id);
  const [quantity, setQuantity] = useState(1);
  const [selectedVolume, setSelectedVolume] = useState('250ML');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();
  
  if (!product) {
    notFound();
  }

  const gallery = product.gallery || [product.image];
  const [mainImage, setMainImage] = useState(gallery[0]);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Check out ${product.name}`,
          url: window.location.href,
        });
        toast({ title: 'Shared successfully!' });
      } catch (error) {
        console.error('Error sharing:', error);
        toast({ title: 'Could not share', variant: 'destructive' });
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({ title: 'Link copied to clipboard' });
    }
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
        title: !isWishlisted ? 'Added to wishlist' : 'Removed from wishlist',
    });
  };

  const volumes = ['250ML', '300ML', '500ML'];

  const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 2);

  const descriptionParts = product.description?.split('\n\n');
  const descriptionTitle = descriptionParts?.[0];
  const descriptionBody = descriptionParts?.slice(1).join('\n\n');

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-5 sm:py-8 lg:py-10">
      <div className="grid md:grid-cols-2 gap-x-[30px]">
        {/* Product Gallery */}
        <div>
          <div className="relative aspect-square w-full rounded-[26px] mb-4 overflow-hidden">
            <Image
              src={mainImage}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300"
            />
          </div>
          <Carousel
            opts={{
              align: 'start',
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {gallery.map((img, index) => (
                <CarouselItem key={index} className="basis-1/5 pl-2">
                  <div
                    className={cn(
                      'relative aspect-square cursor-pointer rounded-lg',
                      mainImage === img ? 'border-2 border-primary' : 'border-2 border-transparent'
                    )}
                    onClick={() => setMainImage(img)}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium text-primary">Island</p>
            <div className="flex justify-between items-start mt-1">
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground">{product.name}</h1>
                <div className="flex items-center gap-2 flex-shrink-0">
                    <Button variant="outline" size="icon" className="rounded-[12px] border-gray-300 hover:bg-primary text-gray-600 hover:text-white hover:border-primary" onClick={handleShare}>
                        <Share2 className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-[12px] border-gray-300 hover:bg-primary text-gray-600 hover:text-white hover:border-primary" onClick={handleWishlist}>
                        <Heart className={cn("w-5 h-5", isWishlisted && "fill-destructive text-destructive")} />
                    </Button>
                </div>
            </div>
            <div className="flex items-center gap-1 mt-1.5 pt-[6px]">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground ml-1">15 reviews</p>
            </div>
          </div>

           <div className="flex items-baseline gap-2 mt-4">
                <p className="text-2xl font-semibold text-foreground">₹{product.price.toFixed(2)}</p>
                {product.originalPrice && (
                    <p className="text-muted-foreground line-through">₹{product.originalPrice.toFixed(2)}</p>
                )}
            </div>

            {product.description && (
              <div className="text-sm text-muted-foreground mt-4 space-y-4">
                {descriptionTitle && <p className="font-bold uppercase text-foreground">{descriptionTitle}</p>}
                {descriptionBody && <p className="whitespace-pre-line">{descriptionBody}</p>}
              </div>
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

          <div className="pt-6">
            <Accordion type="single" collapsible defaultValue="description" className="w-full">
              <AccordionItem value="ingredients">
                <AccordionTrigger className="text-base font-medium">Ingredients</AccordionTrigger>
                <AccordionContent className="text-sm text-foreground/80 leading-relaxed">
                  Full ingredients list: Aqua, Glycerin, Niacinamide, Oryza Sativa (Rice) Bran Water, Curcuma Longa (Turmeric) Root Extract, Sodium Hyaluronate, Phenoxyethanol, Ethylhexylglycerin.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="how-to-use">
                <AccordionTrigger className="text-base font-medium">How to use</AccordionTrigger>
                <AccordionContent className="text-sm text-foreground/80 leading-relaxed">
                  After cleansing, apply a few drops to your palms and gently pat onto your face and neck. Follow with your favorite serum and moisturizer. Use morning and night for best results.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="mt-16 sm:mt-24">
        <ProductReviews productId={product.id} />
      </div>
    </div>
  );
}

    