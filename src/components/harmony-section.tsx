import Image from 'next/image';
import Link from 'next/link';

export function HarmonySection() {
  return (
    <section className="mt-[120px] py-20 bg-[#F6F6F3]">
      <div className="w-[96%] mx-auto text-center">
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
          Empower Your Skin Care
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight max-w-5xl mx-auto">
          The harmony between powerful{' '}
          <Link href="/shop" className="inline-block align-middle mx-2 w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="https://placehold.co/80x80.png"
              alt="oil"
              width={64}
              height={64}
              className="object-cover w-full h-full"
              data-ai-hint="oil drop"
            />
          </Link>{' '}
          high-performance ingredients{' '}
          <span className="inline-block align-middle mx-2 w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="https://placehold.co/80x80.png"
              alt="cream"
              width={64}
              height={64}
              className="object-cover w-full h-full"
              data-ai-hint="cream texture"
            />
          </span>{' '}
          and exceptionally simple{' '}
          <span className="inline-block align-middle mx-2 w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="https://placehold.co/80x80.png"
              alt="woman"
              width={64}
              height={64}
              className="object-cover w-full h-full"
              data-ai-hint="woman face"
            />
          </span>{' '}
          skincare routines.
        </h2>
      </div>
    </section>
  );
}
