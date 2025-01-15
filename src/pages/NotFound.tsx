import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Incremental Capital LLC</title>
        <meta name="description" content="The page you're looking for cannot be found." />
      </Helmet>

      {/* Content area is now simpler - Layout handles structure */}
      <div className="max-w-4xl">
        {/* 
          The 404 heading uses a larger size than our standard scale 
          because it serves as a visual centerpiece. We keep the Poppins
          font for its geometric, impactful appearance.
        */}
        <motion.h1 
          className="font-display text-[8rem] font-bold text-primary mb-4"
          // This specific animation remains because it's a unique feature
          // of the 404 page, not a page transition
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0] 
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* 
            Secondary heading uses our standard display-medium size
            for consistency with other page headers
          */}
          <h2 className="font-display text-display-medium text-white mb-8">
            Oops! Page not found
          </h2>

          {/* 
            Body text uses our standard body size with Inter font
            for optimal readability
          */}
          <p className="text-body text-text-primary mb-8 max-w-md">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to where you need to be.
          </p>

          {/* 
            Button container maintains consistent spacing
            with the rest of our layout
          */}
          <div className="space-x-4">
            <Link 
              to="/"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg 
                       hover:bg-primary-light transition-colors duration-200
                       font-sans text-body font-medium"
            >
              Return Home
            </Link>

            <a 
              href="mailto:contact@incremental.capital"
              className="inline-block px-6 py-3 border border-primary/30 
                       text-primary rounded-lg hover:bg-primary/10 
                       transition-colors duration-200
                       font-sans text-body font-medium"
            >
              Report Issue
            </a>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default NotFound