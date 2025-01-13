import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const Disclaimer: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | Incremental Capital LLC</title>
        <meta name="description" content="Legal disclaimer and terms of use for Incremental Capital LLC." />
      </Helmet>

      <motion.div 
        className="p-6 md:p-8 lg:p-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Disclaimer
          </h1>
          <p className="text-xs text-gray-300">
            This website is not a solicitation. Incremental Capital LLC does not solicit funds for investment or trading.
          </p>
        </header>

        <div className="space-y-6 text-xs text-gray-300 max-w-4xl">
          <p>
            Neither Incremental Capital LLC nor any member, employee, contractor, or any person associated with it, 
            (collectively, Incremental Capital), is a registered investment advisor. Opinions, information and trade 
            highlights on this website, or any other forum, including, but not limited to Incremental Capital's blog, 
            social media, interviews and other broadcast media, henceforth "Media Channels", are not to be relied upon 
            as investment advice, but are solely meant informational and educational purposes only and should never be 
            construed to represent trading or investment advice.
          </p>

          <p>
            All persons using this site are advised to learn the risks involved with trading cryptocurrency, futures, 
            and options, and to seek qualified, professional advice before engaging in any financial transaction. 
            Trading derivatives, especially those involving cryptocurrencies highlighted by Incremental Capital and 
            its personnel, is an inherently risky activity. Traders must do their own research, and understand all 
            the risks involved in any transaction. Incremental Capital LLC, while attempting to deliver accurate 
            information, cannot and does not in any way guarantee success on any trade.
          </p>

          <p>
            Incremental Capital LLC is not responsible for the accuracy of any information on Media Channels or for 
            reviewing the contents of the listings that are provided by the listees or any linked websites, and 
            Incremental Capital LLC is not responsible for any material or information contained in the linked 
            websites or provided by listees. Incremental Capital LLC makes no warranty, express or implied, about 
            the accuracy or reliability of the information on this website or on any other website to which this 
            website is linked.
          </p>

          <p className="font-bold text-white">
            IF YOU DO NOT AGREE WITH THE TERMS OF THIS DISCLAIMER, PLEASE EXIT THIS SITE IMMEDIATELY. 
            PLEASE BE ADVISED THAT YOUR CONTINUED USE OF THIS SITE OR THE INFORMATION PROVIDED HEREIN 
            SHALL INDICATE YOUR CONSENT AND AGREEMENT TO THESE TERMS.
          </p>
        </div>

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/"
            className="inline-block px-6 py-3 text-primary border border-primary/30 
                     rounded-lg hover:bg-primary/10 transition-colors duration-200"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Disclaimer