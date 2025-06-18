import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqData: FAQItem[] = [
    {
      id: '1',
      question: 'What type of fire extinguisher do I need for my home?',
      answer: 'For most homes, an ABC dry chemical fire extinguisher is recommended as it can handle Class A (ordinary combustibles), Class B (flammable liquids), and Class C (electrical) fires. A 5-10 lb extinguisher is typically sufficient for residential use. Consider placing one in the kitchen, garage, and main living areas.',
      category: 'selection'
    },
    {
      id: '2',
      question: 'How often should I inspect my fire extinguisher?',
      answer: 'You should visually inspect your fire extinguisher monthly to check the pressure gauge, ensure the pin and tamper seal are intact, and verify there is no physical damage. Professional inspection and maintenance should be performed annually by a certified technician.',
      category: 'maintenance'
    },
    {
      id: '3',
      question: 'What is the PASS technique?',
      answer: 'PASS is the proper technique for using a fire extinguisher: Pull the pin, Aim the nozzle at the base of the fire, Squeeze the handle, and Sweep from side to side. Always maintain a safe distance of 6-8 feet from the fire and ensure you have an escape route.',
      category: 'usage'
    },
    {
      id: '4',
      question: 'How long do fire extinguishers last?',
      answer: 'Most fire extinguishers have a lifespan of 10-12 years when properly maintained. However, the extinguishing agent may need to be recharged every 6 years for dry chemical extinguishers, or after any use. Always check the manufacturer\'s guidelines for your specific model.',
      category: 'maintenance'
    },
    {
      id: '5',
      question: 'Can I use a fire extinguisher on a grease fire?',
      answer: 'Never use water-based extinguishers on grease fires as this can spread the fire. Use a Class K wet chemical extinguisher specifically designed for cooking oils and fats, or a multi-purpose ABC extinguisher. For small grease fires, you can also turn off the heat source and cover with a lid.',
      category: 'usage'
    },
    {
      id: '6',
      question: 'Where should I place fire extinguishers in my building?',
      answer: 'Place extinguishers near exits, in easily accessible locations, and away from potential fire hazards. Mount them 3.5-5 feet from the floor. Key locations include kitchens, garages, workshops, near fireplaces, and on each floor of multi-story buildings. Ensure they are visible and not blocked by furniture.',
      category: 'installation'
    },
    {
      id: '7',
      question: 'What\'s the difference between ABC and CO2 extinguishers?',
      answer: 'ABC dry chemical extinguishers work on most common fires and leave a residue that needs cleanup. CO2 extinguishers are clean agents that leave no residue, making them ideal for electrical equipment and sensitive electronics, but they only work on Class B and C fires.',
      category: 'selection'
    },
    {
      id: '8',
      question: 'Do you offer installation services?',
      answer: 'While we don\'t provide installation services directly, we can recommend certified fire safety professionals in your area. Most fire extinguishers come with mounting brackets and can be easily installed following the included instructions.',
      category: 'services'
    },
    {
      id: '9',
      question: 'What should I do after using a fire extinguisher?',
      answer: 'After using any fire extinguisher, even partially, it must be recharged or replaced immediately. Contact a certified fire equipment service company for recharging. Also, ensure the fire is completely out and call the fire department to inspect the area.',
      category: 'maintenance'
    },
    {
      id: '10',
      question: 'Are your fire extinguishers certified?',
      answer: 'Yes, all our fire extinguishers meet or exceed industry standards and are certified by recognized testing laboratories such as UL (Underwriters Laboratories). Each unit comes with proper certification documentation and warranty information.',
      category: 'certification'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Questions' },
    { value: 'selection', label: 'Product Selection' },
    { value: 'usage', label: 'Usage & Safety' },
    { value: 'maintenance', label: 'Maintenance' },
    { value: 'installation', label: 'Installation' },
    { value: 'services', label: 'Services' },
    { value: 'certification', label: 'Certification' }
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <HelpCircle className="h-8 w-8 text-red-600" />
            <h1 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about fire safety equipment and fire extinguishers. 
            Can't find what you're looking for? Contact our fire safety experts.
          </p>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-medium text-gray-900 pr-4">
                  {item.question}
                </h3>
                {openItems.includes(item.id) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(item.id) && (
                <div className="px-6 pb-4">
                  <div className="border-t pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-red-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-red-100 mb-6">
            Our fire safety experts are here to help you choose the right equipment for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1-800-FLAME-GUARD"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call 0790-FLAME-GUARD
            </a>
            <a
              href="mailto:support@flameguard.com"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;