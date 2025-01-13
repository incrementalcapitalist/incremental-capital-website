import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import SignupForm from '../components/SignupForm'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Incremental Capital LLC</title>
        <meta 
          name="description" 
          content="Incremental Capital LLC is a proprietary trading operation/vehicle that invests for the benefit of its owner." 
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen flex flex-col"
      >
        <div className="flex-grow flex flex-col justify-center max-w-4xl">
          <Header />
          <SignupForm />
        </div>

        <Footer />
      </motion.div>
    </>
  )
}

export default Home