import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { 
  faTwitter,
  faInstagram,
  faGithub,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface SocialLink {
  href: string
  icon: IconDefinition
  label: string
}

const Footer: React.FC = () => {
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
    <footer className="fixed bottom-4 left-4 text-gray-400 transition-opacity 
                     duration-500 hover:opacity-100 opacity-50 z-10">
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
                className="text-xl" 
              />
              <span className="sr-only">{link.label}</span>
            </a>
          </li>
        ))}
      </motion.ul>

      <motion.ul 
        className="flex text-sm gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <li>
          &copy; {new Date().getFullYear()} Incremental Capital LLC
        </li>
        <li className="before:content-['•'] before:mr-3">
          <Link 
            to="/disclaimer"
            className="hover:text-primary transition-colors duration-200"
          >
            Disclaimer
          </Link>
        </li>
      </motion.ul>
    </footer>
  )
}

export default Footer