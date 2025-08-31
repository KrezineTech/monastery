
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Heart, X } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useWishlist } from '@/hooks/use-wishlist.tsx';
import { useStore } from 'zustand';

export function WishlistSheet() {
  const store = useWishlist();
  const { wishlist, removeFromWishlist } = useStore(store);

  const totalItems = wishlist.length;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
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

        {wishlist.length > 0 ? (
          <>
            <ScrollArea className="flex-1">
              <div className="px-6 py-4 space-y-4">
                {wishlist.map((product) => (
                  <div key={product.id} className="flex items-center gap-4 pb-4 border-b last:border-b-0">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        data-ai-hint={product.aiHint}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground truncate text-[22px]">{product.name}</h3>
                      <div className="flex items-baseline gap-2 mt-1">
                        <p className="font-semibold text-foreground">
                          ₹{product.price.toFixed(2)}
                        </p>
                        {product.originalPrice && (
                          <p className="text-sm text-muted-foreground line-through">
                            ₹{product.originalPrice.toFixed(2)}
                          </p>
                        )}
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="text-sm"
                      onClick={() => removeFromWishlist(product.id)}
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
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center p-4">
            <Heart className="h-16 w-16 text-muted-foreground/30" />
            <h3 className="font-headline text-xl font-semibold">Your Wishlist is Empty</h3>
            <p className="text-sm text-muted-foreground">
              Add your favorite products to your wishlist to keep track of them.
            </p>
            <SheetClose asChild>
              <Button asChild>
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
