import Image from 'next/image';
import Link from 'next/link';

export function HarmonySection() {
  return (
    <section className="w-full mt-[120px]">
        <div className="w-[96%] mx-auto py-20 text-foreground/80 rounded-[26px] border border-border/40 bg-[#F6F6F3]/80 backdrop-blur-lg px-8 text-center">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Empower Your Skin Care
            </p>
            <h2 className="text-[36px] font-bold text-primary leading-tight mx-auto max-w-4xl">
            The harmony between powerful{' '}
            <Link href="/shop" className="inline-block align-middle mx-2">
                <Image
                src="https://placehold.co/48x48.png"
                alt="oil"
                width={48}
                height={48}
                className="object-cover rounded-full"
                data-ai-hint="oil drop"
                />
            </Link>{' '}
            high-performance ingredients{' '}
            <Link href="/shop" className="inline-block align-middle mx-2">
                <Image
                src="https://placehold.co/48x48.png"
                alt="cream"
                width={48}
                height={48}
                className="object-cover rounded-full"
                data-ai-hint="cream texture"
                />
            </Link>{' '}
            and exceptionally simple{' '}
            <Link href="/shop" className="inline-block align-middle mx-2">
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
