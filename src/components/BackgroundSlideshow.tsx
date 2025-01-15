import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Our new images maintain the same naming convention but feature the new visuals
const images = [
  { url: '/images/sung-jin-cho-ZsA3DknVxRc-unsplash.jpg', position: 'center' },  // Starry scene
  { url: '/images/ameer-basheer-gV6taBJuBTk-unsplash.jpg', position: 'center' },  // Black & white canyon
  { url: '/images/jeremy-bishop-_nLiAdIotdg-unsplash.jpg', position: 'center' }   // Third similar image
] as const

const BackgroundSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Preload images to ensure smooth transitions
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
    }, 6000)  // Change image every 6 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      {/* Add a persistent overlay for text readability */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] z-10" />
      
      <AnimatePresence mode="wait">
        {isLoaded && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: {
                duration: 1,
                ease: 'easeInOut'
              }
            }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full"
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