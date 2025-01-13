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

## Build Process

1. Environment Preparation
```bash
# Clean existing build artifacts
npm run clean

# Clear node_modules
rm -rf node_modules

# Fresh dependency installation
npm install
```

2. Production Build
```bash
# Create optimized production build
npm run build
```

3. Build Verification
```bash
# Local production build testing
npm run preview
```

4. Build Artifacts
- Location: `dist/` directory
- Contents:
  - Optimized JavaScript bundles
  - Processed CSS files
  - Static assets
  - HTML entry point

## Monitoring

### Performance Metrics

Monitor and track:
- Page load times
- Time to interactive
- First contentful paint
- Largest contentful paint
- Cumulative layout shift

### Error Tracking

Track and log:
- JavaScript runtime errors
- API communication failures
- Form submission errors
- Asset loading failures

### Analytics

Monitor:
- User engagement metrics
- Form submission rates
- Page navigation patterns
- Resource utilization
- Server response times

## Maintenance

### Regular Tasks

1. Dependencies
- Weekly dependency audits
- Monthly dependency updates
- Quarterly major version evaluations

2. Security
- Weekly security scans
- Monthly vulnerability assessments
- Regular SSL certificate renewal

3. Performance
- Weekly performance metric review
- Monthly optimization assessment
- Quarterly full performance audit

4. Content
- Regular content freshness checks
- Link validation
- Meta tag verification
- SEO optimization review

### Update Procedure

1. Development Updates
```bash
# Create update branch
git checkout -b update/description

# Install and update dependencies
npm update

# Test updates
npm run test

# Build and verify
npm run build
npm run preview
```

2. Production Updates
```bash
# Merge approved updates
git checkout main
git merge update/description

# Deploy updates
./scripts/deploy.sh
```

## Security

Security vulnerabilities should be reported to info@incremental.capital.

## Legal

Copyright © Incremental Capital LLC. All rights reserved.

## Contact

For technical inquiries regarding this website, contact through appropriate channels listed on the website.