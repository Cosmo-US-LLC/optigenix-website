# Optigenix Website

A modern, responsive website built with React 19, Vite 7, and TailwindCSS v4, featuring a clean architecture and cutting-edge tooling.

## 🚀 Tech Stack

- **React 19.1.1** - Latest React with React Compiler support
- **Vite 7.1.7** - Next-generation frontend tooling
- **TailwindCSS 4.1.17** - Utility-first CSS framework (latest version)
- **React Router DOM 7.9.5** - Client-side routing
- **Shadcn/ui** - Re-usable component system built on Radix UI
- **Lucide React** - Beautiful icon library
- **Embla Carousel** - Lightweight carousel library

## 📦 Project Structure

```
optigenix-website/
├── src/
│   ├── components/
│   │   ├── layout/              # Layout components
│   │   │   ├── Header/
│   │   │   │   └── Header.jsx
│   │   │   ├── Footer/
│   │   │   │   └── Footer.jsx
│   │   │   └── index.jsx        # Main layout with Outlet
│   │   ├── PageComponents/      # Page-specific components
│   │   │   ├── Home/
│   │   │   ├── AboutUs/
│   │   │   └── Services/
│   │   └── ui/                  # Shadcn UI components
│   │       └── button.jsx
│   ├── pages/                   # Route pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── hooks/                   # Custom React hooks
│   │   └── useScrolled.js
│   ├── lib/                     # Utility functions
│   │   └── utils.js
│   ├── assets/                  # Static assets
│   │   └── images/
│   ├── services/                # API services
│   ├── utils/                   # Additional utilities
│   ├── main.jsx                # Application entry point
│   ├── App.jsx                 # Main app with routing
│   ├── App.css                 # App-specific styles
│   └── index.css               # Global styles + Tailwind
├── public/                      # Public static files
├── Configuration Files
│   ├── vite.config.js          # Vite configuration
│   ├── tailwind.config.js      # Tailwind configuration
│   ├── components.json         # Shadcn/ui configuration
│   ├── jsconfig.json           # JavaScript configuration
│   └── eslint.config.js        # ESLint configuration
└── package.json
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ and npm installed

### Getting Started

1. **Navigate to the project directory:**
   ```bash
   cd C:\cosmo\optigenix-website
   ```

2. **Install dependencies** (already done):
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🎨 Key Features

### ✅ React Compiler
This project uses the **experimental React Compiler** (`babel-plugin-react-compiler`) for automatic optimization.

### ✅ TailwindCSS v4
- Latest TailwindCSS with Vite plugin integration
- CSS variables for theming
- Dark mode support with `.dark` class
- Custom color system with HSL values
- Animation utilities via `tailwindcss-animate`

### ✅ Shadcn/ui Integration
- Component system based on Radix UI primitives
- Accessible, customizable components
- "New York" style variant
- Lucide icons for consistent iconography

### ✅ Path Aliases
Configured path aliases for cleaner imports:
```javascript
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import useScrolled from '@/hooks/useScrolled'
```

### ✅ Routing
- React Router v7 with nested routes
- Layout wrapper with Header/Footer
- Clean URL structure

## 🎯 Dependencies Overview

### Core Dependencies
```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router-dom": "^7.9.5"
}
```

### Styling & UI
```json
{
  "tailwindcss": "^4.1.17",
  "@tailwindcss/vite": "^4.1.17",
  "tailwindcss-animate": "^1.0.7",
  "@radix-ui/react-accordion": "^1.2.12",
  "@radix-ui/react-dialog": "^1.1.15",
  "@radix-ui/react-slot": "^1.2.4",
  "lucide-react": "^0.553.0",
  "embla-carousel-react": "^8.6.0"
}
```

### Utilities
```json
{
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.4.0"
}
```

### Dev Dependencies
```json
{
  "vite": "^7.1.7",
  "@vitejs/plugin-react": "^5.0.4",
  "babel-plugin-react-compiler": "^19.1.0-rc.3",
  "eslint": "^9.36.0",
  "@types/node": "^24.10.0",
  "shadcn": "^3.5.0"
}
```

## 🧩 Adding Shadcn/ui Components

To add more Shadcn components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add accordion
```

## 🎨 Customization

### Theme Colors
Edit CSS variables in `src/index.css` to customize the color scheme:
```css
:root {
  --primary: 0 0% 9%;
  --secondary: 0 0% 96.1%;
  /* ... other colors */
}
```

### Tailwind Configuration
Modify `tailwind.config.js` to extend the theme:
```javascript
theme: {
  extend: {
    colors: {
      // Add custom colors
    },
    fontFamily: {
      // Add custom fonts
    }
  }
}
```

## 📚 Useful Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [TailwindCSS v4 Docs](https://tailwindcss.com)
- [Shadcn/ui Components](https://ui.shadcn.com)
- [React Router](https://reactrouter.com)
- [Radix UI](https://www.radix-ui.com)
- [Lucide Icons](https://lucide.dev)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run lint` to check for errors
4. Submit a pull request

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ by the Optigenix Team**
