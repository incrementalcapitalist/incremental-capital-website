# Incremental Capital LLC Website

Official website for Incremental Capital LLC.

## Overview

A React-based single-page application implementing Incremental Capital LLC's web presence. The site features a minimalist design, robust contact functionality, and comprehensive legal documentation.

## Technical Stack

- React 18
- TypeScript 5
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- React Helmet Async

## Development

### Prerequisites

- Node.js (version 16 or higher)
- npm (version 7 or higher)

### Getting Started

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

### Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/          # Page components
├── styles/         # Global styles
├── App.tsx         # Root component
└── main.tsx        # Entry point

public/
├── images/         # Static images
└── favicon.ico     # Site favicon
```

### Key Features

- Responsive design implementation
- Theme management system
- Page transition animations
- SEO optimization
- Background image slideshow
- Formspree contact integration
- Social media connectivity

## Production Deployment

### Build Process

1. Ensure all dependencies are installed
2. Run production build
3. Verify build output
4. Deploy to production server

```bash
npm install
npm run build
npm run preview
```

### Server Requirements

- Node.js runtime environment
- SSL certificate
- Proper CORS configuration
- Adequate server resources

## Configuration

### Environmental Variables

Create a `.env` file in the root directory:

```env
VITE_FORMSPREE_ENDPOINT=your-formspree-endpoint
```

### Build Configuration

Vite configuration options are specified in `vite.config.ts`.

## Maintenance

### Updates

Regular maintenance tasks:

1. Dependency updates
2. Security patches
3. Content updates
4. Performance optimization

### Monitoring

Monitor for:

- Server performance
- Error rates
- Form submission functionality
- SEO metrics

## Security

Security vulnerabilities should be reported directly to security@incremental.capital.

## Legal

Copyright © Incremental Capital LLC. All rights reserved.

## Contact

For technical inquiries regarding this website, contact through appropriate channels listed on the website.