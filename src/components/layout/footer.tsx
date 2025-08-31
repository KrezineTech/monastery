
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, ArrowRight } from 'lucide-react';

const usefulLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/ingredients', label: 'Ingredients' },
  { href: '/blogs', label: 'Blog' },
];

const supportLinks = [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Shipping Policy' },
    { href: '#', label: 'Refund Policy' },
    { href: '#', label: 'Terms of Service' },
];

const informationLinks = [
    { href: '/ingredients', label: 'Ingredients' },
    { href: '/blogs', label: 'Blog' },
];


const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/islandbeauty.in/', icon: Instagram },
  { name: 'Linkedin', href: '#', icon: Linkedin },
]

export function Footer() {
  return (
    <footer className="w-full mb-4">
      <div className="w-[96%] mx-auto pt-12 pb-4 text-foreground/80 rounded-[26px] border border-border/40 bg-[#F6F6F3]/80 backdrop-blur-lg px-8">
        <div className="mb-12 text-center">
            <Link href="/">
                <Image 
                    src="https://www.islandbeauty.in/cdn/shop/files/bog_logo.svg?v=1751106444" 
                    alt="glowver logo" 
                    width={1200} 
                    height={240} 
                    className="mx-auto w-full"
                />
            </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
          <div>
            <h5 className="font-semibold text-foreground mb-4 text-base md:text-[22px]">Useful Link</h5>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-4 text-base md:text-[22px]">Support</h5>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-4 text-base md:text-[22px]">Information</h5>
            <ul className="space-y-2">
              {informationLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h5 className="font-semibold text-foreground mb-4 text-base md:text-[22px]">Sign Up to Our Newsletter</h5>
            <p className="mb-6 text-foreground/70">Give your inbox some love with new products, tips, & more.</p>
            <form>
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="bg-transparent border-0 border-b-2 border-foreground/20 rounded-none px-0 focus:ring-0 focus:border-primary"
                />
                <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-1/2 -translate-y-1/2 text-foreground/70 hover:text-primary">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-4 border-t border-primary/10 flex justify-between items-center text-xs">
          <div className="flex space-x-4">
              {socialLinks.map((social) => (
                  <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.name}</span>
                  </Link>
              ))}
          </div>
          <p className="text-foreground/70">&copy; {new Date().getFullYear()}, Islandbeauty | Built By Krezine</p>
        </div>
      </div>
    </footer>
  )
}
