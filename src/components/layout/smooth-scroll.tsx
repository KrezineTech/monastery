'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    gsap.ticker.add((time)=>{
        lenis.raf(time * 1000)
    })
      
    gsap.ticker.lagSmoothing(0)

    requestAnimationFrame(raf);

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Fade in sections
    const sections = gsap.utils.toArray('section');
    sections.forEach((section, i) => {
        const el = section as HTMLElement;
        gsap.fromTo(el, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none',
                }
            }
        );
    });

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      ScrollTrigger.killAll();
    };
  }, []);

  return <>{children}</>;
}
