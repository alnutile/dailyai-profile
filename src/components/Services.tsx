import React from 'react';
import { Puzzle, BarChart, FileText, Users, Maximize, Zap } from 'lucide-react';
import servicesData from '../data/services.json';

const iconMap = {
  Puzzle,
  BarChart,
  FileText,
  Users,
  Maximize,
  Zap
};

export default function Services() {
  return (
    <div className="py-12 sm:py-20 bg-white" id="what-i-offer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-custom-pink">What I offer</h2>
        <p className="text-3xl sm:text-4xl text-center mb-12 sm:mb-16">
          I'll help you find your <span className="text-custom-pink">AI Advantage</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-xl">
                <div className="bg-white w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-custom-pink" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}