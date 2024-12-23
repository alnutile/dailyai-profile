import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to <span className="text-custom-pink">Transform Your Business</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">Let's chat about your automation goals!</p>
          
          <div className="space-y-4">
            <a 
              href="https://calendly.com/alfrednutile/free-intro-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-custom-pink text-white px-6 sm:px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Book a 15 min call
            </a>
            <p className="text-custom-pink">It's 100% free</p>
          </div>

          <div className="pt-12 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <p className="text-gray-600">© Copyright 2024 Alfred Nutile</p>
                <a href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
                <a href="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
              </div>
              <div className="flex space-x-6">
                <a 
                  href="https://www.linkedin.com/in/alfrednutile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://x.com/alnutile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}