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
        // Switch to Poppins as the default font
        // We keep system-ui and sans-serif as fallbacks for better loading experience
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
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