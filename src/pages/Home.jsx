import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'
import BrandMark from '../components/BrandMark'
import Button from '../components/Button'
import WaveDivider from '../components/WaveDivider'
import Asterisk from '../components/Asterisk'

const services = [
  {
    title: 'Brand Identity Kit',
    desc: 'Logo, colours, typography, and a brand guide that ties it all together. Everything you need to look cohesive from day one.',
    price: 'From 35,000 KES',
    image: '/services/brand-identity-design.jpg',
  },
  {
    title: 'Social Media Content',
    desc: 'Templates and graphics so your Instagram actually matches your vibe, without the monthly panic.',
    price: 'From 20,000 KES/month',
    image: '/services/social-media-content.jpg',
  },
  {
    title: 'Event Campaign Design',
    desc: 'Posters, social graphics, and campaign materials that make your launch or event look incredible.',
    price: 'From 15,000 KES',
    image: '/services/Event Campaign Design.jpg',
  },
  {
    title: 'Web Design & Development',
    desc: 'A professional website that looks great, loads fast, and makes it easy for customers to find you.',
    price: 'From 80,000 KES',
    image: '/services/Web Design & Development.jpg',
  },
]

const principles = [
  {
    title: 'Authenticity Over Perfection',
    desc: "Your brand should feel like you, not a polished, corporate version of yourself. I design for real businesses, not Instagram fantasies.",
  },
  {
    title: 'Collaboration, Not Dictation',
    desc: "You know your business better than anyone. I bring design expertise, you bring the insight. We build it together.",
  },
  {
    title: 'Practical, Not Precious',
    desc: "Beautiful design should also be functional. If you can't use it in your day-to-day, it's not good design.",
  },
]

const steps = [
  {
    num: '1',
    title: 'Inquiry',
    desc: "Fill out the contact form or send me an email. Tell me about your business: what's working, what's not, and where you want to go.",
    icon: '/how-it-works-icons/1-speech-bubble.svg',
  },
  {
    num: '2',
    title: 'Proposal',
    desc: "I'll send you a clear proposal with scope, timeline, and pricing. No surprises, no jargon.",
    icon: '/how-it-works-icons/2-folder.svg',
  },
  {
    num: '3',
    title: 'Design',
    desc: "We dive in together. I design, you give feedback, and we refine until it feels exactly right.",
    icon: '/how-it-works-icons/3-paint-brush.svg',
  },
  {
    num: '4',
    title: 'Deliver',
    desc: "You get the final files and everything you need to start using your new brand with confidence.",
    icon: '/how-it-works-icons/4-tick.svg',
  },
]

const testimonials = [
  {
    quote: "Tessa didn't just design logos. She understood our whole world. Each business has its own personality now, but they all feel like family.",
    author: "Petra",
    role: "Founder, African Footprints / Sandai Farm",
  },
  {
    quote: "Working with Tessa was transformative for our school. She helped us clarify and shape our brand, ensuring it truly reflected our vision and values. The flyers and marketing materials she created were not only beautiful and cohesive, but fully aligned with the spirit and wishes of our school.",
    author: "Jessi Allmendinger",
    role: "Founding parent, Waldorf school",
  },
  {
    quote: "Tessa drew exactly what I had in my head but couldn't describe. The logo feels like Paradise Gardens. It's us.",
    author: "Denise",
    role: "Owner, Paradise Gardens",
  },
]

const projects = [
  {
    name: 'Sandai Weavers',
    slug: 'sandai-weavers',
    category: 'Brand Identity',
    image: '/portfolio/sandai-weavers-cover.jpg',
  },
  {
    name: 'African Footprints',
    slug: 'african-footprints',
    category: 'Brand Identity',
    image: '/portfolio/african-footprints-cover.jpg',
  },
  {
    name: 'Bundu Café',
    slug: 'bundu-cafe',
    category: 'Brand Identity',
    image: '/portfolio/bundu-cafe-cover.jpg',
  },
  {
    name: 'Mt. Kenya Waldorf',
    slug: 'mt-kenya-waldorf',
    category: 'Event Campaign',
    image: '/portfolio/mt-kenya-waldorf-cover.jpg',
  },
]

function PatternParallax() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1.12, 1.05])

  return (
    <div ref={ref} className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl shadow-black/20">
      <motion.img
        src="/green-pink-pattern.svg"
        alt="Chapa Rangi brand pattern"
        className="w-full h-full object-cover"
        style={{ y, scale }}
      />
    </div>
  )
}

function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-cream-dark/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <SectionHeading color="charcoal" align="center">How it works</SectionHeading>
          <p className="text-charcoal/60 -mt-4 lg:-mt-6">
            Simple, transparent, and stress-free. Here's what to expect.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-16 lg:gap-x-20 gap-y-6 lg:gap-y-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.15}>
              <div className="flex items-start gap-6 py-6 lg:py-8">
                <div className="flex items-center gap-4 shrink-0">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                    <motion.img
                      src={step.icon}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-contain select-none"
                      initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    />
                  </div>
                  <span className="font-serif text-7xl lg:text-8xl text-charcoal/90 leading-none">{step.num}</span>
                </div>
                <div className="pt-3 lg:pt-4">
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal/70 mb-2">{step.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <PageTransition>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-24 lg:pt-32 pb-20 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ opacity: heroOpacity }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-charcoal/50 mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-pink" />
                Design Studio
              </p>
              <div className="relative">
                {/* Large pink asterisk behind heading */}
                <motion.img
                  src="/asterisk-pink.svg"
                  alt=""
                  aria-hidden="true"
                  className="absolute -top-8 -left-10 w-28 h-28 lg:w-36 lg:h-36 select-none pointer-events-none"
                  initial={{ opacity: 0, rotate: -60, scale: 0.5 }}
                  animate={{ opacity: 0.12, rotate: 0, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                />
                <h1 className="relative font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] mb-6">
                  Good design
                  <br />
                  <span className="italic text-pink">shouldn't be</span>
                  <br />
                  complicated.
                </h1>
              </div>
              <p className="text-charcoal/70 leading-relaxed mb-4 max-w-md text-base">
                If your Instagram feels scattered, your logo doesn't match your vibe, or you're tired of DIYing every post, let's fix that.
              </p>
              <p className="text-charcoal/60 leading-relaxed mb-8 max-w-md">
                I help small businesses and creative brands look as good as they actually are, wherever they happen to be.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/quiz" variant="primary">Take the Brand Quiz</Button>
                <Button to="/services">View Services</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
              style={{ y: heroImageY }}
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl shadow-charcoal/10">
                <img
                  src="/hero-image-v2.jpg"
                  alt="Design workspace with colour swatches, Pantone samples, and logo sketches on iPad"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -bottom-6 -left-6 bg-teal text-cream p-5 rounded-sm shadow-xl max-w-[200px]"
              >
                <p className="text-xs tracking-widest uppercase mb-1 text-cream/60">Based in</p>
                <p className="font-serif text-lg italic">Nanyuki, Kenya</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Design */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <SectionHeading>What we design</SectionHeading>
            <p className="text-charcoal/60 -mt-4 lg:-mt-6">
              Packages built around how small businesses actually work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.12}>
                <motion.div
                  className="group bg-cream rounded-sm overflow-hidden h-full flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-xl mb-2 text-charcoal">{service.title}</h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed mb-3 flex-1">{service.desc}</p>
                    <p className="text-xs font-semibold tracking-widest uppercase text-pink">
                      {service.price}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-12">
            <Button to="/services">All Services & Pricing</Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Who I Work With */}
      <WaveDivider from="white" to="teal" />
      <section className="bg-teal py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <SectionHeading color="cream">Who I work with</SectionHeading>
              <p className="font-serif text-xl md:text-2xl italic text-cream/90 mb-6 -mt-4 lg:-mt-6">
                Made for businesses that put heart into what they do.
              </p>
              <p className="text-cream/70 leading-relaxed mb-4">
                I love working with hospitality, tourism, and lifestyle businesses, but I'm open to any brand with a story worth telling and a vision worth designing for.
              </p>
              <p className="text-cream/70 leading-relaxed mb-8">
                Whether you're starting fresh or ready for a rebrand, I get to know your business, your customers, and your goals before any design work begins.
              </p>
              <Button to="/about" variant="outline-light">Read My Story</Button>
            </AnimatedSection>
            <AnimatedSection delay={0.2} direction="right">
              <PatternParallax />
            </AnimatedSection>
          </div>
        </div>
      </section>
      <WaveDivider from="teal" to="cream" flip />

      {/* Recent Projects */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading>Recent Projects</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <AnimatedSection key={project.name} delay={i * 0.15}>
                <Link to={`/portfolio/${project.slug}`}>
                  <motion.div
                    className="group cursor-pointer"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-[3/2] rounded-sm overflow-hidden mb-4 relative shadow-lg shadow-charcoal/5">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-teal/0 group-hover:bg-teal/20 transition-colors duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="font-serif text-xl text-cream bg-teal/80 backdrop-blur-sm px-6 py-3 rounded-sm">
                          View Project
                        </span>
                      </div>
                    </div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-pink mb-1">{project.category}</p>
                    <h3 className="font-serif text-2xl text-charcoal">{project.name}</h3>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-12">
            <Button to="/portfolio">View Full Portfolio</Button>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Principles - Pink asterisks as icons */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading color="charcoal">How I work</SectionHeading>
          <div className="grid md:grid-cols-3 gap-12">
            {principles.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <Asterisk
                  color="pink"
                  size={44}
                  animate="spin"
                  delay={i * 0.12}
                  opacity={0.55}
                  className="mb-4"
                />
                <h3 className="font-serif text-xl italic text-charcoal mb-3">{p.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{p.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <WaveDivider from="cream" to="teal" />
      <section className="bg-teal py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading color="cream">Kind words from clients</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.author} delay={i * 0.1}>
                <div className="bg-teal-light/20 border border-cream/10 p-8 rounded-sm h-full flex flex-col">
                  <svg className="w-8 h-8 text-pink/60 mb-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-cream/85 leading-relaxed mb-6 flex-1 italic">{t.quote}</p>
                  <div>
                    <p className="text-cream font-medium text-sm">{t.author}</p>
                    <p className="text-cream/50 text-xs">{t.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider from="teal" to="cream" flip />

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <BrandMark size="lg" color="pink" className="mb-6" />
          </AnimatedSection>
          <SectionHeading color="charcoal" align="center">
            Ready to create something beautiful?
          </SectionHeading>
          <AnimatedSection>
            <p className="text-charcoal/60 leading-relaxed mb-10 max-w-xl mx-auto text-lg">
              Let's talk about your project. No obligation, no pressure. Just a conversation about what you need and how I can help.
            </p>
            <Button to="/contact" variant="primary">Get in Touch</Button>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}
