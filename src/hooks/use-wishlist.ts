
'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Product } from '@/lib/types';
import { toast } from './use-toast';

interface WishlistState {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
}

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlist: [],
      addToWishlist: (product) => {
        const { wishlist } = get();
        const existingProduct = wishlist.find((p) => p.id === product.id);
        if (existingProduct) {
          // toast({ title: `${product.name} is already in the wishlist.` });
        } else {
          set({ wishlist: [...wishlist, product] });
          toast({ title: `Added ${product.name} to wishlist.` });
        }
      },
      removeFromWishlist: (productId) => {
        const { wishlist } = get();
        const product = wishlist.find(p => p.id === productId);
        set({ wishlist: wishlist.filter((p) => p.id !== productId) });
        if(product) {
          toast({ title: `Removed ${product.name} from wishlist.`, variant: 'destructive' });
        }
      },
      isWishlisted: (productId) => {
        const { wishlist } = get();
        return wishlist.some((p) => p.id === productId);
      },
    }),
    {
      name: 'wishlist-storage', 
      storage: createJSONStorage(() => localStorage), 
    }
  )
);
