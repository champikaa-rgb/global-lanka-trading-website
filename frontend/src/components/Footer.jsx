import React from 'react';
import { Mail, Phone, Globe, Heart, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text">
              Global Lanka Trading Pvt Ltd
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading Sri Lankan export company specializing in premium King Coconuts, 
              authentic spices, and organic products. Bringing the essence of Sri Lankan 
              craftsmanship to discerning markets worldwide.
            </p>
            <div className="flex items-center space-x-2 text-orange-300">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Proudly Sri Lankan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">globallankatrading2.0@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+94 710574829</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">www.globallankatrading.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Export Stats */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-orange-400 mb-4">Our Global Reach</h4>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">170,000+</div>
                <div className="text-gray-400 text-sm">KG Exported Annually</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-gray-400 text-sm">Export Markets</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">ISO</div>
                <div className="text-gray-400 text-sm">Certified Quality</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Global Lanka Trading Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Certified by:</span>
            <span className="text-orange-400 text-sm font-medium">ISO 9001:2025</span>
            <span className="text-green-400 text-sm font-medium">Phytosanitary</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;