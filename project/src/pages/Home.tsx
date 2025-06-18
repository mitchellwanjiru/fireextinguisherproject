import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Truck, Users, Award, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Protect What 
                <span className="block text-yellow-300">Matters Most</span>
              </h1>
              <p className="text-xl mb-8 text-red-100">
                Professional fire safety equipment for homes and buildings. 
                Browse our comprehensive selection of fire extinguishers and safety products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center group"
                >
                  Shop Fire Extinguishers
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/faq"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors inline-flex items-center justify-center"
                >
                  Fire Safety Guide
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src="https://images.pexels.com/photos/6249523/pexels-photo-6249523.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fire Safety Equipment"
                  className="rounded-lg shadow-2xl object-cover w-full h-96"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-gray-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6" />
                  <div>
                    <div className="font-bold">24/7 Support</div>
                    <div className="text-sm">Fire Safety Experts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FlameGuard?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the highest quality fire safety equipment 
              with exceptional service and expert support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Quality</h3>
              <p className="text-gray-600">
                All our fire extinguishers meet or exceed industry safety standards and certifications.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Truck className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and reliable shipping to get your fire safety equipment when you need it.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Our fire safety experts are available to help you choose the right equipment.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Brand</h3>
              <p className="text-gray-600">
                Over 20 years of experience protecting homes and businesses nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Protect Your Property?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait until it's too late. Browse our selection of professional fire extinguishers 
            and get the protection you need today.
          </p>
          <Link
            to="/products"
            className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center group"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;