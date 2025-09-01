import React from 'react';
import { Award, Globe2, Leaf, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const achievements = [
    {
      icon: <Globe2 className="w-8 h-8 text-orange-500" />,
      title: "Global Reach",
      description: "Exporting to UAE, USA, Australia and expanding worldwide"
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: "Quality Certified",
      description: "ISO 9001:2025 and Phytosanitary certified products"
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-500" />,
      title: "100% Organic",
      description: "Naturally grown, sustainable farming practices"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Growing Export",
      description: "170,000+ KG exported annually with consistent growth"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">Global Lanka Trading</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the way in premium Sri Lankan exports with tradition, quality, and sustainability
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                We are a leading Sri Lankan export company specializing in premium products. With deep roots in 
                Sri Lankan agricultural traditions and modern export expertise, we deliver the finest King Coconuts, 
                spices and other organic products to discerning markets worldwide.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded in the heart of Sri Lanka, we combine centuries-old agricultural wisdom with modern export 
                practices. Our commitment to quality and sustainability has made us a trusted partner for businesses 
                across worldwide.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Every product we export carries the essence of Sri Lankan craftsmanship and the promise of 
                uncompromising quality.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1621358670052-d34a786a9385?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxTcmklMjBMYW5rYSUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3NTY3MTkyOTN8MA&ixlib=rb-4.1.0&q=85" 
                alt="Sri Lankan village" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-orange-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">25+</div>
                <div className="text-gray-600 text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;