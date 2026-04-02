import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'
import Button from '../components/Button'
import WaveDivider from '../components/WaveDivider'
import Asterisk from '../components/Asterisk'

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

export default function About() {
  return (
    <PageTransition>
      <PageHeader title="Hi, I'm Tessa" />

      {/* Intro subtitle */}
      <section className="pb-8 lg:pb-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
              Brand designer, former restaurant owner, director in 3 small businesses, and someone who actually understands what it's like to run a small business in Kenya.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Who am I */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl shadow-charcoal/10">
                <img
                  src="/tessa-1.png"
                  alt="Tessa, founder of Chapa Rangi Design Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15} direction="right">
              <p className="text-xs tracking-[0.2em] uppercase text-pink mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-pink" />
                About me
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-6">Who am I</h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                I'm a Kenyan-German designer based in Nanyuki, and before I started Chapa Rangi, I ran Sandai Farm, a boutique lodge and homestay in the Laikipia region, along with Sandai Weavers, a lifestyle brand.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                For years, I juggled guest bookings, Instagram posts, event planning, and everything in between. I know what it's like to need your brand to look professional while you're also fixing a broken water pump or prepping for a full house of guests.
              </p>

              <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-6">What I've learned</h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Running those businesses taught me that good design isn't just about looking pretty. It's practical. It builds trust with your customers. It saves you time when you have templates you can actually use. And it works quietly in the background, making your business feel more cohesive and professional without you having to think about it.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                But I also learned that most designers don't understand small businesses. They deliver brand guidelines you'll never look at again, or they design Instagram posts that don't match how you actually want to show up.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Chapa Rangi */}
      <section className="py-16 lg:py-24 bg-warm-white/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <p className="text-xs tracking-[0.2em] uppercase text-pink mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-pink" />
                The mission
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-6">Why Chapa Rangi</h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                That's why I started Chapa Rangi. I wanted to create branding and design that actually makes sense for the kinds of businesses I know best: lodges, cafes, tour operators, lifestyle brands. But also for any small business or creative venture that puts heart into what they do, wherever they are in the world.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                My process is straightforward. My timelines are realistic. And my design reflects who you actually are, not some polished, corporate version of your business.
              </p>
              <Button to="/services">See How I Can Help</Button>
            </AnimatedSection>
            <AnimatedSection delay={0.15} direction="right">
              <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl shadow-charcoal/10">
                <img
                  src="/tessa-2.png"
                  alt="Tessa working on a design project"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl shadow-charcoal/10">
                <img
                  src="/tessa-3.png"
                  alt="Tessa in her creative workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15} direction="right">
              <p className="text-xs tracking-[0.2em] uppercase text-pink mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-pink" />
                How I do things
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-6">My Approach</h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                I work with a handful of clients at a time so I can give each project the attention it deserves. I don't use templates. I don't rush. And I don't design in a vacuum. We collaborate, refine, and make sure the final result is something you're genuinely excited to use.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                If you're ready to stop overthinking your brand and start showing up consistently, let's work together.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Principles - Green asterisks as icons */}
      <WaveDivider from="cream" to="teal" />
      <section className="bg-teal py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading color="cream">How I work</SectionHeading>
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
                <h3 className="font-serif text-xl italic text-cream mb-3">{p.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{p.desc}</p>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-12">
            <Button to="/contact" variant="outline-light">Let's Work Together</Button>
          </AnimatedSection>
        </div>
      </section>
      <div className="bg-teal"><div className="max-w-4xl mx-auto"><div className="h-px bg-cream/10" /></div></div>
    </PageTransition>
  )
}
