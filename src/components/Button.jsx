import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-pink text-white hover:bg-pink-dark shadow-lg shadow-pink/20',
  outline: 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream',
  'outline-light': 'border-2 border-cream text-cream hover:bg-cream hover:text-teal',
}

export default function Button({ children, to, href, variant = 'outline', className = '', ...props }) {
  const base = `inline-block px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 rounded-sm ${variants[variant]} ${className}`

  const MotionLink = motion.create(Link)

  if (to) {
    return (
      <MotionLink
        to={to}
        className={base}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </MotionLink>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={base}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={base}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
