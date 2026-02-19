import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import PageTransition from '../components/PageTransition'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'
import WaveDivider from '../components/WaveDivider'
import Button from '../components/Button'
import Asterisk from '../components/Asterisk'

const projectTypes = [
  'Brand Identity Kit',
  'Social Media Content',
  'Event & Campaign Design',
  'Brand Refresh',
  'A La Carte / Other',
]

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: [
      'It depends on the service:',
      '- Brand Identity: 2-3 weeks',
      '- Social Media Retainer: Ongoing monthly',
      '- Event Campaign: 1-2 weeks',
      '- Brand Refresh: 3-4 weeks',
      '',
      'Rush delivery is available for an additional 30% fee.',
    ],
  },
  {
    q: 'What if I need revisions?',
    a: ['All packages include 2-3 rounds of revisions (depending on the service). Extra rounds are available at an additional cost.'],
  },
  {
    q: 'Do you offer payment plans?',
    a: ["For projects over 50,000 KES, I'm happy to discuss a payment plan. Just send me a message and we'll work something out."],
  },
  {
    q: 'Can you help with printing?',
    a: ['Absolutely! I can coordinate with your printer or recommend trusted local printers in Nanyuki and Nairobi. Print coordination is available as an add-on.'],
  },
]

const timeline = [
  {
    title: 'Within 1-2 business days',
    desc: "I'll review your inquiry and send a reply. If your project is a good fit, I'll ask a few follow-up questions to understand your needs better.",
  },
  {
    title: 'Within 1 week',
    desc: "If we're moving forward, I'll send you a simple proposal with scope, timeline, and pricing. No obligation, take your time to review.",
  },
  {
    title: "Once you're ready",
    desc: "You pay a 50% deposit, sign a one-page contract, and we officially kick off. I'll send you a project timeline and get things moving.",
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://formspree.io/f/xykdpqgv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'First Name': formData.firstName,
          'Last Name': formData.lastName,
          Email: formData.email,
          'Project Type': formData.projectType,
          Message: formData.message,
        }),
      })

      if (response.ok) {
        // Send auto-reply via EmailJS (don't block on failure)
        emailjs.send('service_zlm2so2', 'template_g4kc4ub', {
          from_name: formData.firstName,
          from_email: formData.email,
        }, 'H13DJa7NBnTDyu4Hb').catch(() => {})

        setStatus('sent')
        setFormData({ firstName: '', lastName: '', email: '', projectType: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClasses = "w-full border-b-2 border-cream-dark bg-transparent py-3 text-charcoal placeholder:text-charcoal/30 focus:border-pink outline-none transition-colors duration-300"

  return (
    <PageTransition>
      <PageHeader
        title="Let's Talk About Your Project"
        subtitle="Whether you know exactly what you need or you're just exploring options, I'm here to help."
      />

      {/* Contact Form + Image */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-warm-white p-8 lg:p-10 rounded-sm shadow-sm border border-cream-dark/30">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-charcoal/70 mb-2">
                      First name<span className="text-pink">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-charcoal/70 mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className={inputClasses}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-charcoal/70 mb-2">
                      Email address<span className="text-pink">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hello@yourbusiness.com"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-charcoal/70 mb-2">
                      Project type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none cursor-pointer`}
                    >
                      <option value="">Select one</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mb-8">
                  <label className="block text-xs font-medium tracking-wider uppercase text-charcoal/70 mb-2">
                    Tell me about your project<span className="text-pink">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What does your business do? What are you looking for?"
                    className={`${inputClasses} resize-none`}
                  />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs text-charcoal/40">I'll respond within 1-2 business days.</p>
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-block bg-pink text-white px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-pink-dark transition-colors duration-300 disabled:opacity-50 shadow-lg shadow-pink/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </div>

                {status === 'sent' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 bg-teal/10 border border-teal/20 text-teal p-4 rounded-sm text-sm text-center"
                  >
                    Thanks for reaching out! I'll review your message and get back to you within 1-2 business days.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 bg-pink/10 border border-pink/20 text-pink p-4 rounded-sm text-sm text-center"
                  >
                    Something went wrong. Please try again or email me directly at hello@chaparangi.com.
                  </motion.div>
                )}
              </form>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={0.2} direction="right" className="lg:col-span-2">
              <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-xl shadow-charcoal/10 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1604148390744-de117e9cedce?w=500&h=667&fit=crop"
                  alt="Creative collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs tracking-wider uppercase text-charcoal/50 mb-1">Prefer email?</p>
                  <a href="mailto:hello@chaparangi.com" className="text-charcoal hover:text-pink transition-colors font-medium">
                    hello@chaparangi.com
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-charcoal/50 mb-1">Find me on</p>
                  <a href="https://www.instagram.com/chaparangi" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-pink transition-colors font-medium">
                    @chaparangi
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-charcoal/50 mb-1">Based in</p>
                  <p className="text-charcoal font-medium">Nanyuki, Kenya</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <WaveDivider from="cream" to="teal" />
      <section className="bg-teal py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading color="cream">What happens next?</SectionHeading>
          <div className="space-y-10">
            {timeline.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.1}>
                <div className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-pink/20 flex items-center justify-center">
                    <span className="font-serif text-pink text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-cream text-sm tracking-wider mb-2">
                      {step.title}
                    </h3>
                    <p className="text-cream/65 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider from="teal" to="cream" flip />

      {/* FAQs */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionHeading color="charcoal">Frequently Asked</SectionHeading>
          <div className="space-y-10">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 0.05}>
                <h3 className="font-serif text-xl italic text-charcoal mb-3">{faq.q}</h3>
                <div className="text-charcoal/60 text-sm leading-relaxed space-y-1.5">
                  {faq.a.map((line, j) => (
                    <p key={j} className={line === '' ? 'h-2' : line.startsWith('Rush') ? 'font-semibold text-charcoal/80' : ''}>
                      {line}
                    </p>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 text-center bg-cream-dark/30">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading color="pink" align="center">Ready to get started?</SectionHeading>
          <AnimatedSection>
            <p className="text-charcoal/60 mb-8">
              Scroll back up and fill out the form, or reach out directly.
            </p>
            <Button
              to="#"
              variant="primary"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to the Form
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}
