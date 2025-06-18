import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Shield, Truck, Award } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-red-600 hover:text-red-700 font-medium">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to="/products" 
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8">
            {/* Product Image */}
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {product.type}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 ml-2">({product.rating})</span>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Product Details */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Product Details</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium">{product.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weight:</span>
                    <span className="font-medium">{product.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Availability:</span>
                    <span className={`font-medium ${
                      product.inStock ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price and Add to Cart */}
              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                </div>
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-lg font-semibold text-lg transition-colors ${
                    product.inStock
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">Certified</h4>
                  <p className="text-sm text-gray-600">Industry Standards</p>
                </div>
                <div className="text-center">
                  <Truck className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">Fast Shipping</h4>
                  <p className="text-sm text-gray-600">2-3 Business Days</p>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">Warranty</h4>
                  <p className="text-sm text-gray-600">2 Year Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Safety Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Read all instructions before use</li>
                <li>• Inspect monthly for damage or corrosion</li>
                <li>• Professional inspection required annually</li>
                <li>• Store in easily accessible location</li>
                <li>• Keep away from extreme temperatures</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Usage Guidelines</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Follow PASS technique: Pull, Aim, Squeeze, Sweep</li>
                <li>• Maintain 6-8 feet distance from fire</li>
                <li>• Always have an escape route planned</li>
                <li>• Call fire department even after extinguishing</li>
                <li>• Never turn your back on a fire</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;