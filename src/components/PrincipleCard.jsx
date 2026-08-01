import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PrincipleCard({ principle, triggerRef, onContentAnimationEnd }) {
  return (
    <Accordion.Item value={principle.number} className="principle-item">
      <Accordion.Header>
        <Accordion.Trigger ref={triggerRef} className="principle-trigger">
          <div className="principle-trigger__text">
            <span className="principle-chip">
              <span className="principle-chip-id">
                <span
                  className="principle-chip-dot"
                  style={{ backgroundColor: `var(--color-principle-${principle.number.toLowerCase()})` }}
                />
                {principle.number} ·
              </span>
              {principle.shortLabel}
            </span>
            <p className="principle-trigger__title">{principle.title}</p>
          </div>
          <ChevronDown className="principle-chevron" size={18} aria-hidden="true" />
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content className="principle-content" onAnimationEnd={onContentAnimationEnd}>
        <div className="principle-content__inner">
          <div className="dp-overlay__header">
            <p className="dp-overlay__tagline">{principle.tagline}</p>
          </div>

          <div className="dp-overlay__body">
            <div className="overlay-section">
              <h4 className="overlay-label">Anti-pattern</h4>
              <p className="overlay-text">{principle.antiPattern}</p>
            </div>

            <div className="overlay-section">
              <h4 className="overlay-label">Principle in action</h4>
              <p className="overlay-text">{principle.principleInAction}</p>
            </div>

            <div className="overlay-section">
              <h4 className="overlay-label">Design requirements</h4>
              <div className="dp-screen-chips">
                {principle.screenChips.map(chip => (
                  <span key={chip} className="dp-screen-chip">{chip}</span>
                ))}
              </div>
            </div>

            <div className="overlay-section">
              <h4 className="overlay-label">Errors addressed</h4>
              <div className="dp-error-refs">
                {principle.addressesErrors.map(err => (
                  <Link
                    key={err.number}
                    to="/error-taxonomy"
                    className="dp-error-ref"
                    style={{
                      backgroundColor: `var(--color-error-${err.number}-bg)`,
                      color: `var(--color-error-${err.number}-text)`,
                    }}
                  >
                    {err.number} · {err.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="overlay-section overlay-section--research">
              <h4 className="overlay-label">Research note</h4>
              <p className="overlay-text">{principle.researchNote}</p>
            </div>

            {principle.designInteractionNote && (
              <div className="overlay-section dp-interaction-note">
                <h4 className="overlay-label">Design interaction note</h4>
                <p className="overlay-text">{principle.designInteractionNote}</p>
              </div>
            )}
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  )
}
