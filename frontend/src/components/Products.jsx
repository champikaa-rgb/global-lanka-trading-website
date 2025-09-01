import React from 'react';
import { CheckCircle, Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { products } from '../mock';

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the finest Sri Lankan exports, carefully selected and processed to meet international quality standards
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-white to-orange-50/30">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                    <Star className="w-3 h-3 mr-1" />
                    Premium Grade
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader className="pb-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {product.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-orange-100">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Get Quote
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Export Stats */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Our Global Export Markets</h3>
            <p className="text-orange-100">Proudly serving premium markets across worldwide with consistent quality and reliable delivery</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-2">🇦🇪</div>
              <div className="text-2xl font-bold">UAE</div>
              <div className="text-3xl font-bold text-yellow-300">100,000 KG</div>
              <div className="text-orange-200">Annually</div>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-2">🇺🇸</div>
              <div className="text-2xl font-bold">United States</div>
              <div className="text-3xl font-bold text-yellow-300">50,000 KG</div>
              <div className="text-orange-200">Annually</div>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-2">🇦🇺</div>
              <div className="text-2xl font-bold">Australia</div>
              <div className="text-3xl font-bold text-yellow-300">20,000 KG</div>
              <div className="text-orange-200">Annually</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;