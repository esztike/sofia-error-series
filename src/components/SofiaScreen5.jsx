import StepRow from './StepRow'
import '../styles/sofia-screens.css'

const STEP_LOG = [
  { status: 'ok', name: 'Create calendar event',    detail: '1 event · unchanged throughout',        detailVariant: 'ok' },
  { status: 'ok', name: 'Send invitation',          detail: '1 invite · delivered, 4 recipients',    detailVariant: 'ok' },
  { status: 'ok', name: 'Share onboarding document',  detail: 'View-only link · tested before sending', detailVariant: 'ok' },
  { status: 'ok', name: 'Send follow-up',           detail: 'Delivered to all 4 invitees',            detailVariant: 'ok' },
]

const WHAT_CHANGED = [
  {
    dot: 'ok',
    text: <><strong>Follow-up sent to all four</strong> · Jamie Rodriguez, Priya Nair, Omar Shaikh, and Sam Smith each received the view-only link</>,
  },
  {
    dot: 'ok',
    text: <><strong>Link verified first</strong> · Sofia tested the view-only link before sending</>,
  },
  {
    dot: 'accent',
    text: <><strong>Calendar untouched</strong> · the original event and invite are not modified</>,
  },
]

const PREF_CHOICES = [
  {
    title: 'Yes, always',
    sub: 'Sofia decides · no confirmation needed',
    badge: false,
  },
  {
    title: 'Yes, confirm each time',
    sub: 'Sofia suggests, you approve',
    badge: true,
  },
  {
    title: 'Not now',
    sub: "Sofia will ask again when it's relevant",
    badge: false,
  },
]

export default function SofiaScreen5() {
  return (
    <div className="sofia-screen-content">

      {/* ── Resolution hero ── */}
      <div className="sofia-resolution-hero">
        <div className="sofia-resolution-check" aria-hidden="true">✓</div>
        <p className="sofia-resolution-title">Task complete</p>
        <p className="sofia-resolution-desc">The follow-up went to all four new hires. Everyone has the onboarding doc for Monday.</p>
      </div>

      {/* ── Step log ── */}
      <p className="sofia-section-label">Step log</p>
      <div className="sofia-card">
        <div className="sofia-steps-list">
          {STEP_LOG.map((step, i) => (
            <StepRow key={i} {...step} />
          ))}
        </div>
      </div>

      {/* ── Recovery log ── */}
      <p className="sofia-section-label">Recovery log</p>
      <div className="sofia-what-changed">
        {WHAT_CHANGED.map((row, i) => (
          <div key={i} className="sofia-changed-row">
            <div className={`sofia-changed-dot${row.dot === 'accent' ? ' sofia-changed-dot--accent' : ''}`} />
            <p className="sofia-changed-text">{row.text}</p>
          </div>
        ))}
      </div>

      {/* ── Prevention log ── */}
      <p className="sofia-section-label">Prevention log</p>
      <div className="sofia-learned-card">
        <p className="sofia-learned-sublabel">Problem</p>
        <div className="sofia-learned-item">
          <span className="sofia-learned-ico" aria-hidden="true">✉</span>
          <p className="sofia-learned-text"><strong>The failure was a permission setting</strong> causing four people to wait on the onboarding doc.</p>
        </div>

        <p className="sofia-learned-sublabel">Preference</p>
        <div className="sofia-pref-prompt">
          <p className="sofia-pref-question">Use view-only links for external recipients by default?</p>
          {PREF_CHOICES.map((choice) => (
            <div key={choice.title} className="sofia-pref-choice">
              <div className="sofia-choice-radio" />
              <div className="sofia-choice-text">
                <p className="sofia-choice-title">{choice.title}</p>
                <p className="sofia-choice-sub">{choice.sub}</p>
              </div>
              {choice.badge && <span className="sofia-choice-badge">Recommended</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="sofia-btn sofia-btn--primary" style={{ marginTop: '4px' }}>Done</div>

    </div>
  )
}
