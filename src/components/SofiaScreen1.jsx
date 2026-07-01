import StepRow from './StepRow'
import '../styles/sofia-screens.css'

const STEPS = [
  { status: 'ok',      name: 'Create calendar events',   detail: '4 events created · Mon 9am–5pm', detailVariant: 'ok'  },
  { status: 'ok',      name: 'Send invitations',          detail: '4 invites sent · all delivered',  detailVariant: 'ok'  },
  { status: 'running', name: 'Attach briefing documents', detail: 'Accessing Drive — please wait',   detailVariant: null  },
  { status: 'pending', name: 'Send confirmation summary', detail: 'Waiting',                         detailVariant: null  },
]

const ASSUMPTIONS = [
  { key: 'Start date',   value: 'Monday, Mar 24 — from your last message' },
  { key: 'Invites to',   value: '4 people in "New Hires Q1" contact group' },
  { key: 'Briefing doc', value: '"Onboarding 2025 v2.pdf" — most recent' },
]

export default function SofiaScreen1() {
  return (
    <div className="sofia-screen-content">

      {/* ── Task hero ── */}
      <div className="sofia-task-hero">
        <div className="sofia-task-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
            <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
          </svg>
        </div>
        <p className="sofia-task-name">Schedule onboarding sequence</p>
        <p className="sofia-task-desc">Setting up calendar events, sending invites, and attaching briefing docs for 4 new hires starting Monday.</p>
        <div className="sofia-progress-track">
          <div className="sofia-progress-fill" />
        </div>
        <div className="sofia-progress-meta">
          <span className="sofia-progress-pct">62% complete</span>
          <span className="sofia-progress-eta">~45 sec remaining</span>
        </div>
      </div>

      {/* ── Steps ── */}
      <p className="sofia-section-label">Task steps</p>
      <div className="sofia-card">
        <div className="sofia-steps-list">
          {STEPS.map((step, i) => (
            <StepRow key={i} {...step} />
          ))}
        </div>
      </div>

      {/* ── Assumptions ── */}
      <p className="sofia-section-label">Sofia's interpretation</p>
      <div className="sofia-assumption-card">
        <p className="sofia-assumption-heading">Assumptions made</p>
        {ASSUMPTIONS.map(({ key, value }) => (
          <div key={key} className="sofia-assumption-row">
            <span className="sofia-assumption-key">{key}</span>
            <span className="sofia-assumption-val">{value}</span>
          </div>
        ))}
      </div>

    </div>
  )
}
