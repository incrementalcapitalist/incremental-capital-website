import { motion } from 'framer-motion'

const Header: React.FC = () => {
  return (
    <header className="mb-8">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Incremental Capital LLC
      </motion.h1>
      
      <motion.p 
        className="text-base md:text-lg text-gray-300 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        There's nothing to see here. Incremental Capital LLC is a proprietary trading 
        operation/vehicle that invests for the benefit of its owner. But if you want to 
        discuss derivatives trading and monetary economics (and not for financial or 
        investment advice) please{' '}
        <a 
          href="#signup-form"
          className="text-primary hover:text-primary-light transition-colors duration-200 underline"
        >
          reach out
        </a>
        {' '}or signup for the{' '}
        <a
          href="https://incrementalcapital.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-light transition-colors duration-200 underline"
        >
          Incremental Capitalist 
        </a>
        {' '}newsletter.
      </motion.p>
    </header>
  )
}

export default Header