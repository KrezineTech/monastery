
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
import { QuietEscapeSection } from '@/components/quiet-escape';
import { StickyPromoSection } from '@/components/sticky-promo-section';
import { HarmonySection } from '@/components/harmony-section';
import { ReviewSection } from '@/components/review-section';
import { allBlogs } from '@/lib/blog-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, User } from 'lucide-react';

const categories: Category[] = [
  { name: 'Moisturizers', image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Untitled-1.webp?v=1754914138', mobileImage: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Untitled-1.webp?v=1754914138', aiHint: 'skincare moisturizer' },
  { name: 'Serum', image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Serum_copy.webp?v=1754934890', aiHint: 'skincare serum' },
  { name: 'Essence', image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Toner.webp?v=1754934725', aiHint: 'skincare essence' },
];

const featuredProducts: Product[] = [
  { id: '1', name: 'Purity in a Drop Toner & Essence', price: 999.00, originalPrice: 1199.00, image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Untitled-2.webp?v=1756537408', aiHint: 'toner essence bottle' },
  { id: '2', name: 'DewDrop Evenness Boost Serum', price: 999.00, originalPrice: 1299.00, image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Serum_copy.webp?v=1754934890', aiHint: 'serum bottle' },
  { id: '3', name: 'Morning Dew Moisturizer with SPF 15', price: 1300.00, image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Untitled-1.webp?v=1754914138', aiHint: 'moisturizer bottle' },
  { id: '4', name: 'Yusuru Radiance Combo Set', price: 2490.00, image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/22212.webp?v=1756537844', aiHint: 'skincare combo set' },
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

const latestBlogs = allBlogs.slice(0, 3);

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full md:pt-8 pt-7 md:mb-5 mb-3">
        <div className="w-[96%] mx-auto px-0">
            <HeroCarousel />
        </div>
      </section>

      {/* Category Display Section */}
      <section className="pb-5">
        <div className="w-[96%] mx-auto md:hidden">
            <div className="flex flex-col gap-3">
                <div className="flex gap-3 h-[216px]">
                    <Link href="/shop" className="group relative block w-[40%] h-full">
                        <Card className="relative overflow-hidden rounded-[26px] border-none h-full">
                            <h3 className="absolute top-6 left-6 text-xl font-semibold text-gray-800 z-10">{categories[0].name}</h3>
                            <Image
                                src={categories[0].mobileImage || categories[0].image}
                                alt={categories[0].name}
                                fill
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint={categories[0].aiHint}
                            />
                        </Card>
                    </Link>
                    <Link href="/shop" className="group relative block w-[60%] h-full">
                        <Card className="relative overflow-hidden rounded-[26px] border-none h-full">
                            <h3 className="absolute top-6 left-6 text-xl font-semibold text-gray-800 z-10">{categories[1].name}</h3>
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
                <div className="h-[216px]">
                    <Link href="/shop" className="group relative block w-full h-full">
                        <Card className="relative overflow-hidden rounded-[26px] border-none h-full">
                            <h3 className="absolute top-6 left-6 text-xl font-semibold text-gray-800 z-10">{categories[2].name}</h3>
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
        <div className="w-[96%] mx-auto hidden md:block">
          <div className="flex flex-wrap md:flex-nowrap gap-5">
            <div className="w-full md:w-[42%]">
              <Link href="/shop" className="group relative block h-[240px] md:h-[36vh]">
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
            <div className="w-full md:w-[23%] flex flex-col gap-5">
              <Link href="/shop" className="group relative block h-[240px] md:h-[36vh]">
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
              <Link href="/shop" className="group relative block h-[240px] md:h-[36vh]">
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

      <QuietEscapeSection />
      <FeaturedTrio />
      <HarmonySection />

      {/* Brand Video Section */}
      <section className="w-full mt-[120px]">
        <div className="w-[96%] mx-auto">
            <div className="relative rounded-[26px] overflow-hidden h-[85vh]">
                <video
                    src="https://cdn.shopify.com/videos/c/o/v/d51f4351ed6e48b7a58c729b183c0a2f.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 flex h-full items-center justify-start text-left">
                    <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-xl p-10 rounded-lg text-foreground bg-white/60 backdrop-blur-md">
                        <h2 className="text-3xl font-bold tracking-wider text-primary">
                        CLEAN. AUTHENTIC. <br />
                        RADIANT
                        </h2>
                        <div className="mt-8 space-y-6 text-foreground/80">
                            <div>
                            <h3 className="text-base font-semibold text-foreground">Island Beauty with Purpose</h3>
                            <p className="mt-1 text-sm">
                                At Island, skincare isn't just a routine, it's a return. A return to calm, to care, to skin that feels like home. Inspired by "this IS your LAND," we see skin as a living landscape-shaped by seasons, stories, and self. It needs less noise, more nourishment. Fewer layers, deeper rest. With nature at our core, we craft clean, gentle rituals that restore balance and bring out your skin's quiet glow.
                            </p>
                            </div>
                            <div>
                            <h3 className="text-base font-semibold text-foreground">Korean Rice Water: A Timeless Glow</h3>
                            <p className="mt-1 text-sm">
                                Rooted in Joseon-era beauty, rice water has long been used for soft, clear, radiant skin. We bring that tradition from Korea to you, freshly sourced, thoughtfully paired with India's golden turmeric. A gentle union of heritage and healing - two cultures, one radiant story, written on your skin.
                            </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Smart Product Placement in Reels Section */}
      <section className="py-16 sm:py-24">
        <div className="w-[96%] mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">You + Island</h2>
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

      <StickyPromoSection />

      <ReviewSection />

      {/* Blog Section */}
      <section className="py-16 sm:py-24">
        <div className="w-[96%] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">From the Blog</h2>
              <p className="text-foreground/80">Your guide to skincare, self-care, and the stories behind our glow.</p>
            </div>
            <Button asChild>
              <Link href="/blogs">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((blog) => (
              <Link key={blog.id} href={`/blogs/${blog.id}`} className="group block">
                <Card className="flex flex-col h-full rounded-[26px] border-none bg-transparent shadow-none">
                  <div className="p-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                                <AvatarImage src={`https://i.pravatar.cc/32?u=${blog.author}`} alt={blog.author} />
                                <AvatarFallback>{blog.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <Calendar className="w-4 h-4" />
                           <span>{blog.date}</span>
                        </div>
                    </div>
                     <div className="relative w-full aspect-video rounded-[18px] overflow-hidden mb-4">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={blog.aiHint}
                        />
                      </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 sm:py-24">
        <div className="w-[96%] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">ON THE GRAM</h2>
              <p className="text-foreground/80">Tag @islandbeauty.in in your Instagram photos for a chance to be featured here.</p>
            </div>
            <Button asChild>
              <Link href="#">FOLLOW US</Link>
            </Button>
          </div>
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
