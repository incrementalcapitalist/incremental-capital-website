import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Define image paths relative to the public directory
const images = [
  { url: '/images/bg01.jpg', position: 'center' },
  { url: '/images/bg02.jpg', position: 'center' },
  { url: '/images/bg03.jpg', position: 'center' }
] as const

const BackgroundSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Preload images
    Promise.all(
      images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.src = image.url
          img.onload = resolve
          img.onerror = reject
        })
      })
    )
      .then(() => setIsLoaded(true))
      .catch((error) => console.error('Failed to load background images:', error))

    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length)
    }, 6000) // 6 second interval

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-0 opacity-[0.375] overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoaded && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 0 }}
            animate={{ 
              opacity: 1, 
              x: [0, -50], // Slide effect
              transition: {
                opacity: { duration: 1 },
                x: { duration: 45, ease: 'linear' }
              }
            }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-[150%] h-full"
            style={{
              backgroundImage: `url(${images[currentIndex].url})`,
              backgroundPosition: images[currentIndex].position,
              backgroundSize: 'cover'
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default BackgroundSlideshow