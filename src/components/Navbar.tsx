import React from 'react';
import { Brain } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-pink-500" />
            <span className="ml-2 text-xl font-bold">SmartlyTech</span>
          </div>
          <div className="flex space-x-8">
            <a href="#what-i-offer" className="text-gray-700 hover:text-gray-900">What I offer</a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-gray-900">Testimonials</a>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors">
              Book a 15 min call
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}