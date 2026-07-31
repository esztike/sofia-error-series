import StepRow from './StepRow'
import '../styles/sofia-screens.css'

const STEPS = [
  {
    status: 'ok',
    name: 'Create calendar event',
    detail: <>1 event · Mon Mar 24 · 9am–5pm PST<br />Event ID: cal_a1b2</>,
    detailVariant: 'ok',
  },
  {
    status: 'ok',
    name: 'Send invitation',
    detail: <>Delivered to 4 recipients<br />Jamie R, Priya N, Omar S, Sam S</>,
    detailVariant: 'ok',
  },
  {
    status: 'fail',
    name: 'Attach onboarding document',
    detail: <>Drive API returned 403 Forbidden<br />File: Onboarding 2025.pdf<br />"Insufficient permissions to share with external users"</>,
    detailVariant: 'fail',
  },
  {
    status: 'pending',
    name: 'Send confirmation summary',
    detail: 'Pending · dependent on step 3',
    detailVariant: null,
  },
]

export default function SofiaScreen3() {
  return (
    <div className="sofia-screen-content">

      {/* ── Context chip ── */}
      <div className="sofia-context-chip">
        <span aria-hidden="true">📄</span> Based on task started at 9:38am · Mar 18
      </div>

      {/* ── Step log ── */}
      <p className="sofia-section-label">Step log</p>
      <div className="sofia-card">
        <div className="sofia-steps-list">
          {STEPS.map((step, i) => (
            <StepRow key={i} {...step} />
          ))}
        </div>
      </div>

      {/* ── Unseen user impact ── */}
      <p className="sofia-section-label">Unseen user impact</p>
      <div className="sofia-thirdparty-card">
        <p className="sofia-thirdparty-text">
          <strong>4 new hires received the calendar invite.</strong> They'll have no onboarding doc Monday unless you take action.
        </p>
      </div>

      {/* ── Assumptions ── */}
      <p className="sofia-section-label">Assumptions</p>
      <div className="sofia-assumption-card">
        <div className="sofia-assumption-row">
          <span className="sofia-assumption-key">Document</span>
          <span className="sofia-assumption-val">Chosen most recent file matching "onboarding" · may not be what you meant</span>
        </div>
        <div className="sofia-assumption-row">
          <span className="sofia-assumption-key">Sharing</span>
          <span className="sofia-assumption-val">Assumed external sharing was enabled. It is not.</span>
        </div>
      </div>

    </div>
  )
}
