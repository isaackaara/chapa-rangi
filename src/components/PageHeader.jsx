import { motion } from 'framer-motion'

export default function PageHeader({ title, subtitle }) {
  return (
    <section className="pt-28 lg:pt-36 pb-12 lg:pb-16 text-center">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-xs tracking-[0.3em] uppercase text-charcoal/40 mb-4 flex items-center justify-center gap-3"
      >
        <span className="w-8 h-px bg-pink/50" />
        Design Studio
        <span className="w-8 h-px bg-pink/50" />
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-5 text-charcoal/60 max-w-xl mx-auto leading-relaxed px-6"
        >
          {subtitle}
        </motion.p>
      )}
    </section>
  )
}
