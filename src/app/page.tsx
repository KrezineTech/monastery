import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProductCard } from '@/components/product-card';
import { PlayCircle } from 'lucide-react';
import type { Product, Category, Reel, InstagramPost } from '@/lib/types';
import { HeroCarousel } from '@/components/hero-carousel';

const categories: Category[] = [
  { name: 'Cleansers', image: 'https://placehold.co/400x400.png', aiHint: 'skincare cleanser' },
  { name: 'Serums', image: 'https://placehold.co/400x400.png', aiHint: 'skincare serum' },
  { name: 'Moisturizers', image: 'https://placehold.co/400x400.png', aiHint: 'skincare moisturizer' },
];

const featuredProducts: Product[] = [
  { id: '1', name: 'Glow Serum', price: 45.00, image: 'https://placehold.co/400x500.png', aiHint: 'serum bottle' },
  { id: '2', name: 'Hydrating Cleanser', price: 28.00, image: 'https://placehold.co/400x500.png', aiHint: 'cleanser bottle' },
  { id: '3', name: 'Daily Moisturizer', price: 35.00, image: 'https://placehold.co/400x500.png', aiHint: 'moisturizer jar' },
  { id: '4', name: 'Vitamin C Mist', price: 22.00, image: 'https://placehold.co/400x500.png', aiHint: 'mist bottle' },
];

const reels: Reel[] = [
  {
    id: '1',
    videoPlaceholder: 'https://placehold.co/400x700.png',
    aiHint: 'woman skincare',
    product: { id: '1', name: 'Glow Serum', price: 45.00, image: 'https://placehold.co/100x100.png', aiHint: 'serum bottle' },
  },
  {
    id: '2',
    videoPlaceholder: 'https://placehold.co/400x700.png',
    aiHint: 'beach relaxation',
    product: { id: '3', name: 'Daily Moisturizer', price: 35.00, image: 'https://placehold.co/100x100.png', aiHint: 'moisturizer jar' },
  },
];

const instagramPosts: InstagramPost[] = [
    { id: '1', image: 'https://placehold.co/400x400.png', aiHint: 'skincare flatlay' },
    { id: '2', image: 'https://placehold.co/400x400.png', aiHint: 'person smiling' },
    { id: '3', image: 'https://placehold.co/400x400.png', aiHint: 'product texture' },
    { id: '4', image: 'https://placehold.co/400x400.png', aiHint: 'beach waves' },
    { id: '5', image: 'https://placehold.co/400x400.png', aiHint: 'tropical leaves' },
    { id: '6', image: 'https://placehold.co/400x400.png', aiHint: 'skincare shelfie' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-6">
        <div className="w-[96%] mx-auto px-0">
            <HeroCarousel />
        </div>
      </section>

      {/* Category Display Section */}
      <section className="py-16 sm:py-24">
        <div className="w-[96%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link href="/shop" key={category.name} className="group relative block">
                <Card className={`relative overflow-hidden rounded-2xl shadow-md border-none aspect-[4/3] ${index === 0 ? 'bg-blue-100' : 'bg-pink-100'}`}>
                   <h3 className="absolute top-6 left-6 text-2xl font-semibold text-gray-800 z-10">{category.name}</h3>
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={category.aiHint}
                  />
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 sm:py-24">
        <div className="w-[96%] mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Best-Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              <Link href="/shop">Shop All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Video Section */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-primary/80">
        <Image
          src="https://placehold.co/1800x1000.png"
          alt="Brand video background"
          fill
          className="object-cover opacity-20"
          data-ai-hint="ocean waves"
        />
        <div className="relative z-10 flex h-full items-center justify-center text-center text-primary-foreground">
          <div className="w-[96%] mx-auto">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">The Islandbeauty Difference</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              We believe in the power of nature to restore and rejuvenate. See how we harness it.
            </p>
          </div>
        </div>
      </section>

      {/* Smart Product Placement in Reels Section */}
      <section className="py-16 sm:py-24">
        <div className="w-[96%] mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">As Seen On Reels</h2>
          <div className="flex flex-wrap items-start justify-center gap-8">
            {reels.map((reel) => (
              <div key={reel.id} className="w-full max-w-[320px]">
                <Card className="relative group overflow-hidden rounded-lg shadow-xl border-none h-full">
                  <Image
                    src={reel.videoPlaceholder}
                    alt="Reel video"
                    width={400}
                    height={700}
                    className="object-cover w-full h-full aspect-[9/16] transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={reel.aiHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <Card className="flex items-center gap-3 p-2 rounded-lg bg-white/80 backdrop-blur-sm shadow-md transition-all duration-300 hover:shadow-lg">
                      <Image
                        src={reel.product.image}
                        alt={reel.product.name}
                        width={64}
                        height={64}
                        className="rounded-md object-cover"
                        data-ai-hint={reel.product.aiHint}
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-primary">{reel.product.name}</h4>
                        <p className="text-sm text-foreground/80">${reel.product.price.toFixed(2)}</p>
                      </div>
                      <Button size="sm" className="shrink-0">View</Button>
                    </Card>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 sm:py-24">
        <div className="w-[96%] mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-4">Follow us on Instagram</h2>
          <p className="text-center text-foreground/80 mb-12">@islandbeauty</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
            {instagramPosts.map((post) => (
              <Link href="#" key={post.id} className="group block overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full aspect-square transition-transform duration-500 ease-in-out group-hover:scale-110"
                  data-ai-hint={post.aiHint}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
