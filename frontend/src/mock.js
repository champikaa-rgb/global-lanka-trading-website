// Mock data for Global Lanka Trading website

export const companyInfo = {
  name: "Global Lanka Trading Pvt Ltd",
  email: "globallankatrading2.0@gmail.com",
  website: "www.globallankatrading.com",
  phone: "+94 710574829",
  header: "Premium Products from Sri Lanka to World"
};

export const aboutUs = `We are a leading Sri Lankan export company specializing in premium products. With deep roots in Sri Lankan agricultural traditions and modern export expertise, we deliver the finest King Coconuts, spices and other organic products to discerning markets worldwide.

Founded in the heart of Sri Lanka, we combine centuries-old agricultural wisdom with modern export practices. Our commitment to quality and sustainability has made us a trusted partner for businesses across worldwide.

Every product we export carries the essence of Sri Lankan craftsmanship and the promise of uncompromising quality.`;

export const products = [
  {
    id: 1,
    title: "King Coconuts",
    description: "Fresh, Premium king coconuts known for their sweet, nutritious water and tender meat, sourced from the finest coconut gardens of Sri Lanka",
    features: [
      "100% natural",
      "Fresh harvest", 
      "Rich in electrolytes",
      "Premium grade"
    ],
    image: "https://images.unsplash.com/photo-1743947063655-30e3b4e07db7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxLaW5nJTIwY29jb251dCUyMFNyaSUyMExhbmthfGVufDB8fHx8MTc1NjcxOTMxOXww&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 2,
    title: "Sri Lankan Spices",
    description: "World-renowned Sri Lankan spices, celebrated for their rich aroma, vibrant flavor, and natural purity. Perfect for culinary creations, food processing, and global export markets.",
    features: [
      "100% Natural & Organic",
      "Rich Aroma & Flavor",
      "Authentic Sri Lankan Origin",
      "Sustainable & Eco-Friendly"
    ],
    image: "https://images.unsplash.com/photo-1588594907321-8abb3e506564?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxTcmklMjBMYW5rYW4lMjBzcGljZXM8ZW58MHx8fHwxNzU2NzE5MzI1fDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 3,
    title: "Vegetable, Fruit & Nut Preparations",
    description: "Premium-quality Sri Lankan vegetable, fruit, and nut-based food preparations, crafted to preserve natural flavor, nutrition, and authenticity. Ideal for culinary use, retail, and international export.",
    features: [
      "100% Natural & Organic",
      "Rich Aroma & Flavor", 
      "Authentic Sri Lankan Origin",
      "Wide Range of Varieties"
    ],
    image: "https://images.pexels.com/photos/18744692/pexels-photo-18744692.jpeg"
  }
];

export const exportMarkets = [
  {
    country: "UAE",
    flag: "🇦🇪",
    quantity: "100,000 KG",
    period: "Annually"
  },
  {
    country: "United States", 
    flag: "🇺🇸",
    quantity: "50,000 KG",
    period: "Annually"
  },
  {
    country: "Australia",
    flag: "🇦🇺", 
    quantity: "20,000 KG",
    period: "Annually"
  }
];

export const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1655779282200-2b4d3d3bdc53?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMGNvY29udXQlMjBwbGFudGF0aW9ufGVufDB8fHx8MTc1NjcxOTI4Nnww&ixlib=rb-4.1.0&q=85",
    title: "Coconut Plantation",
    description: "Lush coconut plantations across Sri Lanka"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1586193804147-64d5c02ef9c1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxTcmklMjBMYW5rYSUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3NTY3MTkyOTN8MA&ixlib=rb-4.1.0&q=85",
    title: "Tea Plantations",
    description: "World-famous Ceylon tea gardens"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1621358670052-d34a786a9385?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxTcmklMjBMYW5rYSUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3NTY3MTkyOTN8MA&ixlib=rb-4.1.0&q=85",
    title: "Cultural Heritage",
    description: "Traditional Sri Lankan village life"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1743947063884-6a69a9b86896?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxLaW5nJTIwY29jb251dCUyMFNyaSUyMExhbmthfGVufDB8fHx8MTc1NjcxOTMxOXww&ixlib=rb-4.1.0&q=85",
    title: "King Coconuts",
    description: "Fresh King Coconuts ready for export"
  }
];

export const certificates = [
  {
    id: 1,
    name: "ISO 9001:2025",
    description: "Quality Management System"
  },
  {
    id: 2,
    name: "Phytosanitary Certificate", 
    description: "Plant Health Certification"
  }
];

// Mock form submission
export const submitContactForm = async (formData) => {
  return new Promise((resolve) => {
    console.log('Mock form submission:', formData);
    setTimeout(() => {
      resolve({ success: true, message: 'Thank you for your inquiry! We will get back to you soon.' });
    }, 1000);
  });
};