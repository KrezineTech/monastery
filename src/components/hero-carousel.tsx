"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

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
    image: "https://placehold.co/1600x900.png",
    aiHint: "skincare products lifestyle",
    title: "2 for the price of 1",
    subtitle: "Hurry up! The offer is valid until April 1, 2024",
    buttonText: "BUY NOW",
    buttonLink: "/shop",
  },
  {
    image: "https://placehold.co/1600x900.png",
    aiHint: "woman applying serum",
    title: "New Arrival: Glow Serum",
    subtitle: "Unlock radiant skin with our new potent formula.",
    buttonText: "Discover",
    buttonLink: "/shop/glow-serum",
  },
    {
    image: "https://placehold.co/1600x900.png",
    aiHint: "flatlay of moisturizers",
    title: "Hydration Boost",
    subtitle: "24-hour moisture for a fresh and dewy look.",
    buttonText: "Shop Moisturizers",
    buttonLink: "/shop",
  },
]

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    
    return () => {
        api.off("select", onSelect);
    }
  }, [api])

  return (
    <Carousel
      opts={{ loop: true }}
      setApi={setApi}
      className="relative group"
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
              <div className="relative w-full h-[700px] rounded-[26px] overflow-hidden">
                <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className="object-cover w-full h-full"
                    data-ai-hint={slide.aiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-center items-end text-white">
                    <div className="container mx-auto px-8 md:px-12 lg:px-24">
                        <div className="max-w-md md:max-w-lg">
                             <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
                                {slide.title}
                            </h2>
                            <p className="mt-4 text-lg md:text-xl max-w-md text-white/90 drop-shadow-md">
                                {slide.subtitle}
                            </p>
                            <Button size="lg" className="mt-8 rounded-full bg-white text-primary hover:bg-white/90" asChild>
                                <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
             </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <CarouselPrevious className="bg-white/50 hover:bg-white border-none text-primary rounded-full w-10 h-10" />
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <CarouselNext className="bg-white/50 hover:bg-white border-none text-primary rounded-full w-10 h-10" />
      </div>
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex justify-center gap-2">
            {slides.map((_, i) => (
                <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${i === current ? 'w-4 bg-white' : 'bg-white/50'}`}
                    aria-label={`Go to slide ${i + 1}`}
                />
            ))}
        </div>
      </div>
    </Carousel>
  )
}
