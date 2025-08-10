import Image from 'next/image';
import Link from 'next/link';

export function HarmonySection() {
  return (
    <section className="mt-[120px] py-20 bg-[#F6F6F3]">
      <div className="w-[96%] mx-auto text-center">
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
          Empower Your Skin Care
        </p>
        <h2 className="text-[36px] font-bold text-primary leading-tight max-w-5xl mx-auto">
          The harmony between powerful{' '}
          <Link href="/shop" className="inline-block align-middle mx-2 w-12 h-12">
            <Image
              src="https://placehold.co/48x48.png"
              alt="oil"
              width={48}
              height={48}
              className="object-cover rounded-full"
              data-ai-hint="oil drop"
            />
          </Link>{' '}
          high-performance ingredients and exceptionally simple{' '}
          <Link href="/shop" className="inline-block align-middle mx-2 w-12 h-12">
            <Image
              src="https://placehold.co/48x48.png"
              alt="cream"
              width={48}
              height={48}
              className="object-cover rounded-full"
              data-ai-hint="cream texture"
            />
          </Link>{' '}
          <Link href="/shop" className="inline-block align-middle mx-2 w-12 h-12">
            <Image
              src="https://placehold.co/48x48.png"
              alt="woman"
              width={48}
              height={48}
              className="object-cover rounded-full"
              data-ai-hint="woman face"
            />
          </Link>{' '}
          skincare routines.
        </h2>
      </div>
    </section>
  );
}
