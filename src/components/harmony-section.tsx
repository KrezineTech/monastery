import Image from 'next/image';
import Link from 'next/link';

export function HarmonySection() {
  return (
    <section className="mt-[120px] py-20 bg-[#F6F6F3]">
      <div className="w-[96%] mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm text-primary mb-4">Empower Your Skin care</p>
          <h2 className="text-4xl font-serif text-primary leading-snug">
            The harmony between powerful{' '}
            <span className="inline-block align-middle -mt-2 mx-1">
              <Image
                src="https://cdn.shopify.com/s/files/1/0723/1376/6028/files/WEBSITE_REVAMP_DESIGNS-20.webp?v=1754619697"
                alt="ingredient texture"
                width={60}
                height={60}
                className="rounded-full"
                data-ai-hint="pink texture"
              />
            </span>{' '}
            high-performance ingredients and <br/> exceptionally simple{' '}
            <span className="inline-block align-middle -mt-2 mx-1">
              <Image
                src="https://cdn.shopify.com/s/files/1/0723/1376/6028/files/WEBSITE_REVAMP_DESIGNS-21.webp?v=1754619697"
                alt="cream texture"
                width={60}
                height={60}
                className="rounded-full"
                data-ai-hint="cream texture"
              />
            </span>{' '}
            <span className="inline-block align-middle -mt-2 mx-1">
              <Image
                src="https://cdn.shopify.com/s/files/1/0723/1376/6028/files/WEBSITE_REVAMP_DESIGNS-22.webp?v=1754619697"
                alt="woman applying cream"
                width={60}
                height={60}
                className="rounded-full"
                data-ai-hint="woman skincare"
              />
            </span>{' '}
            <Link href="/shop" className="inline-block align-middle -mt-2 mx-1">
                <Image
                    src="https://cdn.shopify.com/s/files/1/0723/1376/6028/files/WEBSITE_REVAMP_DESIGNS-23.webp?v=1754619697"
                    alt="skincare routine"
                    width={60}
                    height={60}
                    className="rounded-full"
                    data-ai-hint="skincare routine"
                />
            </Link>
            skincare routines.
          </h2>
        </div>
      </div>
    </section>
  );
}
