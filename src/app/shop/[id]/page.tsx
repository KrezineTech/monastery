
'use client';

import { useState, use, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { allProducts } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Star, CheckCircle, Minus, Plus, Truck, RefreshCw, Share2, Heart, PlayCircle, Loader } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useToast } from '@/hooks/use-toast';
import { ProductLightbox } from '@/components/product-lightbox';
import { ProductReviews } from '@/components/product-reviews';
import { RelatedProducts } from '@/components/related-products';
import { Card } from '@/components/ui/card';
import { useCart } from '@/hooks/use-cart';
import { useStore } from 'zustand';

interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description?: string;
  descriptionHtml?: string;
  images: {
    edges: Array<{
      node: {
        url: string;
        altText?: string;
        width?: number;
        height?: number;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        price: {
          amount: string;
          currencyCode: string;
        };
        compareAtPrice?: {
          amount: string;
          currencyCode: string;
        };
        availableForSale: boolean;
        quantityAvailable?: number;
      };
    }>;
  };
  priceRange?: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [shopifyProduct, setShopifyProduct] = useState<ShopifyProduct | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedVolume, setSelectedVolume] = useState('');
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxStartIndex, setLightboxStartIndex] = useState(0);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [mainMedia, setMainMedia] = useState<any>(null);
  const { toast } = useToast();
  const cartStore = useCart();
  const { addToCart } = useStore(cartStore);

  // Try to fetch from Shopify first, fallback to local data
  useEffect(() => {
    async function fetchProduct() {
      setIsLoading(true);
      try {
        // First try to fetch from Shopify using the handle/slug
        const response = await fetch(`/api/shopify/product/${resolvedParams.id}`);
        if (response.ok) {
          const data = await response.json();
          setShopifyProduct(data.product);
          setSelectedVariant(data.product.variants?.edges?.[0]?.node || null);
          setProduct(data.product);
        } else {
          // Fallback to local data
          const localProduct = allProducts.find((p) => p.id === resolvedParams.id);
          if (localProduct) {
            setProduct(localProduct);
            setSelectedVolume(localProduct.volumes?.[0] || '');
          } else {
            setProduct(null);
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        // Fallback to local data
        const localProduct = allProducts.find((p) => p.id === resolvedParams.id);
        if (localProduct) {
          setProduct(localProduct);
          setSelectedVolume(localProduct.volumes?.[0] || '');
        } else {
          setProduct(null);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [resolvedParams.id]);

  // Use Shopify images if available, otherwise use local images
  const gallery = shopifyProduct?.images?.edges?.length > 0
    ? shopifyProduct.images.edges.map((edge: any) => ({
        type: 'image' as const,
        src: edge.node.url,
        thumbnail: edge.node.url,
      }))
    : product && product.image ? [
        { type: 'image' as const, src: product.image, thumbnail: product.image },
        ...(product.videoUrl ? [{ type: 'video' as const, src: product.videoUrl, thumbnail: product.image }] : []),
        ...((product.gallery || []).map((src: string) => ({ type: 'image' as const, src, thumbnail: src }))),
      ] : [];

  // Set mainMedia when gallery changes
  useEffect(() => {
    if (gallery.length > 0 && !mainMedia) {
      setMainMedia(gallery[0]);
    }
  }, [gallery, mainMedia]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Button onClick={() => router.push('/shop')}>Back to Shop</Button>
      </div>
    );
  }

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.title || product.name,
          text: `Check out ${product.title || product.name}`,
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

  const openLightbox = (index: number) => {
    setLightboxStartIndex(index);
    setIsLightboxOpen(true);
  };

  const handleAddToCart = async () => {
    try {
      setIsAddingToCart(true);
      
      if (shopifyProduct && selectedVariant) {
        const cartProduct = {
          id: selectedVariant.id,
          name: `${shopifyProduct.title} - ${selectedVariant.title}`,
          price: parseFloat(selectedVariant.price.amount),
          image: shopifyProduct.images?.edges?.[0]?.node?.url || '',
          quantity: quantity,
        };
        addToCart(cartProduct as any);
      } else if (product) {
        addToCart({ ...product, quantity });
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast({ title: 'Error adding to cart', variant: 'destructive' });
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleBuyNow = async () => {
    try {
      setIsAddingToCart(true);
      
      if (shopifyProduct && selectedVariant) {
        let cartId = localStorage.getItem('shopifyCartId');
        
        if (!cartId) {
          const newCart = await fetch('/api/cart', { method: 'POST' }).then((res) =>
            res.json()
          );
          cartId = newCart.cartId;
          localStorage.setItem('shopifyCartId', cartId);
        }
        
        const result = await fetch('/api/cart/add', {
          method: 'POST',
          body: JSON.stringify({
            cartId,
            variantId: selectedVariant.id,
            quantity,
          }),
        }).then((res) => res.json());
        
        if (result.checkoutUrl) {
          window.location.href = result.checkoutUrl;
        }
      } else {
        router.push('/checkout');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({ title: 'Error processing checkout', variant: 'destructive' });
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <>
    <div className="w-full px-4 sm:px-6 lg:px-8 py-5 sm:py-8 lg:py-10">
      <div className="grid md:grid-cols-2 gap-x-[30px]">
        {/* Product Gallery */}
        <div>
           {mainMedia && (
           <div 
             className="relative aspect-square w-full rounded-[26px] mb-4 overflow-hidden cursor-pointer group"
             onClick={() => openLightbox(gallery.findIndex(item => item.src === mainMedia.src))}
           >
            {mainMedia.type === 'video' ? (
                <>
                    <video
                        key={mainMedia.src}
                        src={mainMedia.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayCircle className="w-16 h-16 text-white" />
                    </div>
                </>
            ) : (
                <Image
                src={mainMedia.src}
                alt={shopifyProduct?.title || product.name || 'Product'}
                fill
                className="object-cover transition-transform duration-300"
                />
            )}
          </div>
           )}
          <Carousel
            opts={{
              align: 'start',
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {gallery.map((media, index) => (
                <CarouselItem key={index} className="basis-1/5 pl-2">
                  <div
                    className={cn(
                      'relative aspect-square cursor-pointer rounded-lg group',
                      mainMedia?.src === media.src ? 'border-2 border-primary' : 'border-2 border-transparent'
                    )}
                    onClick={() => {
                      setMainMedia(media);
                      openLightbox(index);
                    }}
                  >
                    <Image
                      src={media.thumbnail}
                      alt={`${shopifyProduct?.title || product.name || 'Product'} thumbnail ${index + 1}`}
                      fill
                      className="object-cover rounded-md"
                    />
                    {media.type === 'video' && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-md">
                            <PlayCircle className="w-6 h-6 text-white" />
                        </div>
                    )}
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
            <p className="text-sm font-medium text-primary">{shopifyProduct ? 'Shopify Product' : 'Island'}</p>
            <div className="flex justify-between items-start mt-1">
                <h1 className="text-3xl lg:text-4xl font-bold font-headline text-foreground">{shopifyProduct ? shopifyProduct.title : product.name}</h1>
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
                {shopifyProduct && selectedVariant ? (
                  <>
                    <p className="text-2xl font-semibold text-foreground">{selectedVariant.price.currencyCode === 'INR' ? '₹' : '$'}{selectedVariant.price.amount}</p>
                    {selectedVariant.compareAtPrice && (
                      <p className="text-muted-foreground line-through">{selectedVariant.price.currencyCode === 'INR' ? '₹' : '$'}{selectedVariant.compareAtPrice.amount}</p>
                    )}
                  </>
                ) : (
                  <>
                    <p className="text-2xl font-semibold text-foreground">₹{product.price?.toFixed(2) || '0.00'}</p>
                    {product.originalPrice && (
                        <p className="text-muted-foreground line-through">₹{product.originalPrice?.toFixed(2)}</p>
                    )}
                  </>
                )}
            </div>

            {(shopifyProduct?.description || product.description) && (
              <div className="text-sm text-muted-foreground mt-4 space-y-4">
                <p>{shopifyProduct?.description || product.description}</p>
              </div>
            )}
            <Separator className="my-6" />

          <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
            <CheckCircle className="w-5 h-5" />
            <span>In stock</span>
          </div>

          {shopifyProduct?.variants?.edges?.length > 1 ? (
            <div className="mt-6">
              <p className="text-sm font-medium text-foreground mb-3">SELECT VARIANT</p>
              <div className="space-y-2">
                {shopifyProduct.variants.edges.map((edge: any) => (
                  <Button
                    key={edge.node.id}
                    variant={selectedVariant?.id === edge.node.id ? 'default' : 'outline'}
                    onClick={() => setSelectedVariant(edge.node)}
                    className="w-full"
                  >
                    {edge.node.title} - {edge.node.price.currencyCode === 'INR' ? '₹' : '$'}{edge.node.price.amount}
                  </Button>
                ))}
              </div>
            </div>
          ) : shopifyProduct?.variants?.edges?.length === 0 && (
            product.volumes && product.volumes.length > 0 && (
              <div className="mt-6">
                <p className="text-sm font-medium text-foreground">VOLUME : {selectedVolume}</p>
                <div className="flex gap-2 mt-2">
                  {product.volumes.map((v: string) => (
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
            )
          )}

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
                  <Button size="lg" variant="outline" className="flex-1 rounded-full" onClick={handleAddToCart} disabled={isAddingToCart}>
                    {isAddingToCart ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin mr-2" />
                        Adding...
                      </>
                    ) : (
                      'Add To Cart'
                    )}
                  </Button>
              </div>
              <Button size="lg" className="w-full rounded-full" onClick={handleBuyNow} disabled={isAddingToCart || (shopifyProduct && !selectedVariant)}>
                {isAddingToCart ? 'Processing...' : 'Buy it now'}
              </Button>
          </div>
          
          <Card className="mt-4 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-muted-foreground" />
                <p>Free delivery on February 7th - 13th</p>
              </div>
            </div>
             <Separator className="my-3" />
             <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-muted-foreground" />
                <p>Free + easy returns</p>
                </div>
            </div>
          </Card>

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
      {product.id && (
        <div className="mt-16 sm:mt-24">
          <ProductReviews productId={product.id as string} />
        </div>
      )}
      {product.id && product.category && (
        <div className="mt-16 sm:mt-24">
          <RelatedProducts currentProductId={product.id} currentProductCategory={product.category} />
        </div>
      )}
    </div>
    <ProductLightbox 
        media={gallery} 
        open={isLightboxOpen} 
        onOpenChange={setIsLightboxOpen}
        startIndex={lightboxStartIndex}
    />
    </>
  );
}
