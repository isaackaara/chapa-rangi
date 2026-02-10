import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'
import BrandMark from '../components/BrandMark'
import Button from '../components/Button'
import WaveDivider from '../components/WaveDivider'
import Asterisk from '../components/Asterisk'

const mainServices = [
  {
    title: 'Brand Identity Kit',
    price: '35,000 – 50,000 KES',
    timeline: '2–3 weeks',
    ideal: 'New businesses or complete rebrands',
    desc: "A strong brand identity is the foundation for everything else: your Instagram, your menus, your signage. This package gives you a cohesive look you can use across every touchpoint.",
    cta: 'Start Your Brand',
    color: 'teal',
    image: 'https://images.unsplash.com/photo-1631089819675-ce4528460a32?w=600&h=400&fit=crop',
  },
  {
    title: 'Social Media Content',
    price: '20,000 – 30,000 KES/month',
    timeline: 'Ongoing monthly service',
    ideal: 'Businesses wanting consistent presence',
    desc: "Consistency builds trust. But when you're running a business, finding time to design posts is hard. This package handles it, so you show up regularly without the stress.",
    cta: 'Get Consistent',
    color: 'pink',
    image: 'https://images.unsplash.com/photo-1750235962826-ac7225ca4f01?w=600&h=400&fit=crop',
  },
  {
    title: 'Event & Campaign Design',
    price: '15,000 – 25,000 KES',
    timeline: '1 week',
    ideal: 'Launches, events, seasonal campaigns',
    desc: "Whether you're launching a new menu, hosting a market, or promoting a special offer, your campaign materials should look professional and feel cohesive.",
    cta: 'Plan My Campaign',
    color: 'teal',
    image: 'https://images.unsplash.com/photo-1763692108454-6cfa2b0af5c1?w=600&h=400&fit=crop',
  },
  {
    title: 'Brand Refresh',
    price: '40,000 – 60,000 KES',
    timeline: '3–4 weeks',
    ideal: 'Established businesses needing an update',
    desc: "Sometimes your brand just needs an update, not a complete overhaul. This package modernizes your look while keeping what still works.",
    cta: 'Refresh My Brand',
    color: 'pink',
    image: 'https://images.unsplash.com/photo-1604148390744-de117e9cedce?w=600&h=400&fit=crop',
  },
]

const extras = [
  {
    title: 'A La Carte Services',
    items: ['Single social media post', 'Logo design only', 'Menu or brochure design'],
    desc: "Need something specific? No need to commit to a full package. Let's chat about exactly what you need.",
    cta: 'Create My Design',
    color: 'teal',
  },
  {
    title: 'Small But Pretty',
    items: ['Invitations', 'Business cards', 'Letterheads', 'Document beautification'],
    desc: "The little details matter. From business cards to letterheads, these small touches make your business feel polished and intentional.",
    cta: 'Inquire About Services',
    color: 'pink',
  },
]

export default function Services() {
  return (
    <PageTransition>
      <PageHeader
        title="Services That Actually Fit Your Business"
        subtitle="Whether you need a full rebrand, ongoing social content, or a one-off campaign, I've built packages around how Kenyan small businesses actually work."
      />

      {/* Featured: Web Design */}
      <WaveDivider from="cream" to="teal" />
      <section className="bg-teal py-20 lg:py-28 relative overflow-hidden">
        <Asterisk
          color="green"
          size={160}
          animate="drift"
          opacity={0.06}
          className="absolute -top-8 -right-8 lg:right-16"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl shadow-black/20">
                <img
                  src="/web-design-service.png"
                  alt="Web design and development"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15} direction="right">
              <span className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase bg-pink/80 text-cream px-3 py-1.5 rounded-sm mb-6">
                Premium Service
              </span>
              <h3 className="font-serif text-3xl lg:text-4xl text-cream mb-4">Web Design &amp; Development</h3>
              <p className="font-serif text-lg italic text-cream/80 mb-6">
                Your brand deserves a home online that works as hard as you do.
              </p>
              <p className="text-cream/70 text-sm leading-relaxed mb-6">
                A professional website isn't a luxury anymore — it's where most of your customers will meet you first. Whether you need a simple site to share your story or a full booking platform, I design websites that look great, load fast, and make it easy for people to reach you.
              </p>
              <div className="flex flex-wrap gap-3 mb-5">
                <span className="text-xs tracking-wider uppercase bg-cream/10 px-3 py-1 rounded-sm text-cream">80,000 – 150,000+ KES</span>
                <span className="text-xs tracking-wider uppercase bg-cream/10 px-3 py-1 rounded-sm text-cream">4–6 weeks</span>
              </div>
              <p className="text-cream/50 text-xs tracking-wider uppercase mb-6">Ideal for: Established businesses ready to invest in their digital presence</p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                {[
                  'Custom responsive design',
                  'Mobile-first development',
                  'Contact forms & enquiry system',
                  'Basic SEO setup',
                  'Hosting guidance & setup',
                  'Content management training',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-cream/70 leading-relaxed">
                    <svg className="w-4 h-4 text-pink/70 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Button to="/contact" variant="outline-light">Discuss Your Website</Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <WaveDivider from="teal" to="cream" flip />

      {/* Main Service Cards */}
      <section className="py-20 lg:py-28" id="pricing">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <motion.div
                  className={`h-full rounded-sm overflow-hidden ${
                    service.color === 'teal' ? 'bg-teal' : 'bg-pink'
                  }`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-70 hover:opacity-80 transition-opacity duration-500"
                    />
                  </div>
                  <div className="p-8 text-cream">
                    <h3 className="font-serif text-2xl lg:text-3xl mb-4">{service.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-5">
                      <span className="text-xs tracking-wider uppercase bg-cream/10 px-3 py-1 rounded-sm">{service.price}</span>
                      <span className="text-xs tracking-wider uppercase bg-cream/10 px-3 py-1 rounded-sm">{service.timeline}</span>
                    </div>
                    <p className="text-cream/60 text-xs tracking-wider uppercase mb-2">Ideal for: {service.ideal}</p>
                    <p className="text-cream/80 text-sm leading-relaxed mb-8">{service.desc}</p>
                    <Button to="/contact" variant="outline-light">{service.cta}</Button>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Services */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {extras.map((extra, i) => (
              <AnimatedSection key={extra.title} delay={i * 0.1}>
                <div className={`h-full p-8 rounded-sm ${
                  extra.color === 'teal' ? 'bg-teal text-cream' : 'bg-pink text-cream'
                }`}>
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="font-serif text-2xl lg:text-3xl">{extra.title}</h3>
                    <BrandMark size="md" color={extra.color === 'teal' ? 'pink' : 'green'} />
                  </div>
                  <ul className="space-y-2 mb-6">
                    {extra.items.map((item) => (
                      <li key={item} className="text-sm text-cream/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-pink-light rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-cream/70 text-sm leading-relaxed mb-8">{extra.desc}</p>
                  <Button to="/contact" variant="outline-light">{extra.cta}</Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure CTA */}
      <section className="py-20 lg:py-28 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionHeading color="pink" align="center">Not sure which service you need?</SectionHeading>
          <AnimatedSection>
            <p className="text-charcoal/60 leading-relaxed mb-10 max-w-xl mx-auto">
              No problem. Take a quick quiz to find your perfect fit, or send me a message and I'll help you figure it out. No strings attached.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/quiz" variant="primary">Take the Brand Quiz</Button>
              <Button to="/contact">Send a Message</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}
