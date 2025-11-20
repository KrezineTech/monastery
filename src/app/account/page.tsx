'use client';

import { useAuth } from '@/components/auth-provider';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Loader } from 'lucide-react';

export default function AccountPage() {
  const { customer, isLoading, logout } = useAuth();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-2xl font-bold">Not logged in</h1>
        <Button onClick={() => router.push('/login')}>Go to Login</Button>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-2xl mx-auto">
        <div className="bg-background rounded-lg border p-8">
          <h1 className="text-3xl font-bold mb-8">My Account</h1>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">First Name</p>
                  <p className="text-lg font-medium">{customer.firstName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Last Name</p>
                  <p className="text-lg font-medium">{customer.lastName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-lg font-medium">{customer.email}</p>
                </div>
                {customer.phone && (
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-lg font-medium">{customer.phone}</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
              {customer.orders && customer.orders.edges && customer.orders.edges.length > 0 ? (
                <div className="space-y-3">
                  {customer.orders.edges.map((order) => (
                    <div key={order.node.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Order #{order.node.orderNumber}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(order.node.processedAt).toLocaleDateString()}
                          </p>
                        </div>
                        <p className="font-semibold">
                          {order.node.totalPriceV2.currencyCode === 'INR' ? '₹' : '$'}
                          {order.node.totalPriceV2.amount}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No orders yet</p>
              )}
            </div>

            <div className="pt-6 border-t">
              <Button onClick={handleLogout} variant="destructive" className="w-full">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
