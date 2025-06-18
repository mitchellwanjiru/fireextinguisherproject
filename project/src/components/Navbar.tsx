import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Flame, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { getItemCount } = useCart();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Flame className="h-8 w-8 text-red-600 group-hover:text-red-700 transition-colors" />
            <span className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
              FlameGuard
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/products" 
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Products
            </Link>
            <Link 
              to="/faq" 
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              FAQ
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/cart" 
              className="relative p-2 text-gray-700 hover:text-red-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {getItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/profile" 
                  className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span className="font-medium">{user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-gray-700">
              <ShoppingCart className="h-6 w-6" />
              {getItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/products" 
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
              <Link 
                to="/faq" 
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
              {user ? (
                <>
                  <Link 
                    to="/profile" 
                    className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                    onClick={closeMobileMenu}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-left text-gray-700 hover:text-red-600 transition-colors font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                    onClick={closeMobileMenu}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;