import React from 'react';

export default function Hero() {
  return (
    <div className="bg-gray-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Automate Your Workflows with{' '}
          <span className="text-custom-pink">Proven AI-Driven Solutions</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Book a FREE introductory call. In just fifteen minutes, you can tell me about your business goals
          and I'll know if I can help you automate tasks that free up your team's time.
        </p>
        <div className="mt-8 sm:mt-10">
          <a 
            href="https://calendly.com/alfrednutile/free-intro-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-custom-pink text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Book a 15 min call
          </a>
          <p className="mt-4 text-custom-pink font-medium">It's 100% free</p>
        </div>
      </div>
    </div>
  );
}