
'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { CartItem, Product } from '@/lib/types';
import { toast } from './use-toast';
import { createContext, useContext, useRef, type ReactNode } from 'react';

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const getDefaultInitialState = () => ({
  cart: [],
  totalItems: 0,
  subtotal: 0,
});

export const createCartStore = (initState: Partial<CartState> = {}) => {
    return create<CartState>()(
      persist(
        (set, get) => ({
          ...getDefaultInitialState(),
          ...initState,
          addToCart: (product) => {
            const { cart } = get();
            const existingProduct = cart.find((p) => p.id === product.id);
            if (existingProduct) {
              set(state => {
                  const newCart = state.cart.map(p =>
                      p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                  );
                  const newTotalItems = newCart.reduce((acc, item) => acc + item.quantity, 0);
                  const newSubtotal = newCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
                  return { cart: newCart, totalItems: newTotalItems, subtotal: newSubtotal };
              });
            } else {
              set(state => {
                  const newCart = [...state.cart, { ...product, quantity: 1 }];
                  const newTotalItems = newCart.reduce((acc, item) => acc + item.quantity, 0);
                  const newSubtotal = newCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
                  return { cart: newCart, totalItems: newTotalItems, subtotal: newSubtotal };
              });
            }
            toast({ title: `Added ${product.name} to cart.` });
          },
          removeFromCart: (productId) => {
            set(state => {
              const newCart = state.cart.filter((p) => p.id !== productId);
              const newTotalItems = newCart.reduce((acc, item) => acc + item.quantity, 0);
              const newSubtotal = newCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
              return { cart: newCart, totalItems: newTotalItems, subtotal: newSubtotal };
            });
            const product = get().cart.find(p => p.id === productId);
            if (product) {
              toast({ title: `Removed ${product.name} from cart.`, variant: 'destructive' });
            }
          },
          updateQuantity: (productId, quantity) => {
            if (quantity <= 0) {
              get().removeFromCart(productId);
              return;
            }
            set(state => {
              const newCart = state.cart.map(p => p.id === productId ? { ...p, quantity } : p);
              const newTotalItems = newCart.reduce((acc, item) => acc + item.quantity, 0);
              const newSubtotal = newCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
              return { cart: newCart, totalItems: newTotalItems, subtotal: newSubtotal };
            });
          },
          clearCart: () => {
            set({ cart: [], totalItems: 0, subtotal: 0 });
            toast({ title: 'Cart cleared.', variant: 'destructive' });
          },
        }),
        {
          name: 'cart-storage',
          storage: createJSONStorage(() => localStorage),
          onRehydrateStorage: () => (state) => {
            if (state) {
              const newTotalItems = state.cart.reduce((acc, item) => acc + item.quantity, 0);
              const newSubtotal = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
              state.totalItems = newTotalItems;
              state.subtotal = newSubtotal;
            }
          }
        }
      )
    )
}

export type CartStore = ReturnType<typeof createCartStore>;
export const CartContext = createContext<CartStore | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<CartStore>();
  if (!storeRef.current) {
    storeRef.current = createCartStore();
  }
  return (
    <CartContext.Provider value={storeRef.current}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
    const cartStoreContext = useContext(CartContext);

    if(!cartStoreContext) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return cartStoreContext;
}
