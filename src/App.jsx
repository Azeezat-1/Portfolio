import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Skills from './components/sections/Skills.jsx'
import Services from './components/sections/Services.jsx'
import Projects from './components/sections/Projects.jsx'
import Process from './components/sections/Process.jsx'
import Achievements from './components/sections/Achievements.jsx'
import CallToAction from './components/sections/CallToAction.jsx'
import Contact from './components/sections/Contact.jsx'

import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/sections.css'

/**
 * Section order follows the brief: dark hero, light about and skills, a dark
 * services band, the light portfolio grid, then a dark closing run through
 * process, achievements, the invitation, contact and the footer.
 */
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Process />
        <Achievements />
        <CallToAction />
        <Contact />
      </main>

      <Footer />
    </>
  )
}