# OptiGenix Website

A modern, responsive e-commerce website for OptiGenix - a platform offering tailored nutrition and performance solutions for active individuals and athletes. Built with React and Vite, featuring a comprehensive product catalog.

## 🚀 Features

- **Product Catalog**: Browse supplements, gene tests, and performance solutions
- **Personalized Quiz**: Interactive quiz to discover personalized nutrition plans
- **Shopping Cart**: Full cart functionality with product management
- **Gene Test Information**: Detailed pages for DNA testing services
- **Waitlist System**: Join waitlists for upcoming products (Blueprint, Elite)
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **SEO Optimized**: Meta tags and structured content for better search visibility
- **Performance Tracking**: Pages for Physical Performance, Mental Performance, and Recovery

## 🛠️ Tech Stack

### Frontend

- **React 19.2.0** - UI library
- **Vite 7.2.2** - Build tool and dev server
- **React Router DOM 7.9.6** - Client-side routing
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives

### Key Libraries

- `react-helmet-async` - SEO meta tag management
- `embla-carousel-react` - Carousel/slider components
- `react-fast-marquee` - Scrolling text animations
- `emailjs` - Email service integration

## 📁 Project Structure

```
optigenix-website/
├── api/
│   └── send-mail.js          # Netlify serverless function for emails
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images, fonts, and media files
│   ├── components/
│   │   ├── layout/           # Header, Footer components
│   │   ├── PageComponents/   # Page-specific components
│   │   └── ui/               # Reusable UI components (buttons, carousels, etc.)
│   ├── context/              # React Context (CartContext)
│   ├── hooks/                # Custom React hooks
│   ├── pages/                # Route pages
│   ├── stripe/               # Payment integration (config, services, components)
│   ├── App.jsx               # Main app component with routes
│   └── main.jsx              # Application entry point
├── netlify.toml              # Netlify deployment configuration
├── vercel.json               # Vercel deployment configuration
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies and scripts
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd optigenix-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

API endpoints used:

- `/api/prices` - Fetch product prices
- `/api/products` - Fetch product details
- `/api/create-checkout-session` - Create checkout session
- `/api/send-mail` - Send email notifications

## 🎨 Pages & Routes

- `/` - Homepage with hero, products, testimonials
- `/about-us` - About OptiGenix
- `/all-category` - All product categories
- `/gene-test` - Gene testing information
- `/quiz` - Personalized nutrition quiz
- `/athletes` - Athletes page
- `/recovery` - Recovery products
- `/physical-performance` - Physical performance products
- `/mental-performance` - Mental performance products
- `/product/:productId` - Individual product page
- `/cart` - Shopping cart
- `/checkout` - Checkout page
- `/thank-you` - Payment success page
- `/join-wait-list` - Waitlist signup
- `/privacy-policy` - Privacy policy
- `/terms-and-conditions` - Terms of service

## 🚢 Deployment

### Netlify

The project includes `netlify.toml` for Netlify deployment:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Vercel

The project includes `vercel.json` for Vercel deployment with proper routing and security headers.

### Build Output

The production build creates a `dist/` directory with optimized static files ready for deployment.

## 🔐 Security

- Payment keys are environment variables (never commit to git)
- CORS is handled by the backend API
- Security headers configured in `vercel.json`
- X-Frame-Options and Content-Security-Policy headers set

## 🎯 Key Features Implementation

### Shopping Cart

- Context-based cart state management
- Add/remove products
- Quantity management
- Persistent cart (can be enhanced with localStorage)

### Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Touch-friendly interactions
- Optimized images (WebP format)

## 📦 Dependencies

See `package.json` for the complete list of dependencies. Key dependencies include:

- React ecosystem (React, React DOM, React Router)
- UI component libraries (Radix UI)
- Styling (Tailwind CSS)
- Build tools (Vite, ESLint)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is private and proprietary.

## 📞 Support

For issues or questions, please contact the development team.

---

**Note**: This is a frontend-only project. The backend API is hosted separately
