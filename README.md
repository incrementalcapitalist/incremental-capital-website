# Incremental Capital LLC Website

Official website for Incremental Capital LLC, implementing a minimalist single-page application with robust security and maintainability.

## System Requirements

### Development Environment
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

## Build and Deployment

### Build Process

Our build process is managed by a comprehensive deployment script located at `scripts/deploy.sh`. This script handles:

1. Environment Preparation
```bash
# The script performs these steps automatically:
npm run clean           # Clean existing build artifacts
rm -rf node_modules     # Remove existing dependencies
npm install            # Fresh dependency installation
```

2. Build Verification
```bash
# Automatic verification steps:
npm run type-check     # Verify type safety
npm run lint          # Check code quality
npm run test          # Run test suite
```

3. Production Build
```bash
# Final build steps:
npm run build         # Create optimized build
npm run preview       # Verify build locally
```

### Deployment Script

The deployment script (`scripts/deploy.sh`) is a comprehensive tool that manages the entire deployment process. Key features:

- Error handling and logging
- Environment validation
- Build artifact verification
- Automatic rollback on failure
- Performance optimization checks

Usage:
```bash
# Make script executable
chmod +x scripts/deploy.sh

# Run deployment
./scripts/deploy.sh
```

For detailed script documentation, see [DEPLOYMENT.md](./DEPLOYMENT.md).

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
Implementation of comprehensive error logging:
- Runtime Errors
  - JavaScript exceptions
  - Network failures
  - Resource loading errors
- User Experience Issues
  - Form submission failures
  - Navigation errors
  - Asset loading failures

## Security

Security measures implemented:
- Content Security Policy (CSP)
- HTTP Strict Transport Security (HSTS)
- XSS Protection Headers
- CSRF Protection
- Rate Limiting

Report security issues to: security@incremental.capital

## Legal

Copyright © 2024 Incremental Capital LLC. All rights reserved.

## Support

For technical support: info@incremental.capital