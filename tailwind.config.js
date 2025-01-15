/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Using both Poppins and Inter strategically
        display: ['Poppins', 'system-ui', 'sans-serif'], // For headings
        sans: ['Inter', 'system-ui', 'sans-serif'],      // For body text
      },
      fontSize: {
        // Standardized text sizes
        'display-large': ['3.25rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],    // 52px - Main title
        'display-medium': ['2.5rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],    // 40px - Page headers
        'heading': ['1.5rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],            // 24px - Section headers
        'body-large': ['1.125rem', { lineHeight: '1.65', letterSpacing: '-0.01em' }],      // 18px - Main content
        'body': ['1rem', { lineHeight: '1.65', letterSpacing: '0' }],                      // 16px - Regular text
        'small': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0' }],                  // 14px - Secondary text
        'tiny': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0' }],                    // 12px - Fine print
      },
      colors: {
        primary: {
          // Using #ff9900 as our base color
          DEFAULT: '#ff9900',
          // A darker shade for hover states (about 10% darker)
          dark: '#e68a00',
          // A lighter shade for hover states (about 10% lighter)
          light: '#ffad33',
        },
        background: {
          DEFAULT: '#000',
          light: '#ffffff',
        },
        text: {
          // Maintaining our standardized text opacity levels
          primary: 'rgba(255, 255, 255, 0.75)',  // Main text
          secondary: 'rgba(255, 255, 255, 0.5)',  // Footer and less important text
          muted: 'rgba(255, 255, 255, 0.35)',    // Very subtle text
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}