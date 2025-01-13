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

      <div className="p-6 md:p-8 lg:p-12">
        <div className="max-w-4xl">
          <motion.h1 
            className="text-8xl font-bold text-primary mb-4"
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
            <h2 className="text-2xl font-semibold text-white mb-8">
              Oops! Page not found
            </h2>

            <p className="text-gray-400 mb-8 max-w-md">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back to where you need to be.
            </p>

            <div className="space-x-4">
              <Link 
                to="/"
                className="inline-block px-6 py-3 bg-primary text-white rounded-lg 
                         hover:bg-primary-light transition-colors duration-200"
              >
                Return Home
              </Link>

              <a 
                href="mailto:contact@incremental.capital"
                className="inline-block px-6 py-3 border border-primary/30 
                         text-primary rounded-lg hover:bg-primary/10 
                         transition-colors duration-200"
              >
                Report Issue
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default NotFound