# Incremental Capital LLC Website

Official website for Incremental Capital LLC.

## Overview

A React-based single-page application implementing Incremental Capital LLC's web presence. The site features a minimalist design, robust contact functionality, and comprehensive legal documentation.

## Technical Stack

- React 18 - UI framework for component-based development
- TypeScript 5 - Static typing and enhanced developer experience
- Vite - Modern build tool for faster development
- Tailwind CSS - Utility-first CSS framework
- Framer Motion - Animation library for smooth transitions
- React Router - Client-side routing solution
- React Helmet Async - Document head management

## Development

### Prerequisites

- Node.js (version 16 or higher)
  - Required for modern JavaScript features and optimal build performance
  - Recommended: Latest LTS version for stability
- npm (version 7 or higher)
  - Required for proper workspaces and dependency management
  - Ensures consistent package installations across environments
- Git (version 2.30 or higher)
  - Required for version control and deployment processes
  - Enables proper branch management and deployment tracking
  
### Production Environment
- NGINX (version 1.20 or higher)
  - Handles static file serving and request routing
  - Provides necessary security headers and SSL termination
- SSL Certificate
  - Required for HTTPS implementation
  - Minimum 2048-bit key length recommended
- Node.js (version 16 or higher)
  - Required for production build process
  - Ensures consistent build output

## Technical Stack

Each technology in our stack serves a specific purpose:

### Core Framework
- React 18
  - Provides concurrent rendering capabilities
  - Enables strict mode for better development practices
  - Implements efficient state management patterns

### Type Safety
- TypeScript 5
  - Ensures type safety across the codebase
  - Enables better IDE support and code navigation
  - Facilitates early error detection

### Build System
- Vite
  - Offers superior build performance
  - Implements efficient hot module replacement
  - Provides optimized production builds

### Styling
- Tailwind CSS
  - Implements utility-first CSS architecture
  - Enables responsive design patterns
  - Ensures consistent styling across components

### Animation
- Framer Motion
  - Handles page transitions
  - Implements smooth UI animations
  - Provides gesture support

### Routing
- React Router
  - Manages client-side routing
  - Implements route-based code splitting
  - Handles navigation state management

### Meta Tags
- React Helmet Async
  - Manages document head elements
  - Implements SEO best practices
  - Handles dynamic meta information

## Initial Setup

1. Repository Configuration
```bash
# Clone the repository
git clone https://github.com/incrementalcapital/website.git

# Navigate to project directory
cd website

# Set up Git hooks
cp scripts/pre-commit.sample .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

2. Environment Configuration
```bash
# Create environment files
cp .env.example .env.development
cp .env.example .env.production

# Configure environment variables
# Edit .env.development and .env.production with appropriate values
```

3. Development Dependencies
```bash
# Install dependencies
npm install

# Verify installation
npm run verify
```

## Development Workflow

### Local Development
```bash
# Start development server
npm run dev

# Run type checking in watch mode
npm run type-check:watch
```

### Code Quality Tools
```bash
# Run linting
npm run lint

# Run type checking
npm run type-check

# Format code
npm run format
```

## Project Structure

```
├── public/                 # Static assets
│   ├── images/            # Image assets
│   └── favicon.ico        # Site favicon
├── scripts/               # Build and deployment scripts
│   ├── deploy.sh         # Production deployment script
│   └── verify.sh         # Environment verification script
├── src/                  # Source code
│   ├── components/       # Reusable UI components
│   ├── pages/           # Page components
│   ├── styles/          # Global styles
│   ├── utilities/       # Utility functions
│   ├── App.tsx          # Root component
│   └── main.tsx         # Entry point
└── tests/               # Test files
```

### Key Features

- Responsive design implementation
- Theme management system
- Page transition animations
- SEO optimization
- Background image slideshow
- Formspree contact integration
- Social media connectivity

## Configuration

### Environmental Variables

Create a `.env` file in the root directory:

```env
VITE_FORMSPREE_ENDPOINT=your-formspree-endpoint
```

### Build Configuration

Vite configuration options are specified in `vite.config.ts`.

## Deployment

This is a static single-page application that can be deployed to any static file hosting service.

### Build Process

Our build process is managed by a comprehensive deployment script located at `scripts/deploy.sh`. This script handles:

1. Environment Preparation
```bash
# Clean existing build artifacts
npm run clean

# Fresh dependency installation
npm install
```

2. Production Build
```bash
# Create production build
npm run build
```

3. Build Verification
```bash
# Local production build testing
npm run preview
```

### Deployment Options

1. Automated Deployment (Recommended):
   - Netlify
   - Vercel
   - GitHub Pages

2. Manual Deployment:
   - Build locally
   - Upload dist directory to hosting
   - Configure environment variables

## Monitoring

### Performance Metrics
Monitor and track key performance indicators:
- Core Web Vitals
  - Largest Contentful Paint (LCP): < 2.5s
  - First Input Delay (FID): < 100ms
  - Cumulative Layout Shift (CLS): < 0.1
- Custom Metrics
  - Time to Interactive (TTI)
  - First Contentful Paint (FCP)
  - DNS resolution time
  - SSL negotiation time

### Error Tracking
Track and log:
- JavaScript runtime errors
- Form submission failures
- Asset loading errors
- Network failures

### Analytics
Monitor:
- User engagement
- Form submissions
- Page navigation
- Resource usage

## Maintenance

### Regular Tasks

1. Dependencies
   - Weekly dependency audits
   - Monthly updates
   - Security patch application

2. Content
   - Link validation
   - Meta tag verification
   - Content freshness
   - SEO optimization

### Update Procedure

1. Development Updates
```bash
# Create update branch
git checkout -b update/description

# Install dependencies
npm install

# Build and verify
npm run build
npm run preview
```

2. Production Updates
```bash
# Deploy updates using script
./scripts/deploy.sh
```

## Testing

```bash
# Run unit tests
npm run test

# Run type checking
npm run type-check

# Run linting
npm run lint
```

## Security

- Security vulnerabilities should be reported to info@incremental.capital
- All communications are encrypted using SSL/TLS
- Regular security audits are performed
- Dependencies are monitored for vulnerabilities

## Legal

Copyright © 2024 Incremental Capital LLC. All rights reserved.

## Support

For technical support or inquiries:
- Email: info@incremental.capital
- Form: Use the contact form on the website
- GitHub: Open an issue in the repository