import '../styles/jamie-screens.css'

export default function JamieScreen3() {
  return (
    <div className="jamie-screen-content">

      {/* ── In-app header (Calendar app) ── */}
      <div className="jamie-t3-header">
        <span className="jamie-t3-header-btn">Back</span>
        <span className="jamie-t3-header-title">Calendar Invite</span>
        <span className="jamie-t3-header-btn">Done</span>
      </div>

      <div className="jamie-t3-scroll">

        <div className="jamie-t3-list">

          {/* ── Invite head ── */}
          <div className="jamie-t3-row">
            <div className="jamie-t3-invite-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </div>
            <div>
              <p className="jamie-t3-eyebrow">Calendar invite</p>
              <p className="jamie-t3-invite-title">Onboarding Kickoff</p>
              <p className="jamie-t3-invite-organizer">Maya Chen <span className="jamie-t3-via">· via Sofia</span></p>
            </div>
          </div>

          {/* ── Date & time ── */}
          <div className="jamie-t3-row">
            <div className="jamie-t3-date-badge">
              <span className="jamie-t3-dow">Mon</span>
              <span className="jamie-t3-dom">24</span>
            </div>
            <div>
              <p className="jamie-t3-row-label">Date &amp; time</p>
              <p className="jamie-t3-row-value">Monday, March 24</p>
              <p className="jamie-t3-row-value jamie-t3-row-value--muted">9:00 AM – 5:00 PM</p>
            </div>
          </div>

          {/* ── Location ── */}
          <div className="jamie-t3-row">
            <div className="jamie-t3-row-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>
            </div>
            <div>
              <p className="jamie-t3-row-label">Location</p>
              <p className="jamie-t3-row-value">Meeting Room 3</p>
            </div>
          </div>

          {/* ── RSVP ── */}
          <div className="jamie-t3-rsvp">
            <p className="jamie-t3-rsvp-label">RSVP</p>
            <div className="jamie-t3-rsvp-btns">
              <span className="jamie-t3-rsvp-btn jamie-t3-rsvp-btn--yes">Yes</span>
              <span className="jamie-t3-rsvp-btn jamie-t3-rsvp-btn--no">No</span>
              <span className="jamie-t3-rsvp-btn jamie-t3-rsvp-btn--maybe">Maybe</span>
            </div>
          </div>

          {/* ── Notes ── */}
          <div className="jamie-t3-row-group">
            <div className="jamie-t3-notes-header">
              <div className="jamie-t3-row-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
              </div>
              <p className="jamie-t3-row-label">Notes</p>
            </div>
            <p className="jamie-t3-notes-text">Agenda and onboarding doc attached. Please review before Monday.</p>
          </div>

          {/* ── Attachment (absent) ── */}
          <div className="jamie-t3-row">
            <div className="jamie-t3-row-icon jamie-t3-row-icon--dim" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"/></svg>
            </div>
            <p className="jamie-t3-attach-text">No attachments</p>
          </div>

          {/* ── Guests ── */}
          <div className="jamie-t3-row">
            <div className="jamie-t3-row-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            </div>
            <div>
              <p className="jamie-t3-row-label">Guests</p>
              <p className="jamie-t3-guests-value">4 invited</p>
            </div>
          </div>

        </div>

        <div className="jamie-t3-cta">View in Calendar</div>

      </div>

    </div>
  )
}
