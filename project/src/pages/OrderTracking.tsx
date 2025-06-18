import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

interface OrderStatus {
  id: string;
  status: 'processing' | 'shipped' | 'delivered';
  estimatedDelivery: string;
  trackingNumber: string;
  orderDate: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
}

const OrderTracking: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<OrderStatus | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Mock order data - in real app, fetch from API
    const mockOrder: OrderStatus = {
      id: id || '',
      status: 'shipped',
      estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
      trackingNumber: 'FG-' + Math.random().toString(36).substring(2, 15).toUpperCase(),
      orderDate: new Date().toISOString(),
      items: [
        { name: 'ABC Dry Chemical Fire Extinguisher - 5 lbs', quantity: 2, price: 49.99 },
        { name: 'Carbon Dioxide Fire Extinguisher - 10 lbs', quantity: 1, price: 89.99 }
      ]
    };
    setOrder(mockOrder);
  }, [id]);

  useEffect(() => {
    if (!order) return;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const delivery = new Date(order.estimatedDelivery).getTime();
      const difference = delivery - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [order]);

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Clock className="h-6 w-6 text-yellow-600" />;
      case 'shipped':
        return <Truck className="h-6 w-6 text-blue-600" />;
      case 'delivered':
        return <CheckCircle className="h-6 w-6 text-green-600" />;
      default:
        return <Package className="h-6 w-6 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'text-yellow-600 bg-yellow-50';
      case 'shipped':
        return 'text-blue-600 bg-blue-50';
      case 'delivered':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Order Tracking</h1>
          <p className="text-gray-600 mt-2">Track your fire safety equipment delivery</p>
        </div>

        {/* Order Status Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Order #{order.id}</h2>
              <p className="text-gray-600">
                Placed on {new Date(order.orderDate).toLocaleDateString()}
              </p>
            </div>
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${getStatusColor(order.status)}`}>
              {getStatusIcon(order.status)}
              <span className="font-medium capitalize">{order.status}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Tracking Number</h3>
              <p className="text-gray-600 font-mono">{order.trackingNumber}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Estimated Delivery</h3>
              <p className="text-gray-600">
                {new Date(order.estimatedDelivery).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          {order.status !== 'delivered' && (
            <div className="bg-red-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-900 mb-4 text-center">
                Estimated Time Until Delivery
              </h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-600">{timeLeft.days}</div>
                  <div className="text-sm text-gray-600">Days</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-600">{timeLeft.hours}</div>
                  <div className="text-sm text-gray-600">Hours</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-600">{timeLeft.minutes}</div>
                  <div className="text-sm text-gray-600">Minutes</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-600">{timeLeft.seconds}</div>
                  <div className="text-sm text-gray-600">Seconds</div>
                </div>
              </div>
            </div>
          )}

          {/* Progress Timeline */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Progress</h3>
            <div className="relative">
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200"></div>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    order.status === 'processing' || order.status === 'shipped' || order.status === 'delivered'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Order Confirmed</h4>
                    <p className="text-sm text-gray-600">Your order has been received and is being processed</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    order.status === 'shipped' || order.status === 'delivered'
                      ? 'bg-green-600 text-white'
                      : order.status === 'processing'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    <Truck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Shipped</h4>
                    <p className="text-sm text-gray-600">Your order is on its way to you</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    order.status === 'delivered'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    <Package className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Delivered</h4>
                    <p className="text-sm text-gray-600">Your fire safety equipment has arrived</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h3>
          <div className="space-y-4">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                <div>
                  <h4 className="font-medium text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <span className="font-medium text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-900">Total</span>
              <span className="text-lg font-bold text-gray-900">
                ${order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;