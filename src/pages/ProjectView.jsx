import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'
import Button from '../components/Button'
import WaveDivider from '../components/WaveDivider'
import Asterisk from '../components/Asterisk'
import projects from '../data/projects'

// Full-bleed hero image with parallax
function ProjectHero({ project }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      <motion.img
        src={project.hero}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />

      {/* Hero content overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end"
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12 md:pb-16 lg:pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-cream/60 text-xs tracking-[0.2em] uppercase mb-6 hover:text-cream transition-colors duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" />
              </svg>
              Back to Portfolio
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm ${
                project.color === 'pink' ? 'bg-pink/80 text-cream' : 'bg-teal-light/80 text-cream'
              }`}>
                {project.category}
              </span>
              <span className="text-cream/40 text-xs tracking-widest">{project.year}</span>
              <span className="text-cream/30">|</span>
              <span className="text-cream/40 text-xs tracking-widest">{project.duration}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-cream leading-[1.05] mb-4">
              {project.title}
            </h1>
            <p className="text-cream/70 text-lg md:text-xl max-w-2xl font-serif italic">
              {project.tagline}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

// Offset text block with large serif pull quote style
function OverviewSection({ project }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column: large overview text */}
          <AnimatedSection className="lg:col-span-7">
            <p className="text-xs tracking-[0.2em] uppercase text-pink mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-pink" />
              Overview
            </p>
            <p className="font-serif text-2xl md:text-3xl text-charcoal leading-snug mb-8">
              {project.overview}
            </p>
          </AnimatedSection>

          {/* Right column: project meta */}
          <AnimatedSection delay={0.15} direction="right" className="lg:col-span-5 lg:pt-12">
            <div className="bg-warm-white/60 p-8 rounded-sm">
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal/50 mb-6">
                Project Details
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-xs tracking-widest uppercase text-charcoal/40 mb-1">Client</p>
                  <p className="text-charcoal font-medium">{project.title}</p>
                </div>
                <div className="w-full h-px bg-charcoal/5" />
                <div>
                  <p className="text-xs tracking-widest uppercase text-charcoal/40 mb-1">Service</p>
                  <p className="text-charcoal font-medium">{project.category}</p>
                </div>
                <div className="w-full h-px bg-charcoal/5" />
                <div>
                  <p className="text-xs tracking-widest uppercase text-charcoal/40 mb-1">Timeline</p>
                  <p className="text-charcoal font-medium">{project.duration}</p>
                </div>
                <div className="w-full h-px bg-charcoal/5" />
                <div>
                  <p className="text-xs tracking-widest uppercase text-charcoal/40 mb-1">Year</p>
                  <p className="text-charcoal font-medium">{project.year}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// Artistic image gallery with mixed sizes
function ImageGallery({ images }) {
  // Separate images by type for controlled layout
  const fullImg = images.find(img => img.span === 'full')
  const tallImg = images.find(img => img.span === 'tall')
  const wideImg = images.find(img => img.span === 'wide')
  const squareImg = images.find(img => img.span === 'square')
  const extraImages = images.filter(img => img.span === 'extra')

  return (
    <section className="pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-4 md:space-y-6">
        {/* Row 1: Full-bleed image — contain mode to show the whole image */}
        {fullImg && (
          <AnimatedSection>
            <motion.div
              className="rounded-sm overflow-hidden shadow-lg shadow-charcoal/5 bg-warm-white"
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.5 }}
            >
              <img src={fullImg.src} alt={fullImg.alt} className="w-full h-auto" />
            </motion.div>
          </AnimatedSection>
        )}

        {/* Row 2: Tall + stacked (wide over square) */}
        {(tallImg || wideImg || squareImg) && (
          <div className="grid md:grid-cols-12 gap-4 md:gap-6">
            {/* Tall image on the left, spanning full row height */}
            {tallImg && (
              <AnimatedSection delay={0.1} className="md:col-span-5">
                <motion.div
                  className="aspect-[3/4] md:aspect-auto md:h-full rounded-sm overflow-hidden shadow-lg shadow-charcoal/5"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={tallImg.src} alt={tallImg.alt} className="w-full h-full object-cover" />
                </motion.div>
              </AnimatedSection>
            )}

            {/* Right column: wide on top, square on bottom */}
            <div className={`${tallImg ? 'md:col-span-7' : 'md:col-span-12'} flex flex-col gap-4 md:gap-6`}>
              {wideImg && (
                <AnimatedSection delay={0.15}>
                  <motion.div
                    className="aspect-[16/10] rounded-sm overflow-hidden shadow-lg shadow-charcoal/5"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={wideImg.src} alt={wideImg.alt} className="w-full h-full object-cover" />
                  </motion.div>
                </AnimatedSection>
              )}
              {squareImg && (
                <AnimatedSection delay={0.2}>
                  <motion.div
                    className="aspect-[4/3] rounded-sm overflow-hidden shadow-lg shadow-charcoal/5"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={squareImg.src} alt={squareImg.alt} className="w-full h-full object-cover" />
                  </motion.div>
                </AnimatedSection>
              )}
            </div>
          </div>
        )}

        {/* Row 3: Extra images in a side-by-side grid */}
        {extraImages.length > 0 && (
          <div className={`grid gap-4 md:gap-6 ${extraImages.length === 1 ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
            {extraImages.map((img, i) => (
              <AnimatedSection key={i} delay={0.1 * i}>
                <motion.div
                  className="rounded-sm overflow-hidden shadow-lg shadow-charcoal/5"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-auto" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

// Challenge + Approach in a split editorial layout
function ProcessSection({ project }) {
  return (
    <section className="py-20 lg:py-28 bg-warm-white/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* The Challenge */}
          <AnimatedSection>
            <div className="relative">
              <span className="font-serif text-[8rem] md:text-[10rem] text-charcoal/[0.03] absolute -top-16 -left-4 leading-none select-none pointer-events-none">
                01
              </span>
              <div className="relative">
                <p className="text-xs tracking-[0.2em] uppercase text-pink mb-4 flex items-center gap-3">
                  <span className="w-6 h-px bg-pink" />
                  The Challenge
                </p>
                <p className="text-charcoal/70 leading-relaxed text-base">
                  {project.challenge}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* The Approach */}
          <AnimatedSection delay={0.15}>
            <div className="relative">
              <span className="font-serif text-[8rem] md:text-[10rem] text-charcoal/[0.03] absolute -top-16 -left-4 leading-none select-none pointer-events-none">
                02
              </span>
              <div className="relative">
                <p className="text-xs tracking-[0.2em] uppercase text-pink mb-4 flex items-center gap-3">
                  <span className="w-6 h-px bg-pink" />
                  The Approach
                </p>
                <p className="text-charcoal/70 leading-relaxed text-base">
                  {project.approach}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// Deliverables in a clean, artistic list
function DeliverablesSection({ deliverables }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <AnimatedSection className="lg:col-span-4">
            <p className="text-xs tracking-[0.2em] uppercase text-pink mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-pink" />
              What was delivered
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Deliverables
            </h2>
          </AnimatedSection>

          <div className="lg:col-span-8 lg:pt-2">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-0">
              {deliverables.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.06}>
                  <div className="flex items-start gap-4 py-4 border-b border-charcoal/5">
                    <span className="text-pink/60 text-xs font-mono mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-charcoal/70 text-sm leading-relaxed">{item}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Results section with pull-quote style
function ResultsSection({ project }) {
  return (
    <section className="py-20 lg:py-28 bg-warm-white/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative">
              <span className="font-serif text-[8rem] md:text-[10rem] text-charcoal/[0.03] absolute -top-16 -left-4 leading-none select-none pointer-events-none">
                03
              </span>
              <div className="relative">
                <p className="text-xs tracking-[0.2em] uppercase text-pink mb-4 flex items-center gap-3">
                  <span className="w-6 h-px bg-pink" />
                  The Result
                </p>
                <p className="font-serif text-xl md:text-2xl text-charcoal leading-snug">
                  {project.result}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// Client testimonial in a bold, artistic layout
function TestimonialSection({ testimonial, color }) {
  if (!testimonial) return null

  return (
    <>
      <WaveDivider from="cream" to="teal" />
      <section className="bg-teal py-20 lg:py-28 relative overflow-hidden">
        {/* Decorative elements */}
        <Asterisk
          color="green"
          size={160}
          animate="drift"
          opacity={0.06}
          className="absolute -top-8 -right-8 lg:right-12"
        />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <svg className="w-12 h-12 text-pink/40 mx-auto mb-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream italic leading-snug mb-8 max-w-3xl mx-auto">
              "{testimonial.quote}"
            </p>
            <div>
              <p className="text-cream font-medium">{testimonial.author}</p>
              <p className="text-cream/50 text-sm">{testimonial.role}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <WaveDivider from="teal" to="cream" flip />
    </>
  )
}

// Next/Previous project navigation
function ProjectNavigation({ currentSlug }) {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1]
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0]

  const MotionLink = motion.create(Link)

  return (
    <section className="py-16 lg:py-20 border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Previous */}
          <AnimatedSection direction="left">
            <MotionLink
              to={`/portfolio/${prevProject.slug}`}
              className="group flex items-center gap-6"
              whileHover={{ x: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-sm overflow-hidden shrink-0">
                <img
                  src={prevProject.thumbnail}
                  alt={prevProject.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-charcoal/40 mb-1">Previous Project</p>
                <p className="font-serif text-lg md:text-xl text-charcoal group-hover:text-pink transition-colors duration-300">
                  {prevProject.title}
                </p>
                <p className="text-charcoal/40 text-xs">{prevProject.category}</p>
              </div>
            </MotionLink>
          </AnimatedSection>

          {/* Next */}
          <AnimatedSection direction="right" delay={0.1}>
            <MotionLink
              to={`/portfolio/${nextProject.slug}`}
              className="group flex items-center gap-6 md:flex-row-reverse md:text-right"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-sm overflow-hidden shrink-0">
                <img
                  src={nextProject.thumbnail}
                  alt={nextProject.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-charcoal/40 mb-1">Next Project</p>
                <p className="font-serif text-lg md:text-xl text-charcoal group-hover:text-pink transition-colors duration-300">
                  {nextProject.title}
                </p>
                <p className="text-charcoal/40 text-xs">{nextProject.category}</p>
              </div>
            </MotionLink>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default function ProjectView() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return <Navigate to="/portfolio" replace />
  }

  return (
    <PageTransition>
      <ProjectHero project={project} />
      <OverviewSection project={project} />
      <ImageGallery images={project.images} />
      <ProcessSection project={project} />
      <DeliverablesSection deliverables={project.deliverables} />
      <ResultsSection project={project} />
      <TestimonialSection testimonial={project.testimonial} color={project.color} />

      {/* CTA */}
      <section className="py-20 lg:py-28 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-charcoal/60 leading-relaxed mb-8 max-w-xl mx-auto">
              Inspired by this project? Let's create something like this for your brand.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary">Start Your Project</Button>
              <Button to="/portfolio">View More Work</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ProjectNavigation currentSlug={slug} />
    </PageTransition>
  )
}
