import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package 
} from 'lucide-react';

const AdminAnalytics: React.FC = () => {
  // Mock analytics data
  const analytics = {
    revenue: {
      current: 23450.67,
      previous: 19230.45,
      change: 21.9
    },
    orders: {
      current: 156,
      previous: 134,
      change: 16.4
    },
    customers: {
      current: 1247,
      previous: 1189,
      change: 4.9
    },
    products: {
      current: 8,
      previous: 8,
      change: 0
    }
  };

  const topProducts = [
    { name: 'ABC Dry Chemical Fire Extinguisher - 5 lbs', sales: 45, revenue: 2249.55 },
    { name: 'Carbon Dioxide Fire Extinguisher - 10 lbs', sales: 32, revenue: 2879.68 },
    { name: 'Water Mist Fire Extinguisher - 6L', sales: 28, revenue: 3639.72 },
    { name: 'Wet Chemical Fire Extinguisher - 6L', sales: 22, revenue: 3519.78 },
    { name: 'Heavy Duty ABC Fire Extinguisher - 20 lbs', sales: 18, revenue: 2699.82 }
  ];

  const monthlyData = [
    { month: 'Jan', revenue: 18500, orders: 120 },
    { month: 'Feb', revenue: 21200, orders: 145 },
    { month: 'Mar', revenue: 19800, orders: 132 },
    { month: 'Apr', revenue: 23450, orders: 156 },
  ];

  const formatChange = (change: number) => {
    const isPositive = change > 0;
    return (
      <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
        <span className="text-sm font-medium">{Math.abs(change).toFixed(1)}%</span>
      </div>
    );
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="text-gray-600">Track your business performance and insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${analytics.revenue.current.toLocaleString()}</p>
            </div>
            <div className="flex flex-col items-end">
              <DollarSign className="h-8 w-8 text-green-600 mb-2" />
              {formatChange(analytics.revenue.change)}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">{analytics.orders.current}</p>
            </div>
            <div className="flex flex-col items-end">
              <ShoppingCart className="h-8 w-8 text-blue-600 mb-2" />
              {formatChange(analytics.orders.change)}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Customers</p>
              <p className="text-2xl font-bold text-gray-900">{analytics.customers.current}</p>
            </div>
            <div className="flex flex-col items-end">
              <Users className="h-8 w-8 text-purple-600 mb-2" />
              {formatChange(analytics.customers.change)}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Products</p>
              <p className="text-2xl font-bold text-gray-900">{analytics.products.current}</p>
            </div>
            <div className="flex flex-col items-end">
              <Package className="h-8 w-8 text-red-600 mb-2" />
              <div className="text-gray-500 text-sm">No change</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Monthly Performance */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Monthly Performance</h3>
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={data.month} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{data.month} 2024</p>
                  <p className="text-sm text-gray-600">{data.orders} orders</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">${data.revenue.toLocaleString()}</p>
                  <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-red-600 h-2 rounded-full" 
                      style={{ width: `${(data.revenue / 25000) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Top Selling Products</h3>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.sales} units sold</p>
                </div>
                <div className="text-right ml-4">
                  <p className="font-bold text-gray-900">${product.revenue.toFixed(2)}</p>
                  <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${(product.sales / 50) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Insights */}
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Business Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">$150.32</p>
            <p className="text-sm text-gray-600">Average Order Value</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">87%</p>
            <p className="text-sm text-gray-600">Customer Satisfaction</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">2.3</p>
            <p className="text-sm text-gray-600">Items per Order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;