import React, { useState } from 'react';
import { Menu, X, Globe, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        {/* Top Bar */}
        <div className="flex justify-between items-center text-white text-sm mb-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>globallankatrading2.0@gmail.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+94 710574829</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Globe className="w-4 h-4" />
            <span>www.globallankatrading.com</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex justify-between items-center">
          <div className="text-white">
            <h1 className="text-2xl font-bold">Global Lanka Trading</h1>
            <p className="text-sm opacity-90">Premium Products from Sri Lanka to World</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-yellow-200 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-yellow-200 transition-colors font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-white hover:text-yellow-200 transition-colors font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-yellow-200 transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-yellow-200 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden text-white hover:text-yellow-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-2 mt-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-yellow-200 transition-colors font-medium py-2 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-yellow-200 transition-colors font-medium py-2 text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-white hover:text-yellow-200 transition-colors font-medium py-2 text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-white hover:text-yellow-200 transition-colors font-medium py-2 text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-yellow-200 transition-colors font-medium py-2 text-left"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;