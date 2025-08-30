
import Image from 'next/image';

export default function IngredientsPage() {
  return (
    <>
      <section className="w-full md:pt-8 pt-7 md:mb-5 mb-3">
        <div className="w-[96%] mx-auto px-0">
          <div className="relative w-full h-[322px] md:h-[55vh] rounded-[26px] overflow-hidden">
            <Image
                src="https://placehold.co/1920x500.png"
                alt="Ingredients hero image"
                fill
                priority
                className="object-cover w-full h-full"
                data-ai-hint="herbs spices"
            />
            <div className="absolute inset-0 bg-black/30 z-10 h-full flex flex-col justify-center items-center text-center text-white">
                <div className="container mx-auto px-8 md:px-12 lg:px-24">
                    <div className="max-w-md md:max-w-lg mx-auto">
                         <h2 className="text-4xl md:text-[52px] font-extrabold">
                            Our Ingredients
                        </h2>
                        <p className="mt-4 text-lg md:text-xl">
                            Nature's finest, bottled for your skin.
                        </p>
                    </div>
                </div>
            </div>
         </div>
        </div>
      </section>
      <div className="container py-24 text-center">
        <p className="text-lg text-foreground/80">This page is under construction. Check back soon!</p>
      </div>
    </>
  );
}
