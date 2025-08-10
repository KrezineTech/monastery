
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const promoData = [
  {
    image: 'https://placehold.co/800x1000.png',
    aiHint: 'woman holding cream',
    textColor: 'text-white',
    bgColor: 'bg-[#C5B4E3]',
    content: {
      tag: 'Self Care',
      title: 'Self-Care Sale Starts Here.',
      description: 'Indulge in feel-good beauty essentials at irresistible prices and give your routine the glow-up it deserves.',
    },
    isImageFirst: true,
    cardHeight: 'h-[30vh]',
  },
  {
    image: 'https://placehold.co/800x1000.png',
    aiHint: 'woman applying face cream',
    textColor: 'text-stone-800',
    bgColor: 'bg-[#D2CBBF]',
    content: {
      tag: 'Glow Aura',
      title: "Nature's touch, skin's glow.",
      description: "Gentle, plant-powered formulas that nourish deeply and bring out your skin's natural radiance—just as nature intended.",
    },
    isImageFirst: false,
    cardHeight: 'h-[40vh]',
  },
];

export function StickyPromoSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="w-[96%] mx-auto">
        <div className="space-y-8">
          {promoData.map((promo, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {promo.isImageFirst ? (
                <>
                  <div className="relative h-[60vh] rounded-lg overflow-hidden">
                    <Image
                      src={promo.image}
                      alt={promo.content.title}
                      fill
                      className="object-cover"
                      data-ai-hint={promo.aiHint}
                    />
                  </div>
                  <div className="md:sticky md:top-24">
                    <Card className={`p-10 rounded-lg ${promo.bgColor} ${promo.textColor} border-none ${promo.cardHeight} flex flex-col justify-center`}>
                      <span className="inline-block bg-white/20 px-3 py-1 text-sm rounded-md mb-4 self-start">{promo.content.tag}</span>
                      <h2 className="text-4xl font-bold mb-4">{promo.content.title}</h2>
                      <p className="mb-6">{promo.content.description}</p>
                      <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white self-start">
                        Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Card>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:sticky md:top-24">
                    <Card className={`p-10 rounded-lg ${promo.bgColor} ${promo.textColor} border-none ${promo.cardHeight} flex flex-col justify-center`}>
                      <span className="inline-block bg-black/10 px-3 py-1 text-sm rounded-md mb-4 self-start">{promo.content.tag}</span>
                      <h2 className="text-4xl font-bold mb-4">{promo.content.title}</h2>
                      <p className="mb-6">{promo.content.description}</p>
                      <Button variant="secondary" className="bg-black/20 hover:bg-black/30 self-start">
                        Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Card>
                  </div>
                  <div className="relative h-[60vh] rounded-lg overflow-hidden">
                    <Image
                      src={promo.image}
                      alt={promo.content.title}
                      fill
                      className="object-cover"
                      data-ai-hint={promo.aiHint}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
