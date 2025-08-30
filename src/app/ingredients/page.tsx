
import Image from 'next/image';

export default function IngredientsPage() {
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
                     <h2 className="text-4xl md:text-[52px] font-extrabold">
                        Our Ingredients
                    </h2>
                    <div className="mt-4 border-t border-white/50 w-full"></div>
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
