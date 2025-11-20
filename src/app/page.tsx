
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
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';


import { FeaturedTrio } from '@/components/featured-trio';
import { QuietEscapeSection } from '@/components/quiet-escape';
import { StickyPromoSection } from '@/components/sticky-promo-section';
import { HarmonySection } from '@/components/harmony-section';
import { ReviewSection } from '@/components/review-section';
import { FeaturedProductsSlider } from '@/components/featured-products-slider';
import { allBlogs } from '@/lib/blog-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, User } from 'lucide-react';

const categories: Category[] = [
  { name: 'Moisturizers', image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Untitled-1.webp?v=1754914138', mobileImage: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Untitled-1.webp?v=1754914138', aiHint: 'skincare moisturizer' },
  { name: 'Serum', image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Serum_copy.webp?v=1754934890', aiHint: 'skincare serum' },
  { name: 'Essence', image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Toner.webp?v=1754934725', aiHint: 'skincare essence' },
];


const reels: Reel[] = [
  {
    id: '1',
    videoUrl: 'https://cdn.shopify.com/videos/c/o/v/6daa81250e864682a3201786b32605e5.mp4',
    aiHint: 'woman applying skincare',
    product: { id: '1', name: 'Purity in a Drop Toner & Essence', price: 999.00, image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Untitled-2.webp?v=1756537408', aiHint: 'toner essence bottle' },
  },
  {
    id: '2',
    videoUrl: 'https://cdn.shopify.com/videos/c/o/v/f13a9e5211c846049670476fbd1bbae5.mp4',
    aiHint: 'skincare routine',
    product: { id: '2', name: 'DewDrop Evenness Boost Serum', price: 999.00, image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Serum_copy.webp?v=1754934890', aiHint: 'serum bottle' },
  },
  {
    id: '3',
    videoUrl: 'https://cdn.shopify.com/videos/c/o/v/b8286706707a485b897d7342be75d29d.mp4',
    aiHint: 'moisturizer application',
    product: { id: '3', name: 'Morning Dew Moisturizer with SPF 15', price: 1300.00, image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Untitled-1.webp?v=1754914138', aiHint: 'moisturizer bottle' },
  },
  {
    id: '4',
    videoUrl: 'https://cdn.shopify.com/videos/c/o/v/0b32f300c2124dbfa056a8f4e4353478.mp4',
    aiHint: 'product set showcase',
    product: { id: '4', name: 'Yusuru Radiance Combo Set', price: 2490.00, image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/22212.webp?v=1756537844', aiHint: 'skincare combo set' },
  },
  {
    id: '5',
    videoUrl: 'https://cdn.shopify.com/videos/c/o/v/84c997d45423440184c123c92ba23ecc.mp4',
    aiHint: 'gentle skincare',
    product: { id: '1', name: 'Purity in a Drop Toner & Essence', price: 999.00, image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Untitled-2.webp?v=1756537408', aiHint: 'toner essence bottle' },
  },
  {
    id: '6',
    videoUrl: 'https://cdn.shopify.com/videos/c/o/v/9fc98e5a0d084eb997463f23858bc2bf.mp4',
    aiHint: 'daily routine',
    product: { id: '2', name: 'DewDrop Evenness Boost Serum', price: 999.00, image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Serum_copy.webp?v=1754934890', aiHint: 'serum bottle' },
  },
  {
    id: '7',
    videoUrl: 'https://cdn.shopify.com/videos/c/o/v/447e0a9c99884170bae3422569ca9ccf.mp4',
    aiHint: 'glowing skin',
    product: { id: '3', name: 'Morning Dew Moisturizer with SPF 15', price: 1300.00, image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Untitled-1.webp?v=1754914138', aiHint: 'moisturizer bottle' },
  },
];

const instagramPosts: InstagramPost[] = [
    { id: '1', image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/537681584_17944965150030654_2479612721285834810_n.jpg?v=1756546526', aiHint: 'skincare flatlay' },
    { id: '2', image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/537370959_17944829415030654_8867004499440604631_n.jpg?v=1756547108', aiHint: 'person smiling' },
    { id: '3', image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/521539886_18523303228058318_2791011476793025254_n.jpg?v=1756547205', aiHint: 'product texture' },
    { id: '4', image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/522277164_18523303261058318_557105110798080717_n.jpg?v=1756547228', aiHint: 'beach waves' },
    { id: '5', image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/518273101_18521153305058318_1061965752163149808_n.jpg?v=1756547258', aiHint: 'tropical leaves' },
    { id: '6', image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/516743105_18521153341058318_8396075805249994544_n.jpg?v=1756547276', aiHint: 'skincare shelfie' },
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
                            <h3 className="absolute top-6 left-6 text-xl font-semibold font-headline text-gray-800 z-10">{categories[0].name}</h3>
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
                            <h3 className="absolute top-6 left-6 text-xl font-semibold font-headline text-gray-800 z-10">{categories[1].name}</h3>
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
                            <h3 className="absolute top-6 left-6 text-xl font-semibold font-headline text-gray-800 z-10">{categories[2].name}</h3>
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
                    <h3 className="absolute top-6 left-6 text-2xl font-semibold font-headline text-gray-800 z-10">{categories[0].name}</h3>
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
                   <h3 className="absolute top-6 left-6 text-2xl font-semibold font-headline text-gray-800 z-10">{categories[1].name}</h3>
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
                   <h3 className="absolute top-6 left-6 text-2xl font-semibold font-headline text-gray-800 z-10">{categories[2].name}</h3>
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
      <FeaturedProductsSlider 
        title="Our Bestsellers"
        description="Loved by thousands. Trusted for results."
      />
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
                        <h2 className="text-3xl font-bold font-headline tracking-wider text-primary">
                        Clean. Authentic. <br />
                        Radiant
                        </h2>
                        <div className="mt-8 space-y-6 text-foreground/80">
                            <div>
                            <h3 className="text-base font-semibold font-headline text-foreground">Island Beauty With Purpose</h3>
                            <p className="mt-1 text-sm">
                                At Island, skincare isn't just a routine, it's a return. A return to calm, to care, to skin that feels like home. Inspired by "this IS your LAND," we see skin as a living landscape-shaped by seasons, stories, and self. It needs less noise, more nourishment. Fewer layers, deeper rest. With nature at our core, we craft clean, gentle rituals that restore balance and bring out your skin's quiet glow.
                            </p>
                            </div>
                            <div>
                            <h3 className="text-base font-semibold font-headline text-foreground">Korean Rice Water: A Timeless Glow</h3>
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

      <section className="py-16 sm:py-24">
        <div className="w-[96%] mx-auto">
          <h2 className="text-3xl font-bold font-headline text-center text-primary mb-12">You + Island</h2>
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
                             <div className="relative w-16 h-16 shrink-0 aspect-square">
                                <Image
                                  src={reel.product.image}
                                  alt={reel.product.name}
                                  fill
                                  className="rounded-[12px] object-cover"
                                  data-ai-hint={reel.product.aiHint}
                                />
                             </div>
                            <div className="flex-1">
                              <h4 className="font-semibold font-headline text-sm text-primary">{reel.product.name}</h4>
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
              <h2 className="text-3xl font-bold font-headline text-primary mb-2">From The Blog</h2>
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
                  <div>
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
                    <h5 className="text-lg font-bold font-headline text-foreground group-hover:text-primary transition-colors">
                      {blog.title}
                    </h5>
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
              <h2 className="text-3xl font-bold font-headline text-primary mb-4">On The Gram</h2>
              <p className="text-foreground/80">Tag @islandbeauty.in in your Instagram photos for a chance to be featured here.</p>
            </div>
            <Button asChild>
              <Link href="https://www.instagram.com/islandbeauty.in/" target="_blank" rel="noopener noreferrer">Follow Us</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
            {instagramPosts.map((post) => (
              <Link href="https://www.instagram.com/islandbeauty.in/" target="_blank" rel="noopener noreferrer" key={post.id} className="group block overflow-hidden rounded-lg">
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
