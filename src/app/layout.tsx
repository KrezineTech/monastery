import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SmoothScroll } from '@/components/layout/smooth-scroll';

export const metadata: Metadata = {
  title: 'Glowver',
  description: 'Natural skincare for a radiant glow.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <SmoothScroll>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 w-[96%] mx-auto">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
        <Toaster />
      </body>
    </html>
  );
}
