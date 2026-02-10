# vite-react-app

Modern React application built with Vite, Tailwind CSS, and best practices.

## 🚀 Features

- ⚡ **Vite** - Lightning fast development and builds
- ⚛️ **React 18** - Latest React with concurrent features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧭 **React Router** - Declarative routing
- 🔍 **ESLint** - Code linting and quality
- 💅 **Prettier** - Code formatting
- 🐕 **Husky** - Git hooks for quality assurance
- 📱 **Responsive** - Mobile-first design
- 🌍 **Netlify Ready** - Deployment and dev server support
- 🚀 **Production Ready** - Optimized builds

## 🛠️ Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🌍 Deployment

### Netlify (Recommended)
1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Netlify Dev (Local Development)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Start local dev server with Netlify Functions support
netlify dev
```

### Other Platforms
- **Vercel**: Framework preset: Vite, Build command: `npm run build`, Output directory: `dist`
- **Static Hosting**: Build and deploy the `dist` folder

## 🎨 Customization

### Styling
Update Tailwind configuration in `tailwind.config.js` to customize colors, fonts, and spacing.

### Components
Add new components in `src/components/`:
- `ui/` - Reusable UI components
- `layout/` - Layout components

### Pages
Add new pages in `src/pages/` and update routes in `src/App.jsx`.

## 📁 Project Structure

```
vite-react-app/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # Reusable UI components
│   │   └── layout/     # Layout components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   ├── styles/         # Additional styles
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
├── .eslintrc.cjs       # ESLint configuration
├── .prettierrc         # Prettier configuration
├── netlify.toml        # Netlify configuration
└── README.md           # This file
```

## 🌍 Netlify Features

This template includes enhanced Netlify support:

- **Netlify Dev**: Run `netlify dev` for local development with functions
- **SPA Routing**: Client-side routing configured
- **Security Headers**: Production security headers included
- **Asset Caching**: Optimized caching for static assets
- **Environment Variables**: Template for environment configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details.
