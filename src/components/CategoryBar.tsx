import React from 'react';

const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Home & Garden',
  'Sports',
  'Books',
  'Toys',
  'Automotive',
  'Health',
];

export default function CategoryBar() {
  return (
    <div className="bg-gray-100 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 py-3 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              className="text-gray-600 hover:text-indigo-600 whitespace-nowrap text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}