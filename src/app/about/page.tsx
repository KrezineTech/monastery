
import Image from 'next/image';

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
                     <h2 className="text-4xl md:text-[52px] font-extrabold">
                        About Island
                    </h2>
                    <div className="mt-4 border-t border-white/50 w-full"></div>
                </div>
            </div>
         </div>
        </div>
      </section>
      <div className="container py-24 text-center">
        <h1 className="text-4xl font-bold text-primary">About Us</h1>
        <p className="mt-4 text-lg text-foreground/80">This page is under construction. Check back soon!</p>
      </div>
    </>
  );
}
