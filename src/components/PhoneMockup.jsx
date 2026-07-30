export default function PhoneMockup({ variant = 'sofia', children }) {
  const isSofia = variant === 'sofia'

  return (
    <div className={`phone-mockup phone-mockup--${variant}`}>

      {isSofia && (
        <div className="phone-header" aria-hidden="true">
          <div className="phone-back">
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path d="M8 2L2 8L8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="phone-title-group">
            <span className="phone-title">Sofia</span>
            <span className="phone-subtitle">Personal agent</span>
          </div>
          <div className="phone-avatar">S</div>
        </div>
      )}

      <div className="phone-screen">
        {children}
      </div>

      {isSofia && (
        <div className="phone-nav" aria-hidden="true">
          <div className="phone-nav-item">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 10L11 3L19 10V19H15V14H7V19H3V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="phone-nav-item phone-nav-item--active">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4 6H18M4 11H18M4 16H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="phone-nav-item">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect x="2" y="5" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 8L11 13.5L20 8" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="phone-nav-item">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 3C8.24 3 6 5.24 6 8V13L4 15H18L16 13V8C16 5.24 13.76 3 11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M9 15C9 16.1 9.9 17 11 17C12.1 17 13 16.1 13 15" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>
      )}

    </div>
  )
}
