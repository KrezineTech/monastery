
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
import { ScrollArea } from '@/components/ui/scroll-area';
import { useCart } from '@/hooks/use-cart.tsx';
import { Minus, Plus, X, ShoppingCart } from 'lucide-react';
import { useStore } from 'zustand';

export function CartSheet() {
    const store = useCart();
    const { cart, totalItems, subtotal, removeFromCart, updateQuantity } = useStore(store);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5 text-gray-600" />
            <span className="sr-only">Shopping Cart</span>
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
            Shopping Cart
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7 -mr-2">
                <X className="h-5 w-5" />
              </Button>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <Separator />

        {cart.length > 0 ? (
          <>
            <ScrollArea className="flex-1">
              <div className="px-6 py-4 space-y-4">
                {cart.map((product) => (
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
                      <p className="text-sm text-muted-foreground mt-1">₹{product.price.toFixed(2)}</p>
                      <div className="flex items-center border rounded-full w-fit mt-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full h-7 w-7"
                          onClick={() => updateQuantity(product.id, product.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{product.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full h-7 w-7"
                          onClick={() => updateQuantity(product.id, product.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <SheetFooter className="p-6 border-t bg-background">
                <div className="w-full space-y-4">
                    <div className="flex justify-between font-semibold">
                        <span>Subtotal</span>
                        <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Taxes and shipping calculated at checkout.</p>
                    <div className="flex w-full flex-col gap-2">
                        <Button size="lg" className="w-full">
                            Checkout
                        </Button>
                        <SheetClose asChild>
                        <Button variant="link" className="text-sm font-medium text-muted-foreground">
                            OR CONTINUE SHOPPING
                        </Button>
                        </SheetClose>
                    </div>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center p-4">
            <ShoppingCart className="h-16 w-16 text-muted-foreground/30" />
            <h3 className="font-headline text-xl font-semibold">Your Cart is Empty</h3>
            <p className="text-sm text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
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
