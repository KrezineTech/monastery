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
    image: "https://placehold.co/800x600.png",
    aiHint: "skincare products lifestyle",
    title: "2 for the price of 1",
    subtitle: "Hurry up! The offer is valid until April 1, 2024",
    buttonText: "BUY NOW",
  },
  {
    image: "https://placehold.co/800x600.png",
    aiHint: "woman applying serum",
    title: "New Arrival: Glow Serum",
    subtitle: "Unlock radiant skin with our new potent formula.",
    buttonText: "Discover",
  },
    {
    image: "https://placehold.co/800x600.png",
    aiHint: "flatlay of moisturizers",
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
    <Carousel setApi={setApi} className="relative group">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
              <div className="relative w-full h-[60vh] rounded-3xl overflow-hidden bg-primary/10">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div className="relative h-full w-full hidden md:block">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            data-ai-hint={slide.aiHint}
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center text-left p-12 lg:p-24">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary">
                            {slide.title}
                        </h2>
                        <p className="mt-4 text-lg max-w-md text-foreground/80">
                            {slide.subtitle}
                        </p>
                        <Button size="lg" className="mt-8 rounded-full">
                            {slide.buttonText}
                        </Button>
                    </div>
                </div>
             </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <CarouselPrevious className="bg-white/50 hover:bg-white border-none text-primary rounded-full w-10 h-10" />
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <CarouselNext className="bg-white/50 hover:bg-white border-none text-primary rounded-full w-10 h-10" />
      </div>
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 py-2 text-center text-sm text-muted-foreground">
        <div className="flex justify-center gap-2">
            {slides.map((_, i) => (
                <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className={`h-2 w-2 rounded-full transition-colors ${i === current - 1 ? 'bg-primary' : 'bg-gray-300'}`}
                    aria-label={`Go to slide ${i + 1}`}
                />
            ))}
        </div>
      </div>
    </Carousel>
  )
}
