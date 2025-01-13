import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SignupForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{
    type: 'success' | 'error' | null
    text: string
  }>({ type: null, text: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage({ type: null, text: '' })

    const form = e.currentTarget
    const email = new FormData(form).get('email')

    try {
      const response = await fetch('https://formspree.io/f/xyzgzdwp', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        setMessage({ type: 'success', text: 'Thank you!' })
        form.reset()
      } else {
        setMessage({ 
          type: 'error', 
          text: 'Something went wrong. Please try again.' 
        })
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'Something went wrong. Please try again.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      id="signup-form"
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex-grow relative">
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-lg bg-transparent border-2 
                   border-white/30 focus:border-primary outline-none
                   text-white placeholder-white/50 transition-colors
                   disabled:opacity-50"
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-3 bg-primary hover:bg-primary-light 
                 text-white font-bold rounded-lg transition-colors
                 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? 'Sending...' : 'Contact'}
      </motion.button>

      <AnimatePresence mode="wait">
        {message.type && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute left-0 right-0 -bottom-12 text-center
                      ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
          >
            {message.text}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  )
}

export default SignupForm