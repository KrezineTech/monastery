
import type { Product } from '@/lib/types';

export const allProducts: Product[] = [
    { 
      id: '1', 
      name: 'Purity in a Drop Toner & Essence', 
      price: 1450.00, 
      image: 'https://placehold.co/800x1000.png',
      gallery: [
        'https://placehold.co/800x1000.png',
        'https://placehold.co/800x1000.png',
        'https://placehold.co/800x1000.png',
        'https://placehold.co/800x1000.png',
      ],
      aiHint: 'toner essence bottle', 
      category: 'essence', 
      description: 'A dual-action formula that hydrates like a toner and nourishes like an essence. It purifies pores and preps the skin to absorb serums and moisturizers more effectively, leaving it soft and supple.' 
    },
    { 
      id: '2', 
      name: 'DewDrop Evenness Boost Serum', 
      price: 999.00, 
      originalPrice: 1299.00, 
      image: 'https://placehold.co/800x1000.png',
      gallery: [
        'https://placehold.co/800x1000.png',
        'https://placehold.co/800x1000.png',
        'https://placehold.co/800x1000.png',
        'https://placehold.co/800x1000.png',
      ],
      aiHint: 'serum bottle', 
      category: 'serum', 
      description: `THE GLOW BALANCER

Your skin, only smoother. This daily serum primes, hydrates, and visibly evens tone in one silky step. Powered by 50% Korean rice water, Niacinamide, Turmeric, and Hyaluronic acid, the lightweight gel-serum texture sinks in instantly - softening the look of pores and leaving a dewy, balanced finish.

Perfect under makeup or on bare skin. No greasiness, just glow.`
    },
    { 
      id: '3', 
      name: 'Morning Dew Moisturizer with SPF 15', 
      price: 1300.00, 
      image: 'https://placehold.co/800x1000.png',
      gallery: [
        'https://placehold.co/800x1000.png',
        'https://placehold.co/800x1000.png',
        'https://placehold.co/800x1000.png',
        'https://placehold.co/800x1000.png',
      ],
      aiHint: 'moisturizer bottle', 
      category: 'moisturizer', 
      description: 'A daily moisturizer that provides essential hydration and sun protection. Its non-greasy formula leaves the skin feeling fresh and dewy, perfect for a morning skincare routine.' 
    },
    { 
      id: '4', 
      name: 'Yusuru Radiance Combo Set', 
      price: 2490.00, 
      image: 'https://placehold.co/800x1000.png',
      gallery: [
        'https://placehold.co/800x1000.png',
        'https://placehold.co/800x1000.png',
        'https://placehold.co/800x1000.png',
        'https://placehold.co/800x1000.png',
      ],
      aiHint: 'skincare combo set', 
      category: 'set', 
      description: 'The ultimate radiance-boosting collection. This set includes our best-selling products to cleanse, tone, treat, and moisturize, revealing a brighter, more luminous complexion.' 
    },
];
