import React, { useState } from 'react';
import { X, Eye } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { galleryImages } from '../mock';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A visual journey through our processes, from Sri Lankan heritage to international markets
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <Card 
              key={image.id} 
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                <p className="text-sm text-gray-600">{image.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl max-h-full">
              <button 
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Certificates Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Certificates</h3>
            <p className="text-gray-600">Quality assured through international certifications</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors duration-300 bg-white shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">ISO</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">ISO 9001:2025</h4>
                <p className="text-gray-600">Quality Management System</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-green-200 hover:border-green-400 transition-colors duration-300 bg-white shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">PHY</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Phytosanitary Certificate</h4>
                <p className="text-gray-600">Plant Health Certification</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;