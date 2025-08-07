import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/ingredients', label: 'Ingredients' },
  { href: '/blogs', label: 'Blogs' },
];

const socialLinks = [
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-foreground/80">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-primary mb-4">Join our newsletter</h3>
            <p className="mb-4 text-sm">Get exclusive offers and skincare tips.</p>
            <form className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" className="bg-background" />
              <Button type="submit" variant="default">Subscribe</Button>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Connect</h3>
            <div className="space-y-2">
                <p className="text-sm">contact@islandbeauty.com</p>
                <div className="flex space-x-4 pt-2">
                    {socialLinks.map((social) => (
                        <Link key={social.name} href={social.href} className="text-foreground/80 hover:text-primary transition-colors">
                            <social.icon className="h-5 w-5" />
                            <span className="sr-only">{social.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Islandbeauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
