import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'

/**
 * How Azeezat works, as four short principles. The ghost numerals follow the
 * reference sites without copying their content.
 */
const principles = [
  {
    number: '01',
    title: 'Start from the problem',
    text: 'A website is not the goal. I work out what someone is trying to do on it, and build around that.',
  },
  {
    number: '02',
    title: 'Pick the stack that fits',
    text: 'MERN or LAMP, WordPress or plain HTML and CSS. The choice follows your hosting, team and budget.',
  },
  {
    number: '03',
    title: 'Match the design',
    text: 'Given a Figma file I build it as drawn, and check it holds up at every screen size rather than only the mock-up width.',
  },
  {
    number: '04',
    title: 'Leave you able to run it',
    text: 'A site you cannot update is not finished. I hand it over with clear instructions.',
  },
]

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          id="about-title"
          eyebrow="About"
          title="I build the thing that solves the problem, not just the thing that looks finished."
          split
        />

        <div className="about__grid">
          <div className="about__prose">
            <p>
              Most projects start the same way: someone needs a website that
              does a specific job, and the existing options either do too much or
              cost more than it is worth. I build the version that fits.
            </p>
            <p>
              That means choosing the technology before writing any code. A
              business already on WordPress gets WordPress. A team that already
              runs servers will get a MERN or LAMP application, because
              duplicating infrastructure is a cost the client ends up paying.
            </p>
            <p>
              I care about the parts that are easy to skip: readable markup,
              sensible heading order, keyboard access, and pages that hold their
              layout on a small phone as well as a large monitor.
            </p>
          </div>

          <ol className="about__principles">
            {principles.map((item) => (
              <Reveal as="li" key={item.number} className="about__principle">
                <span className="about__principle-number" aria-hidden="true">
                  {item.number}
                </span>
                <div>
                  <h3 className="about__principle-title">{item.title}</h3>
                  <p className="about__principle-text">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}