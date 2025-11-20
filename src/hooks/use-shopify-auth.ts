'use client';

import { useCallback, useEffect, useState } from 'react';
import { customerAccessTokenCreate, getCustomer, customerCreate, Customer } from '@/lib/shopify-auth';

const TOKEN_KEY = 'shopify_customer_token';
const EXPIRES_KEY = 'shopify_customer_token_expires';

export interface UseShopifyAuthReturn {
  customer: Customer | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (firstName: string, lastName: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshCustomer: () => Promise<void>;
}

export function useShopifyAuth(): UseShopifyAuthReturn {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check if token is still valid
  const isTokenValid = useCallback(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    const expires = localStorage.getItem(EXPIRES_KEY);

    if (!token || !expires) return false;

    return new Date(expires) > new Date();
  }, []);

  // Load customer on mount if token exists
  useEffect(() => {
    const loadCustomer = async () => {
      setIsLoading(true);
      setError(null);

      const token = localStorage.getItem(TOKEN_KEY);

      if (!token || !isTokenValid()) {
        setCustomer(null);
        setIsLoading(false);
        return;
      }

      try {
        const customerData = await getCustomer(token);
        setCustomer(customerData);
      } catch (err) {
        console.error('Failed to load customer:', err);
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(EXPIRES_KEY);
        setCustomer(null);
        setError(err instanceof Error ? err.message : 'Failed to load customer');
      } finally {
        setIsLoading(false);
      }
    };

    loadCustomer();
  }, [isTokenValid]);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const { accessToken, expiresAt } = await customerAccessTokenCreate(email, password);
      localStorage.setItem(TOKEN_KEY, accessToken);
      localStorage.setItem(EXPIRES_KEY, expiresAt);

      const customerData = await getCustomer(accessToken);
      setCustomer(customerData);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Login failed';
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signup = useCallback(
    async (firstName: string, lastName: string, email: string, password: string) => {
      setIsLoading(true);
      setError(null);

      try {
        const { customer: newCustomer, userErrors } = await customerCreate(firstName, lastName, email, password);

        if (userErrors?.length) {
          throw new Error(userErrors[0].message);
        }

        // Auto-login after signup
        await login(email, password);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Signup failed';
        setError(message);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [login]
  );

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(EXPIRES_KEY);
    setCustomer(null);
    setError(null);
  }, []);

  const refreshCustomer = useCallback(async () => {
    const token = localStorage.getItem(TOKEN_KEY);

    if (!token) {
      setCustomer(null);
      return;
    }

    try {
      const customerData = await getCustomer(token);
      setCustomer(customerData);
    } catch (err) {
      console.error('Failed to refresh customer:', err);
      logout();
    }
  }, [logout]);

  return {
    customer,
    isLoading,
    isAuthenticated: !!customer,
    error,
    login,
    signup,
    logout,
    refreshCustomer,
  };
}
