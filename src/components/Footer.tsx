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
    <footer className="relative p-6 md:p-8 lg:p-12 text-gray-400 z-10">
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

      <motion.div 
        className="flex text-sm gap-3 items-center opacity-50 hover:opacity-100 transition-opacity duration-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <span>&copy; {new Date().getFullYear()} Incremental Capital LLC</span>
        <span className="text-gray-600">•</span>
        <Link 
          to="/disclaimer"
          className="hover:text-primary transition-colors duration-200"
        >
          Disclaimer
        </Link>
      </motion.div>
    </footer>
  )
}

export default Footer