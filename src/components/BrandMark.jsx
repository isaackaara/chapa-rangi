import { motion } from 'framer-motion'

export default function BrandMark({ size = 'md', color = 'pink', className = '' }) {
  const sizes = {
    sm: 28,
    md: 48,
    lg: 72,
    xl: 96,
  }

  const src = color === 'green' || color === 'teal'
    ? '/asterisk-green.svg'
    : '/asterisk-pink.svg'

  const px = sizes[size] || sizes.md

  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={`inline-block select-none ${className}`}
      style={{ width: px, height: px }}
      whileHover={{ rotate: 90, scale: 1.1 }}
      transition={{ duration: 0.3 }}
    />
  )
}
