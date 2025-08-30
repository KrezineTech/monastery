'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, ShoppingCart, X, Search, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { Input } from '../ui/input';

const navLinks = [
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/ingredients', label: 'Ingredients' },
    { href: '/blogs', label: 'Blogs' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 w-full">
      <div className="w-[96%] mx-auto flex h-16 items-center justify-between rounded-[26px] border-b border-border/40 bg-[#F6F6F3]/80 backdrop-blur-lg px-8">
        <Link href="/">
          <Image src="https://www.islandbeauty.in/cdn/shop/files/bog_logo.svg?v=1751106444" alt="glowver logo" width={150} height={40} />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
           <div className="relative hidden md:block">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
             <Input type="search" placeholder="Search..." className="w-full rounded-full border border-input bg-transparent pl-9 focus-visible:ring-0 focus-visible:ring-offset-0" />
           </div>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5 text-gray-600" />
            <span className="sr-only">Wishlist</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5 text-gray-600" />
            <span className="sr-only">Shopping Cart</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5 text-gray-600" />
            <span className="sr-only">Account</span>
          </Button>
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-secondary p-0">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between p-4 border-b">
                     <Link href="/" className="text-xl font-bold font-headline text-primary" onClick={() => setIsMenuOpen(false)}>
                        glowver
                     </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                       <X className="h-6 w-6" />
                       <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <nav className="flex flex-col gap-4 p-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
