import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Skills from './components/sections/Skills.jsx'
import Projects from './components/sections/Projects.jsx'
import Process from './components/sections/Process.jsx'
import Contact from './components/sections/Contact.jsx'

import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/sections.css'

/**
 * Section order: hero, about, skills, selected work, process, contact.
 *
 * Skills & Services is a single 4-up grid. There is no standalone Services
 * section, no testimonials, and no technology logo wall. Numeric stats,
 * counters and logo walls stay off the page.
 *
 * The soft blurred orbs are fixed to the viewport behind everything, so the
 * whole page shares one airy ground rather than alternating bands.
 */
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* Decorative colour glows. Hidden from assistive tech. */}
      <div className="orbs" aria-hidden="true">
        <span className="orb orb--silver" />
        <span className="orb orb--silver-alt" />
        <span className="orb orb--violet" />
      </div>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
