import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BackgroundSlideshow from './BackgroundSlideshow'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Remove preload class after component mounts
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.body.classList.remove('is-preload')
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <BackgroundSlideshow />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 flex flex-col justify-center min-h-screen px-4 py-6 md:px-6 lg:px-8"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

export default Layout