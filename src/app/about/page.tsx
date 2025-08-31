
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const founders = [
  {
    name: 'Shirley',
    role: 'Co-Founder',
    quote: "Skincare should feel like care—not effort. It's about feeling at peace in your own skin.",
    image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Rectangle_1578.webp?v=1754813589',
    aiHint: 'woman smiling'
  },
  {
    name: 'Sakshi',
    role: 'Co-Founder',
    quote: "Walking this journey, every formula became a piece of our story—a testament to quiet brilliance.",
    image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Rectangle_1579.webp?v=1754813589',
    aiHint: 'woman portrait'
  },
  {
    name: 'Jinsoon',
    role: 'Formulator',
    quote: "With quiet brilliance, we shaped every formula to bring comfort, calm, and a little glow.",
    image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Rectangle_1580.webp?v=1754813589',
    aiHint: 'woman professional'
  }
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
                     <h2 className="text-4xl md:text-[52px] font-headline font-extrabold">
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
      
      <section className="pb-16 sm:pb-24">
        <div className="w-[96%] mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="relative w-full h-[60vh] rounded-[26px] overflow-hidden">
                    <Image 
                        src="https://cdn.shopify.com/s/files/1/0723/1376/6028/files/about-1.webp?v=1754813589"
                        alt="Skincare application"
                        fill
                        className="object-cover"
                        data-ai-hint="woman applying cream"
                    />
                </div>
                <div className="relative w-full h-[60vh] rounded-[26px] overflow-hidden">
                    <Image 
                        src="https://cdn.shopify.com/s/files/1/0723/1376/6028/files/about-2.webp?v=1754813589"
                        alt="Skincare product texture"
                        fill
                        className="object-cover"
                        data-ai-hint="skincare texture"
                    />
                </div>
            </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="w-[96%] mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline text-primary">Meet the Minds Behind Island</h2>
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
