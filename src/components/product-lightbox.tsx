
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
import { PlayCircle } from 'lucide-react';

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
    if (!mainApi) return;
    if (open) {
      mainApi.scrollTo(startIndex, true);
      setSelectedIndex(startIndex);
    }
  }, [open, startIndex, mainApi]);
  
  React.useEffect(() => {
    if (!mainApi || !thumbApi) return;

    const onSelect = () => {
      const newIndex = mainApi.selectedScrollSnap();
      setSelectedIndex(newIndex);
      if (thumbApi.scrollSnapList().length > newIndex) {
        thumbApi.scrollTo(newIndex);
      }
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
      <DialogContent className="max-w-6xl w-full max-h-[90vh] p-0 bg-background border-none flex flex-col items-center justify-center rounded-lg">
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
            <div className="relative w-full h-[75%]">
                <Carousel setApi={setMainApi} className="w-full h-full">
                <CarouselContent className="h-full">
                    {media.map((item, index) => (
                    <CarouselItem key={index} className="flex items-center justify-center">
                        {item.type === 'video' ? (
                        <video src={item.src} controls autoPlay className="max-h-full max-w-full rounded-md" />
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
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground bg-white/50 hover:bg-white/80" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground bg-white/50 hover:bg-white/80" />
                </Carousel>
            </div>
            <div className="w-full max-w-4xl p-4 mt-4">
                <Carousel setApi={setThumbApi} opts={{ align: 'start', slidesToScroll: 1, containScroll: 'trimSnaps' }}>
                <CarouselContent className="-ml-2">
                    {media.map((item, index) => (
                    <CarouselItem key={index} className="pl-2 basis-1/6 md:basis-1/8 lg:basis-[10%]">
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
                        {item.type === 'video' && (
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <PlayCircle className="w-6 h-6 text-white" />
                            </div>
                        )}
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                </Carousel>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
