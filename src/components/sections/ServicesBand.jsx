import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import { services } from '../../data/services.js'

/**
 * Services (brief §3.6): a 4-up grid of glass cards on the shared light
 * ground. Each card is a pastel icon chip, a title, a two-line description
 * and a "Learn more" arrow that leads to Contact.
 */
export default function ServicesBand() {
  return (
    <section
      className="section band services"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container">
        <SectionHeading
          id="services-title"
          eyebrow="What I do"
          title={
            <>
              What I Can Build <span className="hi">For Your Business</span>
            </>
          }
        />

        <Reveal>
          <ul className="services__cards">
            {services.map((service, index) => (
              <li className="card services__card" key={service.title}>
                <span className={`chip chip--n${index % 4}`} aria-hidden="true">
                  <Icon name={service.icon} />
                </span>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-text">{service.text}</p>
                <a className="link-arrow" href="#contact">
                  Learn more
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}