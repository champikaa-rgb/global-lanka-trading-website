# Global Lanka Trading - Export Company Website

A beautiful, cultural & vibrant website for Global Lanka Trading Pvt Ltd, showcasing premium Sri Lankan exports including King Coconuts, spices, and organic products.

## 🌟 Features

- **Cultural & Vibrant Design** - Orange, red, and yellow color scheme representing Sri Lankan heritage
- **Premium Product Showcase** - King Coconuts, Sri Lankan Spices, Vegetable/Fruit/Nut Preparations
- **Professional Gallery** - Authentic Sri Lankan images showcasing culture and products
- **Contact Form** - Functional contact form with validation (currently shows success message)
- **Responsive Design** - Works perfectly on desktop and mobile devices
- **Smooth Navigation** - Sticky header with smooth scroll to sections
- **Export Statistics** - Prominently displays global export data (UAE, USA, Australia)

## 🏗️ Technology Stack

- **Frontend**: React 19.0.0 + Tailwind CSS + Shadcn UI Components
- **Backend**: FastAPI + MongoDB (optional - frontend works standalone)
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with custom animations and hover effects

## 🚀 Quick Start

### Frontend Only (Recommended for static hosting)

```bash
cd frontend
yarn install
yarn start
```

The website will be available at `http://localhost:3000`

### Full Stack (with backend)

```bash
# Backend
cd backend
pip install -r requirements.txt
python -m uvicorn server:app --host 0.0.0.0 --port 8001

# Frontend
cd frontend
yarn install
yarn start
```

## 📁 Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/           # Shadcn UI components
│   │   │   ├── Header.jsx    # Navigation header
│   │   │   ├── Hero.jsx      # Hero section with coconut plantation background
│   │   │   ├── About.jsx     # Company information
│   │   │   ├── Products.jsx  # Product showcase
│   │   │   ├── Gallery.jsx   # Image gallery and certificates
│   │   │   ├── Contact.jsx   # Contact form
│   │   │   └── Footer.jsx    # Footer with company info
│   │   ├── mock.js          # Mock data for all content
│   │   ├── App.js           # Main app component
│   │   └── App.css          # Custom styles and animations
│   ├── package.json
│   └── tailwind.config.js
├── backend/
│   ├── server.py            # FastAPI server
│   ├── requirements.txt     # Python dependencies
│   └── .env                 # Environment variables
└── README.md
```

## 🎨 Design Features

- **Sri Lankan Cultural Colors**: Orange, red, yellow gradient themes
- **Premium Product Images**: High-quality images of King Coconuts and spices
- **Professional Layout**: Clean sections with proper spacing
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Mobile Responsive**: Optimized for all device sizes

## 📧 Company Information

- **Company**: Global Lanka Trading Pvt Ltd
- **Email**: globallankatrading2.0@gmail.com
- **Phone**: +94 710574829
- **Website**: www.globallankatrading.com

## 🌍 Export Markets

- **UAE**: 100,000 KG annually
- **United States**: 50,000 KG annually  
- **Australia**: 20,000 KG annually

## 📜 Certificates

- ISO 9001:2025 - Quality Management System
- Phytosanitary Certificate - Plant Health Certification

## 🚀 Deployment Options

### Static Hosting (Frontend Only)
- **Netlify**: Drag and drop the `frontend/build` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Push to GitHub and enable Pages

### Full Stack Hosting
- **Railway**: Connect GitHub repository
- **Heroku**: Deploy with Procfile
- **DigitalOcean**: Use App Platform

## 📝 Customization

All content is stored in `/frontend/src/mock.js` - you can easily modify:
- Company information
- Product details
- Gallery images
- Export market data
- Contact information

## 🛠️ Development

The project uses modern React with functional components and hooks. Styling is done with Tailwind CSS and Shadcn UI components for a professional look.

### Adding New Sections
1. Create component in `/frontend/src/components/`
2. Import and add to `App.js`
3. Update navigation in `Header.jsx`

### Modifying Colors
Update the gradient and color schemes in:
- `tailwind.config.js` for theme colors
- `App.css` for custom styles
- Individual components for specific styling

## 🎯 Future Enhancements

- Email integration for contact form
- Product catalog with detailed pages
- Multi-language support (Sinhala/Tamil/English)
- Online ordering system
- Customer testimonials section
- Blog/news section

## 📞 Support

For any questions or customizations, contact the development team or refer to the component documentation in the code.

---

**Made with ❤️ for Global Lanka Trading Pvt Ltd**  
*Proudly showcasing Sri Lankan heritage and premium exports*
