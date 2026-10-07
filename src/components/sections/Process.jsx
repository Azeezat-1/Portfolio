import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import { processSteps } from '../../data/process.js'

/**
 * The four-step process, as a row of frosted cards.
 *
 * Each step carries a "01"-style step badge, an icon, a short title and a
 * one-line description. The badges are step numbers (the brief explicitly
 * allows these) rather than fictional stats.
 */
export default function Process() {
  return (
    <section
      className="section process"
      id="process"
      aria-labelledby="process-title"
    >
      <div className="container">
        <SectionHeading
          id="process-title"
          eyebrow="My process"
          title="How I Work"
          split
        />

        <ol className="process__grid">
          {processSteps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 70}>
              <article className="card process__step">
                <span className="process__badge" aria-hidden="true">
                  {step.number}
                </span>
                <span className={`chip chip--n${index % 4}`}>
                  <StepIcon index={index} />
                </span>
                <h3 className="process__title">{step.title}</h3>
                <p className="process__summary">{step.summary}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

/** One outline icon per step, matching the pastel chip it sits in. */
function StepIcon({ index }) {
  const icons = ['search', 'listChecks', 'code', 'checkCircle']
  return <Icon name={icons[index]} aria-hidden="true" />
}
