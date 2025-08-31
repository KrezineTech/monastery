
'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Product } from '@/lib/types';
import { toast } from './use-toast';
import { createContext, useContext, useRef, type ReactNode } from 'react';

interface WishlistState {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
}

export const createWishlistStore = (initState: Partial<WishlistState> = {}) => {
    return create<WishlistState>()(
        persist(
          (set, get) => ({
            wishlist: [],
            ...initState,
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
}

export type WishlistStore = ReturnType<typeof createWishlistStore>
export const WishlistContext = createContext<WishlistStore | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    const storeRef = useRef<WishlistStore>();
    if (!storeRef.current) {
        storeRef.current = createWishlistStore();
    }
    return (
        <WishlistContext.Provider value={storeRef.current}>
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => {
    const wishlistStoreContext = useContext(WishlistContext);

    if(!wishlistStoreContext) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }

    return wishlistStoreContext;
}
