'use client';

import { useAuth } from '@/components/auth-provider';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Loader, ArrowLeft } from 'lucide-react';

export default function OrdersPage() {
  const { customer, isLoading } = useAuth();
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

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold">My Orders</h1>
        </div>

        <div className="bg-background rounded-lg border p-8">
          {customer.orders && customer.orders.edges && customer.orders.edges.length > 0 ? (
            <div className="space-y-4">
              {customer.orders.edges.map((order) => (
                <div key={order.node.id} className="border rounded-lg p-6 hover:bg-muted/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">Order #{order.node.orderNumber}</h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(order.node.processedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">
                        {order.node.totalPriceV2.currencyCode === 'INR' ? '₹' : '$'}
                        {order.node.totalPriceV2.amount}
                      </p>
                      <p className="text-sm text-muted-foreground">{order.node.totalPriceV2.currencyCode}</p>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground mb-3">Order Name: {order.node.name}</p>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">No orders yet</p>
              <Button onClick={() => router.push('/shop')}>
                Start Shopping
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
