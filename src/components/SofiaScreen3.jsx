import '../styles/sofia-screens.css'

const LOG_STEPS = [
  {
    status: 'ok',
    title: 'Create calendar event',
    note: <>1 event · Mon Mar 24 · 9am–5pm PST<br />Event ID: cal_a1b2</>,
  },
  {
    status: 'ok',
    title: 'Send invitation',
    note: <>Delivered to 4 recipients<br />Jamie R, Priya N, Omar S, Sam S</>,
  },
  {
    status: 'fail',
    title: 'Attach onboarding document',
    note: <>Drive API returned 403 Forbidden<br />File: Onboarding 2025.pdf<br />"Insufficient permissions to share with external users"</>,
  },
  {
    status: 'skip',
    title: 'Send confirmation summary',
    note: 'Pending · dependent on step 3',
  },
]

const LOG_DOT_ICON = { ok: '✓', fail: '✕', skip: '—' }

export default function SofiaScreen3() {
  return (
    <div className="sofia-screen-content">

      {/* ── Context chip ── */}
      <div className="sofia-context-chip">
        <span aria-hidden="true">📄</span> Based on task started at 9:38am · Mar 18
      </div>

      {/* ── Step-by-step log ── */}
      <div className="sofia-log-card">
        <div className="sofia-log-header">
          <p className="sofia-log-header-title">Step log</p>
          <p className="sofia-log-header-count">4 steps</p>
        </div>
        <div className="sofia-log-body">
          {LOG_STEPS.map((step, i) => (
            <div key={i} className="sofia-log-row">
              <div className="sofia-log-connector">
                <div className={`sofia-log-dot sofia-log-dot--${step.status}`}>
                  {LOG_DOT_ICON[step.status]}
                </div>
                {i < LOG_STEPS.length - 1 && <div className="sofia-log-line" />}
              </div>
              <div className="sofia-log-content">
                <p className={`sofia-log-title sofia-log-title--${step.status}`}>{step.title}</p>
                <p className={`sofia-log-note${step.status === 'fail' ? ' sofia-log-note--fail' : ''}`}>
                  {step.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Unseen user impact ── */}
      <div className="sofia-thirdparty-card">
        <p className="sofia-thirdparty-label">
          <span aria-hidden="true">↗</span> Unseen user impact
        </p>
        <p className="sofia-thirdparty-text">
          <strong>4 new hires received the calendar invite.</strong> They'll have no onboarding doc Monday unless you take action.
        </p>
      </div>

      {/* ── Assumptions ── */}
      <div className="sofia-assumption-card">
        <p className="sofia-assumption-heading">Sofia's assumptions</p>
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
