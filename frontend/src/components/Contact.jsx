import React, { useState } from 'react';
import { Mail, Phone, Globe, MapPin, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { submitContactForm } from '../mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitContactForm(formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        country: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-b from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-0 shadow-2xl bg-white">
            <CardContent className="p-12">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
              <p className="text-gray-600 mb-8">
                Your inquiry has been received. Our team will get back to you within 24 hours.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
              >
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience premium Sri Lankan products? Contact us for quotes, samples, or any inquiries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Card className="border-0 shadow-xl bg-white mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">globallankatrading2.0@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+94 710574829</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Website</p>
                    <p className="text-gray-600">www.globallankatrading.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Sri Lanka</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-gray-700 font-medium">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="country" className="text-gray-700 font-medium">Country</Label>
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="mt-1 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Your country"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 border-gray-300 focus:border-orange-500 focus:ring-orange-500 resize-none"
                    placeholder="Tell us about your requirements, quantities needed, or any questions..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;