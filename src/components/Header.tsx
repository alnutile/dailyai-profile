import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const getNavLink = (section: string) => isHomePage ? `#${section}` : `/#${section}`;

  return (
    <nav className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="DailyAI.Studio" 
              className="h-8 w-auto rounded-md"
            />
            <span className="ml-2 text-xl font-bold text-custom-pink">DailyAI.Studio</span>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href={getNavLink('what-i-offer')} className="text-gray-700 hover:text-gray-900">What I offer</a>
            <a href={getNavLink('pricing')} className="text-gray-700 hover:text-gray-900">Pricing</a>
            <a href={getNavLink('testimonials')} className="text-gray-700 hover:text-gray-900">Testimonials</a>
            <a 
              href="https://calendly.com/alfrednutile/free-intro-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-custom-pink text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Book a 15 min call
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg py-2">
          <div className="flex flex-col space-y-4 px-4">
            <a 
              href={getNavLink('what-i-offer')}
              className="text-gray-700 hover:text-gray-900 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              What I offer
            </a>
            <a 
              href={getNavLink('pricing')}
              className="text-gray-700 hover:text-gray-900 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href={getNavLink('testimonials')}
              className="text-gray-700 hover:text-gray-900 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="https://calendly.com/alfrednutile/free-intro-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-custom-pink text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-center"
            >
              Book a 15 min call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}