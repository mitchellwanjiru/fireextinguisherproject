import React from 'react'; /*default export*/
import { Link } from 'react-router-dom';   /*named export */
import { Flame, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Flame className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold">FlameGuard</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner for fire safety equipment. Protecting homes and buildings 
              with professional-grade fire extinguishers and safety solutions.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>100-101-FLAME-GUARD</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-300 hover:text-white transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>support@flameguard.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Safety First Street, Fire City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 FlameGuard. All rights reserved. | Fire Safety Equipment Specialists</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;