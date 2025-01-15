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
    // Use min-h-screen to allow content to expand beyond viewport when needed
    <div className="min-h-screen bg-background flex flex-col overflow-y-auto">
      <BackgroundSlideshow />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          // Use flex-grow to allow the main content to expand while maintaining footer position
          className="relative z-10 flex flex-col flex-grow p-6 md:p-8 lg:p-12"
        >
          {/* Remove h-full to prevent content from being constrained to viewport height */}
          <div className="flex flex-col flex-grow">
            {/* Allow content to grow naturally without forcing it to fill space */}
            <div className="flex-grow">
              {children}
            </div>
            {/* Footer will now stay at the bottom and scroll with content when needed */}
            <Footer />
          </div>
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

export default Layout