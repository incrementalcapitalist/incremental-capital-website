import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { 
  faTwitter,
  faInstagram,
  faGithub,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// TypeScript interface for our social media links
interface SocialLink {
  href: string
  icon: IconDefinition
  label: string
}

const Footer: React.FC = () => {
  // Define social media links with their respective icons and URLs
  const socialLinks: SocialLink[] = [
    {
      href: 'https://twitter.com/incrementery',
      icon: faTwitter,
      label: 'Twitter'
    },
    {
      href: 'https://www.instagram.com/incrementalcapital/',
      icon: faInstagram,
      label: 'Instagram'
    },
    {
      href: 'https://github.com/incrementalcapital',
      icon: faGithub,
      label: 'GitHub'
    },
    {
      href: 'https://www.youtube.com/@incrementalcapital',
      icon: faYoutube,
      label: 'YouTube'
    },
    {
      href: '#signup-form',
      icon: faEnvelope,
      label: 'Email'
    }
  ]

  return (
    // The footer container uses relative positioning and maintains proper z-index
    <footer className="relative p-6 md:p-8 lg:p-12 text-gray-400 z-10">
      {/* 
        Inner container with negative margins to align with the header text.
        The negative margins offset the parent padding to maintain proper alignment.
      */}
      <div className="max-w-4xl -ml-6 md:-ml-8 lg:-ml-12">
        {/* Social media icons list with animation */}
        <motion.ul 
          className="flex gap-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-inherit hover:text-primary transition-colors duration-200"
                aria-label={link.label}
              >
                <FontAwesomeIcon 
                  icon={link.icon} 
                  className="text-xl opacity-50 hover:opacity-100 transition-opacity duration-200" 
                />
                <span className="sr-only">{link.label}</span>
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Copyright, disclaimer, and photo credits section */}
        <motion.div 
          className="flex flex-col text-sm gap-2 items-start opacity-50 
                     hover:opacity-100 transition-opacity duration-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* Copyright and disclaimer line */}
          <div className="flex items-center gap-3">
            <span>&copy; {new Date().getFullYear()} Incremental Capital LLC</span>
            <span className="text-gray-600">•</span>
            <Link 
              to="/disclaimer"
              className="hover:text-primary transition-colors duration-200"
            >
              Disclaimer
            </Link>
          </div>
          
          {/* Photo credits with proper attribution links */}
          <div className="text-xs">
            Background photos by{' '}
            <a 
              href="https://unsplash.com/@24ameer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
            >
              Ameer Basheer
            </a>
            ,{' '}
            <a 
              href="https://unsplash.com/@jeremybishop?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
            >
              Jeremy Bishop
            </a>
            , and{' '}
            <a 
              href="https://unsplash.com/@mbuff?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
            >
              Sung Jin Cho
            </a>
            {' '}on{' '}
            <a 
              href="https://unsplash.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
            >
              Unsplash
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer