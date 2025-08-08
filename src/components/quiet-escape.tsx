import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function QuietEscapeSection() {
  return (
    <section className="relative w-full mt-[120px]">
      <Image
        src="https://placehold.co/1920x600.png"
        alt="Sandy beach with gentle waves"
        fill
        className="object-cover w-full h-full"
        data-ai-hint="sandy beach waves"
      />
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto py-24 sm:py-32">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            A QUIET ESCAPE, BOTTLED.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Thoughtfully made for Indian skin — where Korean simplicity meets homegrown care. 
            Inspired by everyday skin stress, changing weather, and the need to slow down. 
            Island is your skin's reset — quiet, grounded, and deeply restorative.
          </p>
          <Button asChild size="lg" className="mt-8 bg-gray-700 hover:bg-gray-800 text-white">
            <Link href="/shop">SHOP ISLAND</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
