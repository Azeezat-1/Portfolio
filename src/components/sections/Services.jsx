import SectionHeading from '../ui/SectionHeading.jsx'
import ServiceCard from '../ui/ServiceCard.jsx'
import Reveal from '../ui/Reveal.jsx'
import { services } from '../../data/services.js'

/**
 * Dark services band, placed between the two light sections so the page does
 * not sit in one mode throughout.
 */
export default function Services() {
  return (
    <section
      className="section services on-dark"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="band-bg" aria-hidden="true">
        <span className="band-bg__grid" />
      </div>

      <div className="container">
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="What I take on."
          split
        />

        <Reveal>
          <ul className="services__grid">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                summary={service.summary}
                deliverables={service.deliverables}
                icon={service.icon}
              />
            ))}
          </ul>
        </Reveal>

        <Reveal>
        </Reveal>
      </div>
    </section>
  )
}