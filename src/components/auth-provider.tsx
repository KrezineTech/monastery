'use client';

import React, { createContext, useContext } from 'react';
import { useShopifyAuth, UseShopifyAuthReturn } from '@/hooks/use-shopify-auth';

const AuthContext = createContext<UseShopifyAuthReturn | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useShopifyAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
