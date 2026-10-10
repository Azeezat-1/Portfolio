import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import { testimonials } from '../../data/testimonials.js'

/**
 * Client reviews (brief §3.9).
 *
 * A card renders only when the quote is pasted in AND approved. Until then it
 * shows a refined "Review coming soon" state with the business name, never any
 * invented review text.
 */

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

export default function Testimonials() {
  return (
    <section
      className="section band testimonials"
      id="reviews"
      aria-labelledby="reviews-title"
    >
      <div className="container">
        <SectionHeading
          id="reviews-title"
          eyebrow="Client reviews"
          title={
            <>
              What My Clients <span className="hi">Say</span>
            </>
          }
        />

        <Reveal>
          <ul className="testimonials__grid">
            {testimonials.map((review) => {
              const approved = review.approved && review.quote.trim().length > 0
              return (
                <li key={review.business}>
                  <article className="card testimonial">
                    <span className="testimonial__quote-icon" aria-hidden="true">
                      <Icon name="quote" />
                    </span>

                    {approved ? (
                      <blockquote className="testimonial__text">
                        {review.quote.trim()}
                      </blockquote>
                    ) : (
                      <p className="testimonial__soon">
                        A short review is coming soon from{' '}
                        <strong>{review.business}</strong>. Real words from a
                        real client, never invented.
                      </p>
                    )}

                    <div className="testimonial__person">
                      <span className="testimonial__avatar" aria-hidden="true">
                        {initials(review.name)}
                      </span>
                      <span>
                        <span className="testimonial__name">{review.name}</span>
                        <span className="testimonial__role">
                          {review.role} at {review.business}
                        </span>
                      </span>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}