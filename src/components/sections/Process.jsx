import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import { processSteps } from '../../data/process.js'

/**
 * The four-step process (brief §3.8): glass cards in a row joined by a thin
 * connecting line. Step numbers stay off (earlier brief feedback), so each
 * card is an icon chip, a title and one line.
 */
export default function Process() {
  return (
    <section
      className="section band process"
      id="process"
      aria-labelledby="process-title"
    >
      <div className="container">
        <SectionHeading
          id="process-title"
          eyebrow="My process"
          title={
            <>
              A Simple Process <span className="hi">You Can Follow</span>
            </>
          }
        />

        <Reveal>
          <ol className="process__grid">
            {processSteps.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 80}>
                <article className="card process__step">
                  <span className={`chip chip--n${index % 4}`} aria-hidden="true">
                    <StepIcon index={index} />
                  </span>
                  <h3 className="process__title">{step.title}</h3>
                  <p className="process__summary">{step.summary}</p>
                </article>
              </Reveal>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}

/** One outline icon per step, matching the pastel chip it sits in. */
function StepIcon({ index }) {
  const icons = ['search', 'listChecks', 'code', 'checkCircle']
  return <Icon name={icons[index]} aria-hidden="true" />
}