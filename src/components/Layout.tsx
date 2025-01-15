import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BackgroundSlideshow from './BackgroundSlideshow'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.body.classList.remove('is-preload')
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return (
    // The outermost container must be h-screen to constrain everything to viewport
    <div className="h-screen bg-background overflow-hidden">
      <BackgroundSlideshow />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          // Use h-full to ensure the main element takes full height of parent
          className="relative z-10 h-full p-6 md:p-8 lg:p-12"
        >
          {/* Wrap children in a flex container to ensure proper spacing */}
          <div className="h-full flex flex-col">
            {/* Content area */}
            <div className="flex-1">
              {children}
            </div>
            {/* Footer is now part of every page */}
            <Footer />
          </div>
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

export default Layout