import UtilityBar from './components/layout/UtilityBar.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import TechMarquee from './components/sections/TechMarquee.jsx'
import About from './components/sections/About.jsx'
import ServicesBand from './components/sections/ServicesBand.jsx'
import Projects from './components/sections/Projects.jsx'
import Process from './components/sections/Process.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
import Contact from './components/sections/Contact.jsx'

import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/sections.css'

/**
 * Midnight Glass portfolio (v13 brief).
 *
 * Section order: utility bar, nav, hero, technologies, about, services,
 * selected work, process, reviews, contact, footer.
 *
 * All sections share one light frosted-glass ground so the page reads as one
 * calm surface; the deep midnight appears only in the hero, nav (over the
 * hero), contact band and footer. Numeric stats, counters and em dashes stay
 * off the page; credibility comes from real projects, real reviews and clear
 * writing.
 */
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <UtilityBar />
      <Navbar />

      <main id="main">
        <Hero />
        <TechMarquee />
        <About />
        <ServicesBand />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  )
}