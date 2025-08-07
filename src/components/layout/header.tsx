'use client';

import Link from 'next/link';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/ingredients', label: 'Ingredients' },
  { href: '/blogs', label: 'Blogs' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-secondary/90 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          Islandbeauty
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5 text-primary" />
            <span className="sr-only">Shopping Cart</span>
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
                     <Link href="/" className="text-xl font-bold text-primary" onClick={() => setIsMenuOpen(false)}>
                        Islandbeauty
                     </Link>
                     <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                           <X className="h-6 w-6" />
                           <span className="sr-only">Close menu</span>
                        </Button>
                     </SheetTrigger>
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
