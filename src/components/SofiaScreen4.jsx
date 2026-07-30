import '../styles/sofia-screens.css'

const RECOVERY_OPTIONS = [
  {
    icon: '✉',
    color: 'var(--phone-status-ok)',
    rgb: '79,195,161',
    title: 'Send follow-up with view-only link',
    subtitle: 'Recommended',
    recommended: true,
    desc: 'Sofia sends a follow-up email to all four with a view-only link to the onboarding doc. Bypasses the Drive permission issue. The calendar invite stays exactly as it is.',
    tags: ['All 4 get the doc', 'Invite unchanged', '~2 min'],
  },
  {
    icon: '↺',
    color: 'var(--phone-status-warn)',
    rgb: '240,160,90',
    title: 'Update the invite with the doc attached',
    subtitle: 'Needs a permissions fix first',
    recommended: false,
    desc: 'Sofia re-sends the calendar invite with the onboarding doc attached. Requires you to fix the Drive permission issue.',
    tags: ['Fix required first', 'Invite updates for all 4', '10–15 min'],
  },
  {
    icon: '✎',
    color: 'var(--phone-accent-learned)',
    rgb: '176,126,245',
    title: 'Sofia drafts, you send',
    subtitle: 'Full control',
    recommended: false,
    desc: 'Sofia drafts a follow-up email and hands it to you. You review, adjust, and send it.',
    tags: ['You send', 'Full control', '~5 min'],
  },
  {
    icon: '⊘',
    color: '#8a93a8',
    rgb: '138,147,168',
    title: "I'll handle this myself",
    subtitle: 'Sofia steps back',
    recommended: false,
    desc: 'Sofia closes the task and takes no further action. The follow-up is yours to handle.',
    tags: ['Task closed', 'No further action'],
  },
]

export default function SofiaScreen4() {
  return (
    <div className="sofia-screen-content">

      {/* ── Jamie's reply notification (overlay) ── */}
      <div className="sofia-jamie-notif">
        <div className="sofia-jamie-notif-icon" aria-hidden="true">✉</div>
        <div className="sofia-jamie-notif-body">
          <div className="sofia-jamie-notif-meta">
            <span>Mail</span>
            <span>now</span>
          </div>
          <p className="sofia-jamie-notif-from">Jamie Rodriguez</p>
          <p className="sofia-jamie-notif-subject">Re: Onboarding Kickoff · Monday 9am</p>
          <p className="sofia-jamie-notif-preview">Hi Maya — I got the invite for Monday but don't see the onboarding doc…</p>
        </div>
      </div>

      {/* ── Recovery intro ── */}
      <div className="sofia-recovery-intro">
        <p className="sofia-recovery-intro-label">Task paused at step 3 · Choose how to continue</p>
        <p className="sofia-recovery-intro-text">Here are 4 ways forward. Pick one, or take over.</p>
      </div>

      {/* ── Recovery options ── */}
      {RECOVERY_OPTIONS.map((opt) => (
        <div
          key={opt.title}
          className="sofia-recovery-option"
          style={{ '--option-color': opt.color, '--option-rgb': opt.rgb }}
        >
          <div className="sofia-option-header">
            <div className="sofia-option-icon" aria-hidden="true">{opt.icon}</div>
            <div>
              <p className="sofia-option-title">{opt.title}</p>
              <p className={`sofia-option-subtitle${opt.recommended ? ' sofia-option-subtitle--recommended' : ''}`}>
                {opt.subtitle}
              </p>
            </div>
          </div>
          <p className="sofia-option-desc">{opt.desc}</p>
          <div className="sofia-option-meta">
            {opt.tags.map((tag) => (
              <span key={tag} className="sofia-option-tag">{tag}</span>
            ))}
          </div>
        </div>
      ))}

    </div>
  )
}
