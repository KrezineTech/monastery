
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const ingredients = [
  {
    title: 'Pure Korean Rice Water',
    description: 'Sourced from the pristine fields of Korea, our rice water is rich in vitamins and minerals. It gently purifies the skin, minimizes pores, and imparts a natural, healthy glow. We honor centuries of tradition by using a time-tested extraction process to preserve its potent nutrients.',
    image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/freepik__expand__29450.png?v=1756620680',
    aiHint: 'rice water cosmetics',
    benefits: [
        'Hydrates deeply while brightening and evening skin tone.',
        'Rich in amino acids, vitamins, and minerals that repair and nourish the skin barrier.',
        'Proven to reduce inflammation and improve texture over time.'
    ],
    benefitTitle: '"THE HEART OF YUSURU"'
  },
  {
    title: 'Indian Turmeric',
    description: 'A timeless Indian spice celebrated for its healing properties. Turmeric is a powerful anti-inflammatory and antioxidant that soothes irritation, evens out skin tone, and protects against environmental stressors, revealing a brighter, calmer complexion.',
    image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/218.jpg?v=1756620808',
    aiHint: 'turmeric root powder',
    benefits: [
        'A natural anti-inflammatory powerhouse that calms redness and irritation.',
        'Rich in curcuminoids, it brightens skin tone and promotes collagen production.',
        'Protects against environmental damage with strong antioxidant properties.'
    ],
    benefitTitle: '"THE GOLDEN GLOW"'
  },
  {
    title: 'Niacinamide (Vitamin B3)',
    description: 'A true skincare superhero, Niacinamide strengthens the skin\'s barrier, minimizes the appearance of pores, and regulates oil production. It works in harmony with our natural ingredients to visibly improve skin texture and tone for a balanced, healthy look.',
    image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/2148205096.jpg?v=1756620734',
    aiHint: 'skincare science lab',
    benefits: [
        "Reduces pore size and refines skin texture, giving a smoother appearance.",
        "Brightens dark spots and evens out skin tone.",
        "Strengthens the skin barrier, enhancing moisture retention and resilience.",
        "Calms redness and irritation"
    ],
    benefitTitle: '"THE SKIN BALANCER"'
  },
];

const boosters = [
  {
    name: 'Hyaluronic Acid',
    title: 'Hyaluronic Acid',
    description: 'The Hydration Hero – Holds 1,000x its weight in water, intensely hydrating and plumping the skin while improving elasticity and smoothing fine lines.',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'hyaluronic acid serum'
  },
  {
    name: 'Salicylic Acid',
    title: 'Salicylic Acid',
    description: 'The Blemish Fighter – Gently exfoliates inside pores, clearing oil to prevent breakouts. It reduces blackheads, refines skin texture, and soothes acne-prone skin.',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'salicylic acid serum'
  },
  {
    name: 'Glycolic Acid',
    title: 'Glycolic Acid',
    description: 'The Skin Resurfacer – Gently exfoliates to remove dead skin cells, revealing a smoother complexion. Boosts collagen production to reduce fine lines over time.',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'glycolic acid powder'
  }
];

function IngredientCard({ title, description, image, aiHint, i, progress, range, targetScale }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div ref={container} className="sticky top-0 h-screen flex items-center justify-center">
      <motion.div 
        style={{ 
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }} 
        className="relative h-[500px] w-full rounded-2xl"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center h-full w-full bg-card p-8 rounded-2xl border border-border/40">
          <div className="order-1">
            <h3 className="text-2xl font-bold font-headline text-primary mb-4">{title}</h3>
            <p className="text-foreground/80 leading-relaxed">{description}</p>
          </div>
          <div className="order-2 h-full">
            <div className="relative w-full h-full rounded-[26px] overflow-hidden">
              <motion.div className="w-full h-full" style={{scale: imageScale}}>
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="w-full h-full object-cover"
                  data-ai-hint={aiHint}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function IngredientCardWithList({ title, benefitTitle, benefits, image, aiHint, i, progress, range, targetScale }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'start start']
    });
  
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);
  
    return (
      <motion.div ref={container} className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div 
          style={{ 
            scale,
            top: `calc(-5vh + ${i * 25}px)`,
          }} 
          className="relative h-[500px] w-full rounded-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center h-full w-full bg-card p-8 rounded-2xl border border-border/40">
            <div className="order-1">
              <p className="text-sm font-semibold text-primary mb-2">{benefitTitle}</p>
              <h3 className="text-2xl font-bold font-headline text-primary mb-4">{title.replace('(Vitamin B3)','')}</h3>
              <ul className="space-y-3 text-foreground/80">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 border-b border-dashed pb-3">
                        <span>{benefit}</span>
                    </li>
                ))}
              </ul>
            </div>
            <div className="order-2 h-full">
              <div className="relative w-full h-full rounded-[26px] overflow-hidden">
                <motion.div className="w-full h-full" style={{scale: imageScale}}>
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="w-full h-full object-cover"
                    data-ai-hint={aiHint}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  }

export default function IngredientsPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const renderDescription = (description: string) => {
    const parts = description.split(' – ');
    if (parts.length > 1) {
      return (
        <>
          <strong className="font-semibold">{parts[0]}</strong> – {parts.slice(1).join(' – ')}
        </>
      );
    }
    return description;
  };

  return (
    <>
      <section className="w-full md:pt-8 pt-7 md:mb-5 mb-3">
        <div className="w-[96%] mx-auto px-0">
          <div className="relative w-full h-[300px] md:h-[45vh] rounded-[26px] overflow-hidden">
            <video
              src="https://cdn.shopify.com/videos/c/o/v/9062cc9db8eb4a1f91e1ec951209c4c2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 z-10 h-full flex flex-col justify-end items-start text-white p-12">
              <div className="w-full">
                <h2 className="text-4xl md:text-[52px] font-extrabold font-headline">
                  Our Ingredients
                </h2>
                <div className="mt-4 border-t border-white/50 w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="w-full">
        <div className="w-[96%] mx-auto px-4 pt-12 sm:pt-16">
          <div className="max-w-none mx-auto text-left">
            <h1 className="text-3xl font-bold font-headline text-primary mb-4">YUSURU– The Story of Rice Water</h1>
            <h2 className="text-xl font-semibold text-foreground/90 mb-6">Centuries of Korean Tradition in Every Drop</h2>
            <div className="prose lg:prose-lg max-w-none text-foreground/80 space-y-4">
              <p>YUSURU or Rice Water Solution, has been a skincare secret in Korea for over 1,000 years. Traditionally, women would rinse their rice and save the milky water, using it to cleanse and hydrate their skin. This natural elixir was revered for its ability to brighten complexion, smooth texture, and deliver long-lasting hydration.</p>
              <p>Korean beauty rituals often began and ended with YUSURU, a practice passed down through generations. Its efficacy lies in its nutrient-rich composition, containing amino acids, vitamins, and antioxidants that work together to repair the skin barrier, boost hydration, and promote an even, radiant tone.</p>
              <p>At ISLAND, we honor this legacy by sourcing pure Korean rice water and blending it with modern skincare science to deliver transformative results.</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={container} className="relative h-[300vh] w-[96%] mx-auto">
        {ingredients.map((ingredient, i) => {
          const targetScale = 1 - ((ingredients.length - i) * 0.05);
          if (ingredient.benefits) {
            return (
                <IngredientCardWithList
                    key={i}
                    i={i}
                    {...ingredient}
                    progress={scrollYProgress}
                    range={[i * 0.25, 1]}
                    targetScale={targetScale}
                />
            )
          }
          return (
            <IngredientCard 
              key={i} 
              i={i} 
              {...ingredient} 
              progress={scrollYProgress} 
              range={[i * .25, 1]} 
              targetScale={targetScale}
            />
          );
        })}
      </div>

      <section className="bg-background pb-24">
        <div className="w-[96%] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline text-primary">The Essential Boosters</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {/* First big card */}
            <div className="group relative overflow-hidden rounded-[26px] border-none text-white flex flex-col justify-end p-6 h-[78vh] md:row-span-2">
              <Image
                src={boosters[0].image}
                alt={boosters[0].name}
                fill
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={boosters[0].aiHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold font-headline">{boosters[0].title}</h3>
                <p className="text-sm opacity-90 mt-4 max-w-md">
                  {renderDescription(boosters[0].description)}
                </p>
              </div>
            </div>

            {/* Right two stacked cards */}
            <div className="flex flex-col gap-4 h-[78vh]">
              {boosters.slice(1).map((booster, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-[26px] border-none text-white flex flex-col justify-end p-6 h-[38vh]"
                >
                  <Image
                    src={booster.image}
                    alt={booster.name}
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={booster.aiHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold font-headline">{booster.title}</h3>
                    <p className="text-sm opacity-90 mt-4 max-w-md">
                      {renderDescription(booster.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

    



    

    

