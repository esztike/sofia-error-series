import '../styles/sofia-screens.css'

const LOG_STEPS = [
  {
    status: 'ok',
    title: 'Create calendar events',
    note: <>4 events · Mon Mar 24 · 9am–5pm PST<br />Event IDs: cal_a1b2 through cal_a1b5</>,
  },
  {
    status: 'ok',
    title: 'Send invitations',
    note: <>Delivered to 4 recipients · All accepted<br />Jamie R, Priya N, Omar S, Sam T</>,
  },
  {
    status: 'fail',
    title: 'Attach briefing documents',
    note: <>Drive API returned 403 Forbidden<br />File: Onboarding 2025 v2.pdf<br />"Insufficient permissions to share with external users"</>,
  },
  {
    status: 'skip',
    title: 'Send confirmation summary',
    note: 'Skipped — dependent on step 3',
  },
]

const LOG_DOT_ICON = { ok: '✓', fail: '✕', skip: '—' }

export default function SofiaScreen3() {
  return (
    <div className="sofia-screen-content">

      {/* ── Context chip ── */}
      <div className="sofia-context-chip">
        <span aria-hidden="true">📄</span> Based on task started at 9:38am · Mar 22
      </div>

      {/* ── Step-by-step log ── */}
      <div className="sofia-log-card">
        <div className="sofia-log-header">
          <p className="sofia-log-header-title">Step-by-step log</p>
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

      {/* ── Third-party impact ── */}
      <div className="sofia-thirdparty-card">
        <p className="sofia-thirdparty-label">
          <span aria-hidden="true">↗</span> Third-party impact
        </p>
        <p className="sofia-thirdparty-text">
          <strong>4 new hires have already accepted</strong> the calendar invite. They'll arrive Monday without briefing materials unless you take action. Undoing the invites would send cancellations to all of them.
        </p>
      </div>

      {/* ── Assumptions ── */}
      <div className="sofia-assumption-card">
        <p className="sofia-assumption-heading">Sofia's assumptions</p>
        <div className="sofia-assumption-row">
          <span className="sofia-assumption-key">Document</span>
          <span className="sofia-assumption-val">Chose most recent file matching "onboarding" — may not be what you meant</span>
        </div>
        <div className="sofia-assumption-row">
          <span className="sofia-assumption-key">Sharing</span>
          <span className="sofia-assumption-val">Assumed external sharing was enabled. It isn't for this Drive.</span>
        </div>
      </div>

    </div>
  )
}
