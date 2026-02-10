import { motion } from 'framer-motion'

/**
 * Decorative asterisk component using the brand SVG asterisks.
 *
 * Props:
 * - color: 'green' | 'pink' (default: 'green')
 * - size: number in px or tailwind class string (default: 48)
 * - className: extra positioning/layout classes
 * - animate: 'spin' | 'float' | 'pulse' | 'drift' | 'none' (default: 'spin')
 * - delay: animation delay in seconds
 * - duration: animation duration override
 * - opacity: opacity value (default: 1)
 */
export default function Asterisk({
  color = 'green',
  size = 48,
  className = '',
  animate = 'spin',
  delay = 0,
  duration,
  opacity = 1,
}) {
  const src = color === 'pink' ? '/asterisk-pink.svg' : '/asterisk-green.svg'

  const sizeStyle = typeof size === 'number'
    ? { width: size, height: size }
    : {}

  const sizeClass = typeof size === 'string' ? size : ''

  // Animation variants
  const animations = {
    spin: {
      initial: { opacity: 0, rotate: -45, scale: 0.8 },
      whileInView: { opacity, rotate: 0, scale: 1 },
      viewport: { once: true, margin: '-80px' },
      transition: {
        duration: duration || 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    float: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity, y: 0 },
      viewport: { once: true, margin: '-80px' },
      transition: {
        duration: duration || 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    pulse: {
      initial: { opacity: 0, scale: 0.6 },
      whileInView: { opacity, scale: 1 },
      viewport: { once: true, margin: '-80px' },
      transition: {
        duration: duration || 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    drift: {
      initial: { opacity: 0, x: -15, rotate: -30 },
      whileInView: { opacity, x: 0, rotate: 0 },
      viewport: { once: true, margin: '-80px' },
      transition: {
        duration: duration || 0.9,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    none: {
      initial: {},
      animate: {},
    },
  }

  const animProps = animations[animate] || animations.spin

  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={`select-none pointer-events-none ${sizeClass} ${className}`}
      style={{ ...sizeStyle, opacity: animate === 'none' ? opacity : undefined }}
      {...animProps}
    />
  )
}

/**
 * A continuously rotating asterisk, great for ambient decoration.
 */
export function SpinningAsterisk({
  color = 'green',
  size = 48,
  className = '',
  opacity = 0.3,
  duration = 20,
  delay = 0,
}) {
  const src = color === 'pink' ? '/asterisk-pink.svg' : '/asterisk-green.svg'

  const sizeStyle = typeof size === 'number'
    ? { width: size, height: size }
    : {}

  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={`select-none pointer-events-none ${className}`}
      style={{ ...sizeStyle, opacity }}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
        delay,
      }}
    />
  )
}
