import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo } from 'react'
import PageTransition from '../components/PageTransition'
import Button from '../components/Button'
import Asterisk from '../components/Asterisk'

// ─── Icons ───────────────────────────────────────────────────

const iconClass = "w-6 h-6 text-pink/70 group-hover:text-pink transition-colors duration-300"

const icons = {
  // Stage
  seedling: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20h10"/><path d="M12 20v-8"/><path d="M12 12c-3.5 0-6-2.5-6-6 4 0 6 2.5 6 6z"/><path d="M12 12c3.5 0 6-2.5 6-6-4 0-6 2.5-6 6z"/></svg>,
  puzzle: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.611a2.404 2.404 0 0 1-1.705.706 2.404 2.404 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.878-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.404 2.404 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.611-1.611a2.404 2.404 0 0 1 1.704-.706c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.878.29.493-.075.84-.505 1.02-.969a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02z"/></svg>,
  sparkles: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/></svg>,
  target: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  // Struggle
  phone: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  palette: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
  calendar: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/></svg>,
  eye: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>,
  // Content
  wrench: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  clock: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  archive: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>,
  compass: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>,
  // Priority
  gem: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M2 9h20"/><path d="M12 22L6 9"/><path d="M12 22l6-13"/><path d="M6 3l6 6 6-6"/></svg>,
  camera: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>,
  clipboard: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 14l2 2 4-4"/></svg>,
  refresh: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>,
  // Budget
  leaf: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 20 8 20 8s.5 7-5.2 9"/><path d="M11.7 13.5c-2.7 2-3.5 3.5-3.5 3.5"/><path d="M14 6.5c1 4 2 7.5-2.5 11"/></svg>,
  scale: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><path d="M16 7l-4-4-4 4"/><path d="M3 12c0 0 2.5-4 9-4s9 4 9 4"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="16" r="2"/></svg>,
  rocket: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>,
  thought: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>,
  globe: <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>,
}

// ─── Quiz Data ───────────────────────────────────────────────

const questions = [
  {
    id: 'stage',
    question: 'Where are you on your brand journey?',
    subtitle: 'No wrong answers. Just pick what feels closest.',
    options: [
      {
        label: "Starting fresh",
        desc: "I have a business idea (or a new one) and need a brand from scratch.",
        icon: icons.seedling,
        tags: ['identity', 'starter'],
      },
      {
        label: "Got something, but it's messy",
        desc: "I have a logo and some colours, but nothing feels cohesive.",
        icon: icons.puzzle,
        tags: ['refresh', 'identity'],
      },
      {
        label: "Established, needs a glow-up",
        desc: "My brand works, but it's starting to feel dated or outgrown.",
        icon: icons.sparkles,
        tags: ['refresh', 'web'],
      },
      {
        label: "Just need specific things done",
        desc: "I know exactly what I need: a menu, some posts, a flyer.",
        icon: icons.target,
        tags: ['alacarte', 'campaign'],
      },
    ],
  },
  {
    id: 'struggle',
    question: "What's your biggest brand headache right now?",
    subtitle: 'Pick the one that makes you sigh the loudest.',
    options: [
      {
        label: "My Instagram looks like a mess",
        desc: "Every post looks different. No consistent look or feel.",
        icon: icons.phone,
        tags: ['social', 'identity'],
      },
      {
        label: "I don't have a real logo or brand",
        desc: "I'm using something I made in Canva or a friend threw together.",
        icon: icons.palette,
        tags: ['identity', 'starter'],
      },
      {
        label: "I have an event or launch coming up",
        desc: "I need materials that look professional, and soon.",
        icon: icons.calendar,
        tags: ['campaign'],
      },
      {
        label: "People don't recognise my brand",
        desc: "My business is great, but the visual side doesn't reflect that.",
        icon: icons.eye,
        tags: ['refresh', 'identity', 'web'],
      },
    ],
  },
  {
    id: 'content',
    question: 'How do you handle your visual content today?',
    subtitle: 'Be honest. We all start somewhere.',
    options: [
      {
        label: "I DIY everything",
        desc: "Canva, phone photos, and a lot of hoping for the best.",
        icon: icons.wrench,
        tags: ['social', 'identity'],
      },
      {
        label: "I post when I remember to",
        desc: "My social media is inconsistent at best, ghost town at worst.",
        icon: icons.clock,
        tags: ['social'],
      },
      {
        label: "I have some materials, but they're old",
        desc: "Business cards from 2019, a logo that's been through three printers.",
        icon: icons.archive,
        tags: ['refresh', 'alacarte'],
      },
      {
        label: "I haven't started yet",
        desc: "Literally nothing. Blank canvas. That's why I'm here.",
        icon: icons.compass,
        tags: ['identity', 'starter'],
      },
    ],
  },
  {
    id: 'priority',
    question: 'If you could fix one thing this month, what would it be?',
    subtitle: 'Think about what would make the biggest difference.',
    options: [
      {
        label: "A logo and brand I'm proud of",
        desc: "Something I can put on everything, from my signage to my email signature.",
        icon: icons.gem,
        tags: ['identity'],
      },
      {
        label: "Social media that actually looks good",
        desc: "Templates I can reuse, a consistent feed, content I don't stress about.",
        icon: icons.camera,
        tags: ['social'],
      },
      {
        label: "Marketing materials for an event",
        desc: "Posters, flyers, social graphics for something coming up.",
        icon: icons.clipboard,
        tags: ['campaign'],
      },
      {
        label: "A full brand update",
        desc: "Everything refreshed: logo, colours, social, the works.",
        icon: icons.refresh,
        tags: ['refresh', 'web'],
      },
    ],
  },
  {
    id: 'budget',
    question: 'What kind of investment feels right for you?',
    subtitle: "This helps me recommend the right starting point. All prices are in KES.",
    options: [
      {
        label: "Keep it lean",
        desc: "Under 20,000 KES. I want something specific and focused.",
        icon: icons.leaf,
        tags: ['alacarte', 'campaign'],
      },
      {
        label: "Middle ground",
        desc: "20,000 to 40,000 KES. Ready to invest in something solid.",
        icon: icons.scale,
        tags: ['social', 'identity', 'campaign'],
      },
      {
        label: "Let's do this properly",
        desc: "40,000+ KES. I want a comprehensive brand solution.",
        icon: icons.rocket,
        tags: ['identity', 'refresh', 'web'],
      },
      {
        label: "Not sure yet",
        desc: "I'd like to understand my options first.",
        icon: icons.thought,
        tags: ['identity', 'social', 'refresh', 'campaign', 'alacarte'],
      },
    ],
  },
]

// ─── Service Recommendations ─────────────────────────────────

const serviceRecommendations = {
  identity: {
    title: 'Brand Identity Kit',
    match: 'Perfect match',
    desc: "You need a strong foundation. A full brand identity gives you a logo, colour palette, typography, and guidelines you can use everywhere, from your signage to your social media.",
    price: 'From 35,000 KES',
    timeline: '2-3 weeks',
    color: 'teal',
    includes: [
      'Primary logo and wordmark',
      'Colour palette and typography system',
      'Brand guidelines document',
      'Business card and letterhead design',
      'Social media profile setup',
    ],
  },
  refresh: {
    title: 'Brand Refresh',
    match: 'Great fit',
    desc: "Your brand has history, it just needs a modern update. A refresh keeps what works and elevates everything else so your visual identity matches where your business is now.",
    price: 'From 40,000 KES',
    timeline: '3-4 weeks',
    color: 'pink',
    includes: [
      'Audit of existing brand materials',
      'Refined logo and secondary marks',
      'Updated colour palette and typography',
      'Refreshed social media templates',
      'Updated brand guidelines',
    ],
  },
  social: {
    title: 'Social Media Content',
    match: 'Recommended',
    desc: "Consistency is everything on social media. Monthly content packs with reusable templates mean you show up regularly without the stress of designing from scratch every time.",
    price: 'From 20,000 KES/month',
    timeline: 'Ongoing',
    color: 'teal',
    includes: [
      'Monthly content pack (15-20 posts)',
      'Reusable Instagram templates',
      'Story highlight covers',
      'Content calendar framework',
      'Hashtag and caption guide',
    ],
  },
  campaign: {
    title: 'Event & Campaign Design',
    match: 'Good starting point',
    desc: "You have something specific coming up and need it to look great. Posters, social graphics, and campaign materials designed to feel cohesive and professional.",
    price: 'From 15,000 KES',
    timeline: '1 week',
    color: 'pink',
    includes: [
      'Event poster design (print-ready)',
      'Social media announcement graphics',
      'WhatsApp-friendly invitation graphics',
      'Event day signage templates',
    ],
  },
  alacarte: {
    title: 'A La Carte Design',
    match: 'Flexible option',
    desc: "You know what you need, and it's something specific. A single logo, a menu design, a set of business cards. No full package required.",
    price: 'Custom pricing',
    timeline: 'Varies',
    color: 'teal',
    includes: [
      'Single logo or icon design',
      'Menu or brochure layout',
      'Business card design',
      'Individual social media graphics',
    ],
  },
  starter: {
    title: 'Brand Starter Session',
    match: 'First step',
    desc: "Not sure where to begin? A discovery call can help us figure out exactly what your business needs. No commitment, no pressure, just a conversation.",
    price: 'Free',
    timeline: '30 minutes',
    color: 'pink',
    includes: [
      'One-on-one video or phone call',
      'Brand assessment and quick wins',
      'Service recommendation',
      'No obligation or commitment',
    ],
  },
  web: {
    title: 'Web Design & Development',
    match: 'Premium solution',
    desc: "Your business deserves a website that works as hard as you do. A custom-designed site gives you a professional online home, builds credibility with new customers, and makes it easy for people to find you and get in touch.",
    price: 'From 80,000 KES',
    timeline: '4-6 weeks',
    color: 'teal',
    includes: [
      'Custom responsive website design',
      'Mobile-first development',
      'Contact forms and enquiry system',
      'Basic SEO setup',
      'Hosting guidance and setup support',
      'Content management training',
    ],
  },
}

// ─── Scoring Logic ───────────────────────────────────────────

function calculateResults(answers) {
  const tagCounts = {}

  answers.forEach(answer => {
    if (answer?.tags) {
      answer.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1
      })
    }
  })

  // Sort tags by count, descending
  const sorted = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)

  // Return top 3 recommendations (or fewer if there aren't enough)
  const topTags = sorted.slice(0, 3).map(([tag]) => tag)
  return topTags.map(tag => serviceRecommendations[tag]).filter(Boolean)
}

// ─── Sub-components ──────────────────────────────────────────

function ProgressBar({ current, total }) {
  const progress = ((current + 1) / total) * 100

  return (
    <div className="w-full max-w-md mx-auto mb-12">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs tracking-[0.15em] uppercase text-charcoal/40">
          Question {current + 1} of {total}
        </span>
        <span className="text-xs tracking-[0.15em] uppercase text-charcoal/40">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="h-1 bg-charcoal/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-pink rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </div>
  )
}

function QuestionCard({ question, onAnswer, questionIndex }) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="max-w-3xl mx-auto"
    >
      <div className="text-center mb-10">
        <motion.h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {question.question}
        </motion.h2>
        <motion.p
          className="text-charcoal/50 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          {question.subtitle}
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
        {question.options.map((option, i) => (
          <motion.button
            key={option.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
            onClick={() => onAnswer(option)}
            className="group relative text-left p-5 md:p-6 rounded-sm border-2 border-charcoal/5 bg-warm-white/40 hover:border-pink/40 hover:bg-warm-white transition-all duration-300 cursor-pointer"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-4">
              <span className="shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                {option.icon}
              </span>
              <div>
                <p className="font-medium text-charcoal mb-1 group-hover:text-pink transition-colors duration-300">
                  {option.label}
                </p>
                <p className="text-charcoal/50 text-sm leading-relaxed">
                  {option.desc}
                </p>
              </div>
            </div>

            {/* Hover accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-sm" />
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

function ResultsView({ results, onRestart }) {
  const [expanded, setExpanded] = useState({})

  function toggleExpanded(title) {
    setExpanded(prev => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="max-w-4xl mx-auto"
    >
      {/* Results header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-6"
        >
          <Asterisk color="pink" size={56} animate="none" opacity={0.8} />
        </motion.div>

        <motion.h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Here's what I'd <span className="italic text-pink">recommend</span>
        </motion.h2>
        <motion.p
          className="text-charcoal/50 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          Based on your answers, these are the services that would make the biggest difference for your brand right now.
        </motion.p>
      </div>

      {/* Recommendation cards */}
      <div className="space-y-6 mb-12">
        {results.map((rec, i) => {
          const isOpen = !!expanded[rec.title]

          return (
            <motion.div
              key={rec.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
              className={`rounded-sm overflow-hidden ${
                i === 0 ? 'ring-2 ring-pink/30' : ''
              }`}
            >
              <div className={`p-8 md:p-10 ${
                rec.color === 'teal' ? 'bg-teal text-cream' : 'bg-pink text-cream'
              }`}>
                {/* Match badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    {i === 0 && (
                      <span className="inline-block text-[10px] tracking-[0.2em] uppercase bg-cream/20 px-3 py-1 rounded-sm mb-3">
                        {rec.match}
                      </span>
                    )}
                    <h3 className="font-serif text-2xl md:text-3xl">{rec.title}</h3>
                  </div>
                  <span className="font-serif text-5xl md:text-6xl text-cream/10 leading-none shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <p className="text-cream/80 leading-relaxed mb-6 max-w-2xl">
                  {rec.desc}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="text-xs tracking-wider uppercase bg-cream/10 px-3 py-1.5 rounded-sm">
                    {rec.price}
                  </span>
                  <span className="text-xs tracking-wider uppercase bg-cream/10 px-3 py-1.5 rounded-sm">
                    {rec.timeline}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button to="/contact" variant="outline-light">
                    Let's Talk About This
                  </Button>
                  <button
                    onClick={() => toggleExpanded(rec.title)}
                    className="inline-flex items-center gap-2 text-cream/60 text-xs tracking-[0.15em] uppercase hover:text-cream transition-colors duration-200 py-3 cursor-pointer"
                  >
                    {isOpen ? "Show less" : "What's included"}
                    <motion.svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </motion.svg>
                  </button>
                </div>

                {/* Collapsible includes section */}
                <AnimatePresence>
                  {isOpen && rec.includes && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-cream/15">
                        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-cream/40 mb-4">
                          What's included
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                          {rec.includes.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm text-cream/75 leading-relaxed">
                              <svg className="w-4 h-4 text-cream/40 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom actions */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        <p className="text-charcoal/40 text-sm">
          Not quite right? You can always retake the quiz or reach out directly.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            onClick={onRestart}
            className="text-xs tracking-[0.15em] uppercase text-charcoal/50 hover:text-charcoal transition-colors duration-200 flex items-center gap-2"
            whileHover={{ x: -3 }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 4v6h6M23 20v-6h-6" />
              <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" />
            </svg>
            Retake Quiz
          </motion.button>
          <span className="text-charcoal/20">|</span>
          <Button to="/contact" variant="primary">Book a Discovery Call</Button>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Welcome screen ──────────────────────────────────────────

function WelcomeScreen({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="inline-block mb-8"
      >
        <Asterisk color="pink" size={64} animate="none" opacity={0.7} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xs tracking-[0.3em] uppercase text-charcoal/40 mb-4 flex items-center justify-center gap-3"
      >
        <span className="w-8 h-px bg-pink/50" />
        Brand Quiz
        <span className="w-8 h-px bg-pink/50" />
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] mb-6"
      >
        Let's find your
        <br />
        <span className="italic text-pink">perfect fit.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-charcoal/60 leading-relaxed mb-4 max-w-md mx-auto"
      >
        Answer five quick questions about your business and brand, and I'll recommend the services that make the most sense for where you are right now.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="text-charcoal/40 text-sm mb-10"
      >
        Takes about 1 minute. No email required.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.button
          onClick={onStart}
          className="inline-block px-10 py-4 bg-pink text-white text-xs font-semibold tracking-[0.2em] uppercase rounded-sm shadow-lg shadow-pink/20 hover:bg-pink-dark transition-colors duration-300"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          Start the Quiz
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

// ─── Main Component ──────────────────────────────────────────

export default function BrandQuiz() {
  const [phase, setPhase] = useState('welcome') // 'welcome' | 'questions' | 'results'
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState([])

  const results = useMemo(() => {
    if (phase === 'results') return calculateResults(answers)
    return []
  }, [phase, answers])

  function handleStart() {
    setPhase('questions')
  }

  function handleAnswer(option) {
    const newAnswers = [...answers, option]
    setAnswers(newAnswers)

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      setPhase('results')
    }
  }

  function handleRestart() {
    setPhase('welcome')
    setCurrentQ(0)
    setAnswers([])
  }

  return (
    <PageTransition>
      <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center relative overflow-hidden">
        {/* Background decorations */}
        <Asterisk
          color="green"
          size={200}
          animate="none"
          opacity={0.03}
          className="absolute top-10 -right-16 lg:right-10"
        />
        <Asterisk
          color="pink"
          size={140}
          animate="none"
          opacity={0.04}
          className="absolute -bottom-10 -left-10 lg:left-20"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 w-full">
          <AnimatePresence mode="wait">
            {phase === 'welcome' && (
              <WelcomeScreen key="welcome" onStart={handleStart} />
            )}

            {phase === 'questions' && (
              <motion.div
                key={`question-${currentQ}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ProgressBar current={currentQ} total={questions.length} />
                <QuestionCard
                  question={questions[currentQ]}
                  onAnswer={handleAnswer}
                  questionIndex={currentQ}
                />
              </motion.div>
            )}

            {phase === 'results' && (
              <ResultsView
                key="results"
                results={results}
                onRestart={handleRestart}
              />
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  )
}
