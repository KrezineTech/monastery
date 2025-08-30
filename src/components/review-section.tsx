
'use client';

import { Instagram } from 'lucide-react';
import { Card } from '@/components/ui/card';
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
    image: { src: 'https://placehold.co/400x500.png', aiHint: 'before and after skincare' },
  },
  {
    image: { src: 'https://placehold.co/400x300.png', aiHint: 'happy customer' },
  },
  {
    image: { src: 'https://placehold.co/400x500.png', aiHint: 'skin texture comparison' },
  },
   {
    image: { src: 'https://placehold.co/400x500.png', aiHint: 'before and after results' },
  },
   {
    image: { src: 'https://placehold.co/400x300.png', aiHint: 'smiling person' },
  },
];


export function ReviewSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="w-[96%] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-primary tracking-tight">Real people, real reviews.</h2>
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
          <CarouselContent className="-ml-4 pt-8">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                <div className="relative pt-6">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-black text-white rounded-full p-3 flex items-center justify-center">
                      <Instagram className="w-5 h-5" />
                    </div>
                  <Card className="h-full overflow-hidden p-4 rounded-[26px] border-none shadow-sm">
                      <div className="relative w-full h-[45vh] rounded-[18px] overflow-hidden">
                          <Image
                              src={review.image.src}
                              alt="review image"
                              fill
                              className="object-cover w-full h-full"
                              data-ai-hint={review.image.aiHint}
                          />
                      </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
           <CarouselPrevious className="absolute left-4 top-[55%] -translate-y-1/2 h-10 w-10 bg-white border-2 border-gray-200 text-gray-800 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
           <CarouselNext className="absolute right-4 top-[55%] -translate-y-1/2 h-10 w-10 bg-white border-2 border-gray-200 text-gray-800 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Carousel>
      </div>
    </section>
  );
}
