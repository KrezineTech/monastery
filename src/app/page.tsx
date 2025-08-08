import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProductCard } from '@/components/product-card';
import type { Product, Category, Reel, InstagramPost } from '@/lib/types';
import { HeroCarousel } from '@/components/hero-carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { FeaturedTrio } from '@/components/featured-trio';

const categories: Category[] = [
  { name: 'Cleansers', image: 'https://placehold.co/840x400.png', aiHint: 'skincare cleanser' },
  { name: 'Serums', image: 'https://placehold.co/460x400.png', aiHint: 'skincare serum' },
  { name: 'Moisturizers', image: 'https://placehold.co/660x400.png', aiHint: 'skincare moisturizer' },
];

const featuredProducts: Product[] = [
  { id: '1', name: 'Round Lab 1025 Dokdo Cleanser', price: 1450.00, image: 'https://placehold.co/400x500.png', aiHint: 'serum bottle' },
  { id: '2', name: 'Beauty of Joseon Relief Sun Rice...', price: 1790.00, image: 'https://placehold.co/400x500.png', aiHint: 'cleanser bottle' },
  { id: '3', name: 'Q+A Hyaluronic Acid Daily Moisturiser', price: 1300.00, image: 'https://placehold.co/400x500.png', aiHint: 'moisturizer jar' },
  { id: '4', name: 'Round Lab Birch Juice Moisturizing Sun...', price: 1500.00, image: 'https://placehold.co/400x500.png', aiHint: 'mist bottle' },
  { id: '5', name: 'Round Lab Soybean Nourishing Toner', price: 2490.00, image: 'https://placehold.co/400x500.png', aiHint: 'eye cream' },
];

const reels: Reel[] = [
  {
    id: '1',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    aiHint: 'woman skincare',
    product: { id: '1', name: 'Glow Serum', price: 45.00, image: 'https://placehold.co/100x100.png', aiHint: 'serum bottle' },
  },
  {
    id: '2',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    aiHint: 'beach relaxation',
    product: { id: '3', name: 'Daily Moisturizer', price: 35.00, image: 'https://placehold.co/100x100.png', aiHint: 'moisturizer jar' },
  },
  {
    id: '3',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    aiHint: 'makeup tutorial',
    product: { id: '2', name: 'Sunscreen', price: 25.00, image: 'https://placehold.co/100x100.png', aiHint: 'sunscreen bottle' },
  },
  {
    id: '4',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    aiHint: 'morning routine',
    product: { id: '4', name: 'Hydrating Mist', price: 20.00, image: 'https://placehold.co/100x100.png', aiHint: 'mist bottle' },
  },
  {
    id: '5',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    aiHint: 'evening skincare',
    product: { id: '5', name: 'Nourishing Toner', price: 28.00, image: 'https://placehold.co/100x100.png', aiHint: 'toner bottle' },
  },
   {
    id: '6',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    aiHint: 'self-care day',
    product: { id: '1', name: 'Glow Serum', price: 45.00, image: 'https://placehold.co/100x100.png', aiHint: 'serum bottle' },
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
      <section className="w-full pt-20 mb-5">
        <div className="w-[96%] mx-auto px-0">
            <HeroCarousel />
        </div>
      </section>

      {/* Category Display Section */}
      <section className="pb-5">
        <div className="w-[96%] mx-auto">
          <div className="flex flex-wrap md:flex-nowrap gap-5">
            <div className="w-full md:w-[42%]">
              <Link href="/shop" className="group relative block h-[500px]">
                <Card className="relative overflow-hidden rounded-[26px] border-none h-full">
                    <h3 className="absolute top-6 left-6 text-2xl font-semibold text-gray-800 z-10">{categories[0].name}</h3>
                  <Image
                    src={categories[0].image}
                    alt={categories[0].name}
                    fill
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={categories[0].aiHint}
                  />
                </Card>
              </Link>
            </div>
            <div className="w-full md:w-[23%]">
              <Link href="/shop" className="group relative block h-[500px]">
                <Card className="relative overflow-hidden rounded-[26px] border-none h-full">
                   <h3 className="absolute top-6 left-6 text-2xl font-semibold text-gray-800 z-10">{categories[1].name}</h3>
                  <Image
                    src={categories[1].image}
                    alt={categories[1].name}
                    fill
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={categories[1].aiHint}
                  />
                </Card>
              </Link>
            </div>
            <div className="w-full md:w-[33%]">
              <Link href="/shop" className="group relative block h-[500px]">
                <Card className="relative overflow-hidden rounded-[26px] border-none h-full">
                   <h3 className="absolute top-6 left-6 text-2xl font-semibold text-gray-800 z-10">{categories[2].name}</h3>
                  <Image
                    src={categories[2].image}
                    alt={categories[2].name}
                    fill
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={categories[2].aiHint}
                  />
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FeaturedTrio />

      {/* Featured Products Section */}
      {/* <section className="py-16 sm:py-24">
        <div className="w-[96%] mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Best-Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
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
      </section> */}

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
          <div className="relative group">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2.5">
                {reels.map((reel) => (
                  <CarouselItem key={reel.id} className="md:basis-1/3 lg:basis-1/5 pl-2.5">
                    <div className="p-1">
                      <Card className="relative group/reel overflow-hidden rounded-[26px] border-none h-full">
                        <video
                          src={reel.videoUrl}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="object-cover w-full h-full aspect-[9/16]"
                          data-ai-hint={reel.aiHint}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-2">
                          <Card className="flex items-center gap-3 p-2 rounded-[18px] bg-white/80 backdrop-blur-sm transition-all duration-300">
                            <Image
                              src={reel.product.image}
                              alt={reel.product.name}
                              width={64}
                              height={64}
                              className="rounded-[12px] object-cover"
                              data-ai-hint={reel.product.aiHint}
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm text-primary">{reel.product.name}</h4>
                              <p className="text-sm text-foreground/80">₹{reel.product.price.toFixed(2)}</p>
                            </div>
                            <Button size="sm" className="shrink-0">View</Button>
                          </Card>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-white border-2 border-gray-200 text-gray-800 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-white border-2 border-gray-200 text-gray-800 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Carousel>
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
