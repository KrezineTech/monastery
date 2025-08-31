
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const promoData = [
  {
    image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/freepik__expand__33890.png?v=1756619792',
    aiHint: 'woman holding cream',
    textColor: 'text-white',
    bgColor: 'bg-[#C5B4E3]',
    buttonClasses: 'bg-white/20 hover:bg-white/30 text-white',
    tagBg: 'bg-white/20',
    content: {
      tag: 'Self Care',
      title: 'Self-Care Sale Starts Here.',
      description: 'Indulge in feel-good beauty essentials at irresistible prices and give your routine the glow-up it deserves.',
    },
    isImageFirst: true,
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/WEBSITE_REVAMP_DESIGNS-22.webp?v=1754620025',
    aiHint: 'woman applying face cream',
    textColor: 'text-stone-800',
    bgColor: 'bg-[#D2CBBF]',
    buttonClasses: 'bg-stone-800/20 hover:bg-stone-800/30 text-stone-800',
    tagBg: 'bg-black/10',
    content: {
      tag: 'Glow Aura',
      title: "Nature's touch, skin's glow.",
      description: "Gentle, plant-powered formulas that nourish deeply and bring out your skin's natural radiance—just as nature intended.",
    },
    isImageFirst: false,
  },
];

export function StickyPromoSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="w-[96%] mx-auto">
        <div className="space-y-16">
          {promoData.map((promo, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {promo.isImageFirst ? (
                <>
                  <div className="relative h-[60vh] rounded-[26px] overflow-hidden">
                    <Image
                      src={promo.image}
                      alt={promo.content.title}
                      fill
                      className="object-cover"
                      data-ai-hint={promo.aiHint}
                    />
                  </div>
                  <div className="md:sticky md:top-24">
                    <Card className={`p-10 rounded-[26px] ${promo.bgColor} ${promo.textColor} border-none h-auto md:h-auto lg:h-[40vh] flex flex-col justify-center`}>
                      <span className={`inline-block ${promo.tagBg} px-3 py-1 text-sm rounded-md mb-4 self-start`}>{promo.content.tag}</span>
                      <h2 className="text-4xl font-bold font-headline mb-4">{promo.content.title}</h2>
                      <p className="mb-6 opacity-80">{promo.content.description}</p>
                      <Button variant="secondary" className={`${promo.buttonClasses} self-start`}>
                        Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Card>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:sticky md:top-24">
                    <Card className={`p-10 rounded-[26px] ${promo.bgColor} ${promo.textColor} border-none h-auto md:h-auto lg:h-[40vh] flex flex-col justify-center`}>
                      <span className={`inline-block ${promo.tagBg} px-3 py-1 text-sm rounded-md mb-4 self-start`}>{promo.content.tag}</span>
                      <h2 className="text-4xl font-bold font-headline mb-4">{promo.content.title}</h2>
                      <p className="mb-6 opacity-80">{promo.content.description}</p>
                      <Button variant="secondary" className={`${promo.buttonClasses} self-start`}>
                        Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Card>
                  </div>
                  <div className="relative h-[80vh] rounded-[26px] overflow-hidden">
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
