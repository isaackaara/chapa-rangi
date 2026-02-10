import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import ProjectView from './pages/ProjectView'
import Contact from './pages/Contact'
import BrandQuiz from './pages/BrandQuiz'

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<ProjectView />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quiz" element={<BrandQuiz />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
