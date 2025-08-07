"use client"

import * as React from "react"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "https://placehold.co/500x500.png",
    aiHint: "skincare product",
    title: "2 for the price of 1",
    subtitle: "Hurry up! The offer is valid until April 1, 2024",
    buttonText: "BUY NOW",
  },
  {
    image: "https://placehold.co/500x500.png",
    aiHint: "serum bottle",
    title: "New Arrival: Glow Serum",
    subtitle: "Unlock radiant skin with our new potent formula.",
    buttonText: "Discover",
  },
    {
    image: "https://placehold.co/500x500.png",
    aiHint: "moisturizer jar",
    title: "Hydration Boost",
    subtitle: "24-hour moisture for a fresh and dewy look.",
    buttonText: "Shop Moisturizers",
  },
]

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div>
      <Carousel setApi={setApi} className="relative">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="relative flex items-center justify-center p-6 sm:p-10 md:p-16 rounded-3xl bg-blue-100 overflow-hidden">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                width={500}
                                height={500}
                                className="object-contain"
                                data-ai-hint={slide.aiHint}
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary" style={{color: '#4C5FE7'}}>
                                {slide.title}
                            </h2>
                            <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto md:mx-0">
                                {slide.subtitle}
                            </p>
                            <Button size="lg" className="mt-8 rounded-full" style={{backgroundColor: '#6A7BFF'}}>
                                {slide.buttonText}
                            </Button>
                        </div>
                   </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <CarouselPrevious className="bg-white/50 hover:bg-white border-none text-primary" />
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <CarouselNext className="bg-white/50 hover:bg-white border-none text-primary" />
        </div>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, i) => (
                <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className={`h-2 w-2 rounded-full ${i === current - 1 ? 'bg-primary' : 'bg-gray-300'}`}
                    aria-label={`Go to slide ${i + 1}`}
                />
            ))}
        </div>
      </div>
    </div>
  )
}
