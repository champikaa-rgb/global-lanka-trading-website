import React from 'react';
import { ArrowRight, Star, Globe2, Leaf } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1655779282200-2b4d3d3bdc53?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMGNvY29udXQlMjBwbGFudGF0aW9ufGVufDB8fHx8MTc1NjcxOTI4Nnww&ixlib=rb-4.1.0&q=85')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm border border-orange-300/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-orange-300" />
            <span className="text-orange-100 text-sm font-medium">Proudly Sri Lankan</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Premium Products
            <span className="block text-transparent bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text">
              from Sri Lanka
            </span>
            <span className="block text-4xl md:text-5xl">to the World</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Experience the finest King Coconuts, authentic spices, and premium organic products 
            crafted with centuries-old Sri Lankan agricultural wisdom and modern export excellence.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center space-x-2 text-white">
              <Leaf className="w-5 h-5 text-green-400" />
              <span className="font-medium">100% Natural & Organic</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Globe2 className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Global Export Quality</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="font-medium">Premium Grade</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('products')}
            >
              Explore Our Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">170,000+</div>
            <div className="text-orange-200 text-sm">KG Exported Annually</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;