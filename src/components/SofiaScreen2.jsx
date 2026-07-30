import StepRow from './StepRow'
import '../styles/sofia-screens.css'

const SNAPSHOT_STEPS = [
  { status: 'ok',      name: 'Create calendar event',    detail: 'Done',                    detailVariant: 'ok'   },
  { status: 'ok',      name: 'Send invitation',          detail: 'Done',                    detailVariant: 'ok'   },
  { status: 'fail',    name: 'Attach onboarding document', detail: 'Drive permission error',  detailVariant: 'fail' },
  { status: 'pending', name: 'Send confirmation summary', detail: 'Not started',             detailVariant: null   },
]

export default function SofiaScreen2() {
  return (
    <div className="sofia-screen-content">

      {/* ── Notification banner ── */}
      <div className="sofia-notification-banner">
        <div className="sofia-notif-icon" aria-hidden="true">⚠️</div>
        <div className="sofia-notif-text">
          <p className="sofia-notif-title">Sofia paused · action required</p>
          <p className="sofia-notif-time">Just now · Onboarding sequence</p>
        </div>
        <div className="sofia-notif-chevron" aria-hidden="true">›</div>
      </div>

      {/* ── Error sheet ── */}
      <div className="sofia-error-sheet">
        <div className="sofia-error-badge">Task paused</div>
        <p className="sofia-error-headline">Step 3 of 4 <em>failed</em></p>
        <p className="sofia-error-summary">Sofia couldn't attach the onboarding document due to a Drive permission error. The task is paused. Your new hires have a calendar invite but no attached material.</p>
        <div className="sofia-error-impact-row">
          <div className="sofia-impact-chip">
            <p className="sofia-impact-chip-label">Completed</p>
            <p className="sofia-impact-chip-value sofia-impact-chip-value--ok">2 / 4</p>
          </div>
          <div className="sofia-impact-chip">
            <p className="sofia-impact-chip-label">Impact</p>
            <p className="sofia-impact-chip-value sofia-impact-chip-value--warn">4 hires</p>
          </div>
        </div>
        <div className="sofia-error-actions">
          <div className="sofia-btn sofia-btn--primary">See full error detail</div>
          <div className="sofia-btn sofia-btn--secondary">Review recovery options</div>
        </div>
      </div>

      {/* ── Task snapshot ── */}
      <p className="sofia-section-label">Task snapshot</p>
      <div className="sofia-card sofia-card--snapshot">
        <div className="sofia-steps-list">
          {SNAPSHOT_STEPS.map((step, i) => (
            <StepRow key={i} {...step} />
          ))}
        </div>
      </div>

    </div>
  )
}
