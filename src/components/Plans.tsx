import React from 'react';
import { Check } from 'lucide-react';
import plansData from '../data/plans.json';

export default function Plans() {
  return (
    <div className="py-12 sm:py-20 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">Plans</h2>
          <p className="text-3xl sm:text-4xl">
            <span className="text-custom-pink">Invest</span> in your business's future
          </p>
          <p className="text-lg sm:text-xl text-gray-600 mt-4">Choose the plan that best suits your needs</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {plansData.map((plan, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className={`text-3xl sm:text-4xl font-bold ${plan.price === "Talk to me!" ? "text-custom-pink" : ""}`}>
                  {plan.price}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-custom-pink mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={plan.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-custom-pink text-white py-3 rounded-md hover:bg-opacity-90 transition-colors"
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}