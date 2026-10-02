import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import { processSteps } from '../../data/process.js'

/** Four numbered steps, in the style of the reference sites. */
export default function Process() {
  return (
    <section className="section process on-dark" aria-labelledby="process-title">
      <div className="band-bg" aria-hidden="true">
        <span className="band-bg__grid" />
      </div>

      <div className="container">
        <SectionHeading
          id="process-title"
          eyebrow="How I work"
          title="Four steps, in the same order every time."
          split
        />

        <ol className="process__grid">
          {processSteps.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 70}>
              <article className="process__step">
                <span className="process__number" aria-hidden="true">
                  {step.number}
                </span>
                <h3 className="process__title">
                  <span className="u-sr-only">Step {index + 1}: </span>
                  {step.title}
                </h3>
                <p className="process__summary">{step.summary}</p>
                <p className="process__detail">{step.detail}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}