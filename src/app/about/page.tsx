
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const founders = [
  {
    name: 'Shirley Setia',
    role: 'Co-Founder',
    quote: "ISLAND gave me the chance to be vulnerable. To talk about skin struggles I never really shared, and to help shape something that feels real, not an aspirational. I didn’t want to just ‘lend my face’, I wanted to build something I could stand behind. My favourite part has been connecting with people who see their own story in ours.”",
    image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Rectangle_1578.webp?v=1754813589',
    aiHint: 'woman smiling'
  },
  {
    name: 'Sakshi Jain',
    role: 'Co-Founder',
    quote: "For me, ISLAND began as a quiet rebellion against overcomplicated routines, unrealistic beauty standards, and skincare that never felt made for us. It’s been deeply fulfilling to build something from scratch that respects the Indian consumer’s intelligence and skin both. My favourite part? Turning a personal struggle into a brand that feels like home for others too.”",
    image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Rectangle_1579.webp?v=1754813589',
    aiHint: 'woman portrait'
  },
  {
    name: 'Jinsoon Lee',
    role: 'Co-Founder',
    quote: "As a formulator, I’ve worked with many skincare brands, but ISLAND felt different from the very first conversation. It wasn’t about perfection. It was about relevance. Indian skin, Indian climate, Indian water. All of it made me rethink formulation from the ground up. My favourite part is solving for things that truly matter, and creating something that feels both modern and rooted.”",
    image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Rectangle_1580.webp?v=1754813589',
    aiHint: 'woman professional'
  }
];

const aboutContent = [
  {
    image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/about-1.webp?v=1754813589',
    aiHint: 'woman applying cream',
    textColor: 'text-stone-800',
    bgColor: 'bg-[#D2CBBF]',
    buttonClasses: 'bg-stone-800/20 hover:bg-stone-800/30 text-stone-800',
    tagBg: 'bg-black/10',
    content: {
      tag: 'Our Philosophy',
      title: "Fewer steps. Deeper results. Calm built into every layer.",
      description: "The Power of Less, Perfected\nSkincare shouldn’t feel complicated - it should feel clear. In a world overflowing with steps, trends, and overuse, Island offers thoughtful restraint. Each product is designed to do more with less - multi-functional, sensorial, and effective. We focus on what matters: proven ingredients, intentional textures, and routines that respect your time and your skin. This is skincare that doesn’t overwhelm, it restores. Reliable, refined, and made to fit into real life beautifully.",
    },
    isImageFirst: true,
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/about-2.webp?v=1754813589',
    aiHint: 'skincare texture',
    textColor: 'text-white',
    bgColor: 'bg-[#C5B4E3]',
    buttonClasses: 'bg-white/20 hover:bg-white/30 text-white',
    tagBg: 'bg-white/20',
    content: {
      tag: 'Our Promise',
      title: 'Time-honored ingredients, reimagined for today’s skin.',
      description: "Heritage, Made Modern\nIsland began with a deep respect for where we come from, and a clear vision for what skincare could be. We bring together traditional Indian ingredients like rice water and turmeric, and pair them with modern science to meet the needs of Indian skin today. Every formula is a quiet blend of culture, climate, and care - gentle, effective, and elevated. This is tradition reimagined - not as the past repeated, but as wisdom evolved.",
    },
    isImageFirst: false,
  },
];


export default function AboutPage() {
  return (
    <>
      <section className="w-full md:pt-8 pt-7 md:mb-5 mb-3">
        <div className="w-[96%] mx-auto px-0">
          <div className="relative w-full h-[300px] md:h-[45vh] rounded-[26px] overflow-hidden">
            <Image
                src="https://cdn.shopify.com/s/files/1/0723/1376/6028/files/about.webp?v=1756540006"
                alt="About us hero image"
                fill
                priority
                className="object-cover w-full h-full"
                data-ai-hint="team office"
            />
            <div className="absolute inset-0 bg-black/30 z-10 h-full flex flex-col justify-end items-start text-white p-12">
                <div className="w-full">
                     <h2 className="text-4xl md:text-[52px] font-extrabold font-headline">
                        About Island
                    </h2>
                    <div className="mt-4 border-t border-white/50 w-full"></div>
                </div>
            </div>
         </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="w-[96%] mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="md:pr-12">
                    <h2 className="text-3xl font-bold font-headline text-primary mb-6">A Note from Our Founder</h2>
                    <div className="text-foreground/80 space-y-4 leading-relaxed">
                        <p>I’ve always believed skincare should feel like care - not effort. Not about chasing perfection, but about feeling at peace in your own skin. ISLAND was born from that longing. A softer space.</p>
                        <p>Created with Sakshi, who’s walked this journey beside me, and Jinsoon, whose quiet brilliance shaped every formula, this has been a two-year labour of love. Every drop was made with intention. To bring comfort where there was discomfort. Calm where there was chaos. And a little glow, the kind that feels like you again.</p>
                        <p>Three essentials. No clutter. No overwhelm. Just skincare that meets you where you are, and gently brings your skin back home. I’ve poured so much of myself into this. And I hope, in some quiet way, it reaches you.</p>
                        <p className="mt-6">With love,</p>
                        <p>Shirley</p>
                    </div>
                </div>
                <div className="relative w-full aspect-square rounded-[26px] overflow-hidden">
                    <Image
                        src="https://www.islandbeauty.in/cdn/shop/files/founder.webp?v=1754813589"
                        alt="Founder Shirley"
                        fill
                        className="object-cover"
                        data-ai-hint="woman founder portrait"
                    />
                </div>
            </div>
        </div>
      </section>
      
       <section className="py-16 sm:py-24">
        <div className="w-[96%] mx-auto px-4">
            <div className="space-y-16">
            {aboutContent.map((promo, index) => (
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
                        <p className="mb-6 opacity-80 whitespace-pre-line">{promo.content.description}</p>
                        </Card>
                    </div>
                    </>
                ) : (
                    <>
                    <div className="md:sticky md:top-24">
                        <Card className={`p-10 rounded-[26px] ${promo.bgColor} ${promo.textColor} border-none h-auto md:h-auto lg:h-[40vh] flex flex-col justify-center`}>
                        <span className={`inline-block ${promo.tagBg} px-3 py-1 text-sm rounded-md mb-4 self-start`}>{promo.content.tag}</span>
                        <h2 className="text-4xl font-bold font-headline mb-4">{promo.content.title}</h2>
                        <p className="mb-6 opacity-80 whitespace-pre-line">{promo.content.description}</p>
                        </Card>
                    </div>
                    <div className="relative h-[60vh] rounded-[26px] overflow-hidden">
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

      <section className="pb-16 sm:pb-24">
        <div className="w-[96%] mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline text-primary">Meet the Founders</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                {founders.map((founder) => (
                    <Card key={founder.name} className="p-8 border-none shadow-none bg-muted/30 rounded-[26px]">
                        <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-6">
                            <Image 
                                src={founder.image}
                                alt={founder.name}
                                fill
                                className="object-cover"
                                data-ai-hint={founder.aiHint}
                            />
                        </div>
                        <h3 className="font-bold text-lg font-headline text-foreground">{founder.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{founder.role}</p>
                        <p className="text-foreground/80 italic">"{founder.quote}"</p>
                    </Card>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
