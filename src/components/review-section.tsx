
'use client';

import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const reviews = [
  {
    name: 'Sarah K.',
    title: 'Verified Buyer',
    rating: 5,
    review: 'This is the best skincare product I have ever used. My skin has never felt so soft and looked so radiant. I will definitely be repurchasing!',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'woman smiling',
  },
  {
    name: 'Emily L.',
    title: 'Beauty Blogger',
    rating: 5,
    review: "I'm obsessed! The texture is so luxurious and it absorbs so quickly. It has completely transformed my dry, dull skin into a dewy, glowing complexion.",
    image: 'https://placehold.co/100x100.png',
    aiHint: 'woman happy',
  },
  {
    name: 'Jessica P.',
    title: 'Dermatologist',
    rating: 4,
    review: 'A solid product with high-quality ingredients. I appreciate that it is fragrance-free and suitable for sensitive skin. My patients have seen great results.',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'doctor smiling',
  },
  {
    name: 'Mike R.',
    title: 'Skincare Enthusiast',
    rating: 5,
    review: 'Finally, a moisturizer that doesn\'t feel greasy! My skin feels hydrated all day long. This has become a staple in my daily routine. Highly recommend!',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'man smiling',
  },
  {
    name: 'Chloe G.',
    title: 'Verified Buyer',
    rating: 5,
    review: "The glow is real! I've received so many compliments on my skin since I started using this serum. It's lightweight, effective, and worth every penny.",
    image: 'https://placehold.co/100x100.png',
    aiHint: 'woman touching face',
  },
];

export function ReviewSection() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="w-[96%] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">What Our Community Says</h2>
          <p className="text-foreground/80 mt-2 max-w-2xl mx-auto">
            Real reviews from real customers. Discover why they love Island Beauty.
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
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between p-8 rounded-[26px] border-none shadow-sm bg-background">
                    <div>
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-foreground/90 italic">"{review.review}"</p>
                    </div>
                    <div className="mt-6">
                      <p className="font-bold text-primary">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.title}</p>
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
