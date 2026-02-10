import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import WaveDivider from '../components/WaveDivider'
import Asterisk from '../components/Asterisk'
import projects from '../data/projects'

// Parallax image card for portfolio items
function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.02, 1.08, 1.02])

  const isEven = index % 2 === 0

  // Alternate between different card layouts for visual variety
  const layouts = [
    'md:col-span-7',           // large left
    'md:col-span-5',           // medium right
    'md:col-span-5',           // medium left
    'md:col-span-7',           // large right
    'md:col-span-6',           // half
    'md:col-span-6',           // half
  ]

  const aspects = [
    'aspect-[4/3]',
    'aspect-[3/4]',
    'aspect-[3/4]',
    'aspect-[4/3]',
    'aspect-[16/10]',
    'aspect-[16/10]',
  ]

  const MotionLink = motion.create(Link)

  return (
    <AnimatedSection
      delay={isEven ? 0 : 0.12}
      direction={isEven ? 'left' : 'right'}
      className={layouts[index % 6]}
    >
      <MotionLink
        to={`/portfolio/${project.slug}`}
        className="group block relative"
        ref={ref}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Image with parallax */}
        <div className={`${aspects[index % 6]} rounded-sm overflow-hidden relative`}>
          <motion.img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ y, scale }}
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-teal/80 via-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

          {/* Hover content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-cream/60 text-xs tracking-[0.2em] uppercase mb-2">{project.category}</p>
            <h3 className="font-serif text-2xl md:text-3xl text-cream mb-2">{project.title}</h3>
            <p className="text-cream/70 text-sm max-w-sm leading-relaxed">{project.tagline}</p>
          </div>

          {/* Category pill (always visible) */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6">
            <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm backdrop-blur-sm ${
              project.color === 'pink'
                ? 'bg-pink/80 text-cream'
                : 'bg-teal/80 text-cream'
            }`}>
              {project.category}
            </span>
          </div>
        </div>

        {/* Title and meta below image */}
        <div className="mt-4 md:mt-5">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-serif text-xl md:text-2xl text-charcoal group-hover:text-pink transition-colors duration-300">
              {project.title}
            </h3>
            <span className="text-charcoal/30 text-xs tracking-widest font-medium shrink-0">{project.year}</span>
          </div>
          <p className="text-charcoal/50 text-sm mt-1 leading-relaxed">{project.tagline}</p>
        </div>

        {/* Arrow indicator */}
        <motion.div
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-cream/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <svg className="w-4 h-4 text-charcoal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </motion.div>
      </MotionLink>
    </AnimatedSection>
  )
}

// Floating stats section
function PortfolioStats() {
  const stats = [
    { num: '20+', label: 'Projects Delivered' },
    { num: '15', label: 'Happy Clients' },
    { num: '4', label: 'Industries Served' },
  ]

  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <motion.p
                  className="font-serif text-4xl md:text-5xl lg:text-6xl text-pink mb-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  {stat.num}
                </motion.p>
                <p className="text-charcoal/50 text-xs tracking-[0.15em] uppercase">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Portfolio() {
  return (
    <PageTransition>
      {/* Hero header - more editorial than standard PageHeader */}
      <section className="pt-28 lg:pt-36 pb-6 lg:pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-xs tracking-[0.3em] uppercase text-charcoal/40 mb-4 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-pink/50" />
              Selected Work
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] mb-6"
            >
              Work that speaks
              <br />
              <span className="italic text-pink">for itself.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-charcoal/60 max-w-xl leading-relaxed text-base"
            >
              Every project starts with a conversation and ends with a brand that feels right. Here's a look at some of the businesses I've had the pleasure of working with.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter / category tags */}
      <section className="pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {['All', 'Brand Identity', 'Brand Refresh', 'Social Media', 'Campaign Design', 'Event Campaign', 'Web Design'].map((cat, i) => (
              <span
                key={cat}
                className={`text-[10px] tracking-[0.15em] uppercase px-4 py-2 rounded-sm cursor-default transition-colors duration-200 ${
                  cat === 'All'
                    ? 'bg-charcoal text-cream'
                    : 'bg-charcoal/5 text-charcoal/50 hover:bg-charcoal/10 hover:text-charcoal/70'
                }`}
              >
                {cat}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Grid - Asymmetric masonry */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-x-6 lg:gap-x-8 gap-y-12 lg:gap-y-16">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <PortfolioStats />

      {/* CTA */}
      <WaveDivider from="cream" to="teal" />
      <section className="bg-teal py-20 lg:py-28 text-center relative overflow-hidden">
        {/* Decorative asterisks */}
        <Asterisk
          color="green"
          size={120}
          animate="drift"
          opacity={0.08}
          className="absolute top-10 right-10 lg:right-20"
        />
        <Asterisk
          color="pink"
          size={80}
          animate="float"
          delay={0.3}
          opacity={0.1}
          className="absolute bottom-16 left-8 lg:left-16"
        />
        <div className="max-w-3xl mx-auto px-6 relative">
          <SectionHeading color="cream" align="center">Have a project in mind?</SectionHeading>
          <AnimatedSection>
            <p className="text-cream/70 leading-relaxed mb-10 max-w-xl mx-auto">
              I'd love to hear about it. Let's chat about what you're looking for and see if we're a good fit.
            </p>
            <Button to="/contact" variant="outline-light">Start a Conversation</Button>
          </AnimatedSection>
        </div>
      </section>
      <WaveDivider from="teal" to="cream" flip />
    </PageTransition>
  )
}
