
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
    content: [
      {
        type: 'text',
        avatar: 'https://placehold.co/40x40.png',
        text: "After 3 weeks - these were my results and they truely speak for themselves! Ps. I never thought I would ever share a photo of myself without make up on, but here we go :)",
      },
      {
        type: 'image',
        images: [
            { src: 'https://placehold.co/200x250.png', aiHint: 'before skincare' },
            { src: 'https://placehold.co/200x250.png', aiHint: 'after skincare' }
        ],
      },
      {
        type: 'text',
        avatar: 'https://placehold.co/40x40.png',
        text: "I couldn't find anywhere to leave a photo with my review :/",
      },
    ]
  },
  {
    source: 'instagram',
    content: [
      {
        type: 'text',
        avatar: 'https://placehold.co/40x40.png',
        text: "This product is amazing! My skin has never felt better. I'm glowing!",
      },
      {
        type: 'image',
        images: [
          { src: 'https://placehold.co/400x300.png', aiHint: 'happy customer' }
        ],
      },
    ]
  },
  {
    source: 'instagram',
    content: [
      {
        type: 'text',
        avatar: 'https://placehold.co/40x40.png',
        text: "I was skeptical at first, but now I'm a believer. Look at the difference!",
      },
      {
        type: 'image',
        images: [
            { src: 'https://placehold.co/200x250.png', aiHint: 'skin texture before' },
            { src: 'https://placehold.co/200x250.png', aiHint: 'skin texture after' }
        ],
      },
    ]
  },
];

const sourceIcons: { [key: string]: React.ReactNode } = {
    instagram: <Instagram className="w-6 h-6 text-black" />,
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
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col p-6 rounded-[26px] border border-border/50 shadow-sm bg-muted/20 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-black">
                        {sourceIcons[review.source]}
                    </div>
                    <div className="mt-8 space-y-4">
                      {review.content.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          {item.type === 'text' && (
                            <div className="flex items-start gap-3">
                              <Image 
                                src={item.avatar!}
                                alt="avatar"
                                width={32}
                                height={32}
                                className="rounded-full mt-1"
                              />
                              <div className="bg-white p-3 rounded-lg rounded-tl-none">
                                <p className="text-sm text-foreground/90">{item.text}</p>
                              </div>
                            </div>
                          )}
                          {item.type === 'image' && item.images && (
                            <div className="flex justify-center gap-2 mt-2">
                              {item.images.map((img, imgIndex) => (
                                <Image
                                  key={imgIndex}
                                  src={img.src}
                                  alt="review image"
                                  width={150}
                                  height={180}
                                  className="rounded-lg object-cover"
                                  data-ai-hint={img.aiHint}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
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
