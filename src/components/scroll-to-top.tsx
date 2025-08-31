
'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScroll = () => {
    toggleVisibility();
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = winHeightPx > 0 ? (scrollPx / winHeightPx) * 100 : 0;
    setProgress(scrolled);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const circumference = 2 * Math.PI * 22; // 2 * pi * radius

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button
        onClick={scrollToTop}
        className={cn(
          'relative h-14 w-14 rounded-full bg-background p-0 text-primary shadow-lg transition-opacity duration-300 hover:bg-accent',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
        aria-label="Scroll to top"
      >
        <svg
          className="h-full w-full -rotate-90"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke="hsl(var(--border))"
            strokeWidth="3"
          />
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (progress / 100) * circumference}
            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
          />
        </svg>
        <ChevronUp className="absolute h-6 w-6" />
      </Button>
    </div>
  );
}
