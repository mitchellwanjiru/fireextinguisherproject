import { Product } from '../contexts/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'ABC Dry Chemical Fire Extinguisher - 5 lbs',
    price: 49.99,
    image: 'https://images.pexels.com/photos/6249523/pexels-photo-6249523.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Multi-purpose fire extinguisher for Class A, B, and C fires. Perfect for homes and offices.',
    type: 'ABC Dry Chemical',
    weight: '5 lbs',
    rating: 4.8,
    inStock: true
  },
  {
    id: '2',
    name: 'Carbon Dioxide Fire Extinguisher - 10 lbs',
    price: 89.99,
    image: 'https://images.pexels.com/photos/6249523/pexels-photo-6249523.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Clean agent extinguisher ideal for electrical fires and sensitive equipment areas.',
    type: 'Carbon Dioxide',
    weight: '10 lbs',
    rating: 4.6,
    inStock: true
  },
  {
    id: '3',
    name: 'Water Mist Fire Extinguisher - 6L',
    price: 129.99,
    image: 'https://images.pexels.com/photos/6249523/pexels-photo-6249523.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Environmentally friendly water mist technology for Class A and F fires.',
    type: 'Water Mist',
    weight: '6 Liters',
    rating: 4.7,
    inStock: true
  },
  {
    id: '4',
    name: 'Foam Fire Extinguisher - 9L',
    price: 99.99,
    image: 'https://images.pexels.com/photos/6249523/pexels-photo-6249523.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'AFFF foam extinguisher for Class A and B fires, excellent for flammable liquids.',
    type: 'Foam (AFFF)',
    weight: '9 Liters',
    rating: 4.5,
    inStock: false
  },
  {
    id: '5',
    name: 'Compact ABC Fire Extinguisher - 2.5 lbs',
    price: 29.99,
    image: 'https://images.pexels.com/photos/6249523/pexels-photo-6249523.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Compact size perfect for vehicles, boats, and small spaces.',
    type: 'ABC Dry Chemical',
    weight: '2.5 lbs',
    rating: 4.4,
    inStock: true
  },
  {
    id: '6',
    name: 'Wet Chemical Fire Extinguisher - 6L',
    price: 159.99,
    image: 'https://images.pexels.com/photos/6249523/pexels-photo-6249523.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Specialized for cooking oil fires (Class F/K). Essential for commercial kitchens.',
    type: 'Wet Chemical',
    weight: '6 Liters',
    rating: 4.9,
    inStock: true
  },
  {
    id: '7',
    name: 'Heavy Duty ABC Fire Extinguisher - 20 lbs',
    price: 149.99,
    image: 'https://images.pexels.com/photos/6249523/pexels-photo-6249523.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Industrial-grade fire extinguisher for large commercial and industrial applications.',
    type: 'ABC Dry Chemical',
    weight: '20 lbs',
    rating: 4.8,
    inStock: true
  },
  {
    id: '8',
    name: 'Clean Agent Fire Extinguisher - 5 lbs',
    price: 199.99,
    image: 'https://images.pexels.com/photos/6249523/pexels-photo-6249523.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Halon alternative clean agent for protecting valuable electronics and equipment.',
    type: 'Clean Agent',
    weight: '5 lbs',
    rating: 4.7,
    inStock: true
  }
  
];