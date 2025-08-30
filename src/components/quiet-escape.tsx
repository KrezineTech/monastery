import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function QuietEscapeSection() {
  return (
    <section className="w-full mt-[120px]">
      <div className="w-[96%] mx-auto relative h-[400px] rounded-[26px] overflow-hidden">
        <Image
          src="https://cdn.shopify.com/s/files/1/0723/1376/6028/files/breaker-100.jpg?v=1754620531"
          alt="Sandy beach with gentle waves"
          fill
          quality={100}
          className="object-cover w-full h-full"
          data-ai-hint="sandy beach waves"
        />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold font-headline tracking-tight text-gray-800 sm:text-4xl">
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
      </div>
    </section>
  );
}
