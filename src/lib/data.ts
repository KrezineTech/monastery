
import type { Product } from '@/lib/types';

export const allProducts: Product[] = [
    { 
      id: '1', 
      name: 'Purity in a Drop Toner & Essence', 
      price: 999.00,
      originalPrice: 1199.00,
      image: 'https://placehold.co/800x1000.png',
      videoUrl: 'https://cdn.shopify.com/videos/c/o/v/c319ba0f716a4c01b43fccbf4232aa13.mp4',
      gallery: [
        'https://placehold.co/800x1000.png',
        'https://placehold.co/800x1001.png',
        'https://placehold.co/800x1002.png',
        'https://placehold.co/800x1003.png',
        'https://placehold.co/800x1004.png',
        'https://placehold.co/800x1005.png',
        'https://placehold.co/800x1006.png',
        'https://placehold.co/800x1007.png',
        'https://placehold.co/800x1008.png',
      ],
      aiHint: 'toner essence bottle', 
      category: 'essence', 
      description: `THE RESET RITUAL

A gentle reset for your skin. This two-in-one toner and essence is your first step to clear, balanced skin - sweeping away impurities while hydrating deeply. The water-light formula is infused with rice water, glycolic acid, turmeric, and salicylic acid to visibly refine pores, even tone, and leave your skin feeling calm and softly radiant.

It melts in like a whisper, prepping your skin without any sting or stickiness.`,
      volumes: ['100ML'],
    },
    { 
      id: '2', 
      name: 'DewDrop Evenness Boost Serum', 
      price: 999.00, 
      originalPrice: 1299.00, 
      image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Serum_copy.webp?v=1754934890',
      videoUrl: 'https://cdn.shopify.com/videos/c/o/v/b3c5d81c41e84fa0a5c9bb3c2502cdb2.mp4',
      gallery: [
        'https://placehold.co/800x1000.png',
        'https://placehold.co/800x1001.png',
        'https://placehold.co/800x1002.png',
        'https://placehold.co/800x1003.png',
        'https://placehold.co/800x1004.png',
        'https://placehold.co/800x1005.png',
        'https://placehold.co/800x1006.png',
        'https://placehold.co/800x1007.png',
        'https://placehold.co/800x1008.png',
      ],
      aiHint: 'serum bottle', 
      category: 'serum', 
      description: `THE GLOW BALANCER

Your skin, only smoother. This daily serum primes, hydrates, and visibly evens tone in one silky step. Powered by 50% Korean rice water, Niacinamide, Turmeric, and Hyaluronic acid, the lightweight gel-serum texture sinks in instantly - softening the look of pores and leaving a dewy, balanced finish.

Perfect under makeup or on bare skin. No greasiness, just glow.`,
      volumes: ['100ML'],
    },
    { 
      id: '3', 
      name: 'Morning Dew Moisturizer with SPF 15', 
      price: 1300.00, 
      image: 'https://cdn.shopify.com/s/files/1/0723/1376/6028/files/Untitled-1.webp?v=1754914138',
      videoUrl: 'https://cdn.shopify.com/videos/c/o/v/8be0e8a971384750a438fe3622c65683.mp4',
      gallery: [
        'https://placehold.co/800x1000.png',
        'https://placehold.co/800x1001.png',
        'https://placehold.co/800x1002.png',
        'https://placehold.co/800x1003.png',
        'https://placehold.co/800x1004.png',
        'https://placehold.co/800x1005.png',
        'https://placehold.co/800x1006.png',
        'https://placehold.co/800x1007.png',
        'https://placehold.co/800x1008.png',
      ],
      aiHint: 'moisturizer bottle', 
      category: 'moisturizer', 
      description: 'A daily moisturizer that provides essential hydration and sun protection. Its non-greasy formula leaves the skin feeling fresh and dewy, perfect for a morning skincare routine.',
      volumes: ['250ML', '300ML', '500ML'],
    },
    { 
      id: '4', 
      name: 'Yusuru Radiance Combo Set', 
      price: 2490.00, 
      image: 'https://placehold.co/800x1000.png',
      gallery: [
        'https://placehold.co/800x1000.png',
        'https://placehold.co/800x1001.png',
        'https://placehold.co/800x1002.png',
        'https://placehold.co/800x1003.png',
        'https://placehold.co/800x1004.png',
        'https://placehold.co/800x1005.png',
        'https://placehold.co/800x1006.png',
        'https://placehold.co/800x1007.png',
        'https://placehold.co/800x1008.png',
      ],
      aiHint: 'skincare combo set', 
      category: 'set', 
      description: 'The ultimate radiance-boosting collection. This set includes our best-selling products to cleanse, tone, treat, and moisturize, revealing a brighter, more luminous complexion.',
      volumes: ['250ML', '300ML', '500ML'],
    },
];
