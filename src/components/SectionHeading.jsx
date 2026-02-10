import { motion } from 'framer-motion'

export default function SectionHeading({ children, color = 'pink', className = '', align = 'left' }) {
  const colors = {
    pink: 'text-pink',
    teal: 'text-teal',
    cream: 'text-cream',
    charcoal: 'text-charcoal',
  }

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className={`font-serif text-3xl md:text-4xl lg:text-5xl ${colors[color]} mb-8 lg:mb-12 ${alignments[align]} ${className}`}
    >
      {children}
    </motion.h2>
  )
}
