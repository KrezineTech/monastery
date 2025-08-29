
'use client';

import * as React from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import type { ProductMedia } from '@/lib/types';

interface ProductLightboxProps {
  media: ProductMedia[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  startIndex?: number;
}

export function ProductLightbox({
  media,
  open,
  onOpenChange,
  startIndex = 0,
}: ProductLightboxProps) {
  const [mainApi, setMainApi] = React.useState<CarouselApi>();
  const [thumbApi, setThumbApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(startIndex);

  React.useEffect(() => {
    if (open) {
      setSelectedIndex(startIndex);
      if (mainApi) mainApi.scrollTo(startIndex, true);
      if (thumbApi) thumbApi.scrollTo(startIndex, true);
    }
  }, [open, startIndex, mainApi, thumbApi]);

  React.useEffect(() => {
    if (!mainApi || !thumbApi) return;

    const onSelect = () => {
      const newIndex = mainApi.selectedScrollSnap();
      setSelectedIndex(newIndex);
      thumbApi.scrollTo(newIndex);
    };

    mainApi.on('select', onSelect);
    return () => {
      mainApi.off('select', onSelect);
    };
  }, [mainApi, thumbApi]);

  const onThumbClick = (index: number) => {
    mainApi?.scrollTo(index);
  };
  
  if (!media || media.length === 0) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-screen-xl w-full h-full max-h-screen p-0 bg-black/90 border-none flex flex-col">
        <div className="flex-1 flex items-center justify-center p-4 relative">
            <Carousel setApi={setMainApi} className="w-full h-full">
            <CarouselContent className="h-full">
                {media.map((item, index) => (
                <CarouselItem key={index} className="flex items-center justify-center">
                    {item.type === 'video' ? (
                    <video src={item.src} controls autoPlay className="max-h-full max-w-full" />
                    ) : (
                    <Image
                        src={item.src}
                        alt={`Product image ${index + 1}`}
                        fill
                        className="object-contain"
                    />
                    )}
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30" />
            </Carousel>
        </div>
        <div className="p-4 bg-black/50">
            <Carousel setApi={setThumbApi} opts={{ align: 'start', slidesToScroll: 1, containScroll: 'trimSnaps' }}>
            <CarouselContent className="-ml-2">
                {media.map((item, index) => (
                <CarouselItem key={index} className="pl-2 basis-1/8 md:basis-1/12">
                    <div
                    onClick={() => onThumbClick(index)}
                    className={cn(
                        'relative aspect-square cursor-pointer rounded-md overflow-hidden',
                        'border-2',
                        index === selectedIndex ? 'border-primary' : 'border-transparent'
                    )}
                    >
                    <Image
                        src={item.thumbnail}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                    />
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}
