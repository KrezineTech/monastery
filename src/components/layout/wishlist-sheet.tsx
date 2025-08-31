
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Heart, X } from 'lucide-react';
import type { WishlistItem } from '@/lib/types';
import { ScrollArea } from '@/components/ui/scroll-area';

const initialWishlistItems: WishlistItem[] = [
  {
    id: '1',
    product: {
      id: '1',
      name: 'Raglan Sleeve T-Shirt',
      price: 28.00,
      originalPrice: 36.00,
      image: 'https://placehold.co/100x100.png',
      aiHint: 'blue t-shirt',
    },
  },
  {
    id: '2',
    product: {
      id: '2',
      name: 'Mesh Shirt',
      price: 35.00,
      originalPrice: 45.00,
      image: 'https://placehold.co/100x100.png',
      aiHint: 'white mesh shirt',
    },
  },
];

export function WishlistSheet() {
  const [items, setItems] = useState(initialWishlistItems);

  const handleRemove = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalItems = items.length;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Heart className="h-5 w-5 text-gray-600" />
          <span className="sr-only">Wishlist</span>
          {totalItems > 0 && (
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col p-0 sm:max-w-md">
        <SheetHeader className="p-6 pb-4">
          <SheetTitle className="flex items-center justify-between font-headline text-lg">
            Wishlist
            <SheetClose asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7 -mr-2">
                    <X className="h-5 w-5" />
                </Button>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <Separator />
        {items.length > 0 ? (
            <>
            <ScrollArea className="flex-1">
                <div className="divide-y">
                {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-6">
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        data-ai-hint={item.product.aiHint}
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{item.product.name}</h3>
                        <div className="flex items-baseline gap-2 mt-1">
                        <p className="font-semibold text-primary">
                            ${item.product.price.toFixed(2)}
                        </p>
                        {item.product.originalPrice && (
                            <p className="text-sm text-muted-foreground line-through">
                            ${item.product.originalPrice.toFixed(2)}
                            </p>
                        )}
                        </div>
                    </div>
                    <Button
                        variant="link"
                        className="text-xs text-muted-foreground hover:text-destructive"
                        onClick={() => handleRemove(item.id)}
                    >
                        Remove
                    </Button>
                    </div>
                ))}
                </div>
            </ScrollArea>
            <SheetFooter className="p-6 border-t bg-background">
                <div className="flex w-full flex-col gap-2">
                <Button asChild size="lg" className="w-full">
                    <Link href="/wishlist">View All Wish List</Link>
                </Button>
                <SheetClose asChild>
                    <Button variant="link" className="text-sm font-medium text-muted-foreground">
                    OR CONTINUE SHOPPING
                    </Button>
                </SheetClose>
                </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <Heart className="h-16 w-16 text-muted-foreground/30" />
            <h3 className="font-headline text-xl font-semibold">Your Wishlist is Empty</h3>
            <p className="text-sm text-muted-foreground">
              Add your favorite products to your wishlist to keep track of them.
            </p>
            <SheetClose asChild>
              <Button>Continue Shopping</Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
