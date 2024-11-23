import React from 'react';
import testimonialData from '../data/testimonials.json';

export default function Testimonials() {
  return (
    <div className="py-12 sm:py-20 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">Testimonials</h2>
        <p className="text-xl sm:text-2xl text-center mb-12 sm:mb-16">It's not just hype!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image_url}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">{testimonial.quote}</p>
              <div className="mt-4 flex text-custom-pink">
                {'★'.repeat(5)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}