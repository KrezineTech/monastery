
'use client';

import { Instagram } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const reviews = [
  {
    source: 'instagram',
    image: 'https://placehold.co/400x600.png',
    aiHint: 'review screenshot',
  },
  {
    source: 'instagram',
    image: 'https://placehold.co/400x600.png',
    aiHint: 'user testimonial',
  },
  {
    source: 'instagram',
    image: 'https://placehold.co/400x600.png',
    aiHint: 'social media post',
  },
  {
    source: 'amazon',
    image: 'https://placehold.co/400x600.png',
    aiHint: 'product review',
  },
  {
    source: 'instagram',
    image: 'https://placehold.co/400x600.png',
    aiHint: 'customer feedback',
  },
  {
    source: 'instagram',
    image: 'https://placehold.co/400x600.png',
    aiHint: 'before and after',
  },
];

const sourceIcons: { [key: string]: React.ReactNode } = {
    instagram: <Instagram className="w-5 h-5 text-black" />,
    amazon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-amazon"><path d="M14.74 15.02s-1.42.33-2.25.31c-.83-.02-3.41-1.33-3.41-1.33s-1.25.92-1.25 2.5c0 1.58.94 2.47 2.04 2.47s2.21-.92 2.21-.92.83 1.59 2.59 1.5c1.76-.09 2.54-1.62 2.54-2.54s-.92-2.01-2.47-2.01zm3.89-1.45c.44-.02 1.13-1.42 1.13-1.42s-1.8-1.54-3.5-.79c-1.7.75-2.08 2.22-2.08 2.22s1.42.44 2.25.29c.83-.15 2.2-.29 2.2-.29zM22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zM5.42 10.42s.78-1.17.65-2.04c-.13-.87-.82-1.58-.82-1.58s1.62-.22 2.58.93c.96 1.14.79 2.5.79 2.5s-1.58.55-2.13.38c-.55-.18-1.07-1.13-1.07-1.13z"/></svg>
};

export function ReviewSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="w-[96%] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary tracking-tight">Real people, real reviews.</h2>
          <p className="text-foreground/80 mt-4 max-w-2xl mx-auto">
            Join our global community of 50,000+ people reaching their health + confidence goals.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full relative group"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 pl-4">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between p-6 rounded-[26px] border border-border/50 shadow-sm bg-muted/20">
                    <div className="flex justify-center mb-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-border/60">
                            {sourceIcons[review.source]}
                        </div>
                    </div>
                    <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
                      <Image 
                        src={review.image} 
                        alt="Review"
                        fill
                        className="object-cover" 
                        data-ai-hint={review.aiHint}
                      />
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
    </section>
  );
}
