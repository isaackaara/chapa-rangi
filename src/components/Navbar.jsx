import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const location = useLocation()

  useEffect(() => {
    let lastY = window.scrollY
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      setHidden(y > 80 && y > lastY)
      lastY = y
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      hidden && !isOpen ? '-translate-y-full' : 'translate-y-0'
    } ${
      scrolled
        ? 'bg-cream/95 backdrop-blur-md shadow-sm'
        : 'bg-cream/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-0.5 group" onClick={() => setIsOpen(false)}>
            <span className="font-serif text-2xl lg:text-3xl font-bold text-teal tracking-tight transition-colors group-hover:text-teal-light">
              chapa rang
            </span>
            <span className="font-serif text-2xl lg:text-3xl font-bold text-pink transition-colors group-hover:text-pink-dark">i</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200 hover:text-pink ${
                  location.pathname === link.path ? 'text-pink' : 'text-charcoal'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink"
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-0.5 bg-charcoal"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block w-6 h-0.5 bg-charcoal"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-0.5 bg-charcoal"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden overflow-hidden bg-cream border-t border-cream-dark/30"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium tracking-[0.15em] uppercase transition-colors hover:text-pink ${
                      location.pathname === link.path ? 'text-pink' : 'text-charcoal'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
