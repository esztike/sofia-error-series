import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'

export default function PhoneMockup({ variant = 'sofia', children }) {
  const isSofia = variant === 'sofia'

  const deviceProps = isSofia
    ? { device: 'iPhone X' }
    : { device: 'iPhone 8', color: 'silver' }

  return (
    <div className={`phone-mockup phone-mockup--${variant}`}>
      <DeviceFrameset {...deviceProps}>
        <div className={`phone-screen phone-screen--${variant}`}>

          <div className="phone-mockup__app-header" aria-hidden="true">
            <div className="phone-mockup__app-back">
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                <path d="M8 2L2 8L8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="phone-mockup__app-info">
              <span className="phone-mockup__app-title">
                {isSofia ? 'Sofia' : 'Jamie Rodriguez'}
              </span>
              {isSofia && (
                <span className="phone-mockup__app-subtitle">Personal agent</span>
              )}
            </div>
            <div className={`phone-mockup__app-avatar${isSofia ? '' : ' phone-mockup__app-avatar--jamie'}`}>
              {isSofia ? 'S' : 'JR'}
            </div>
          </div>

          <div className="phone-mockup__screen">
            {children}
          </div>

          {isSofia && (
            <div className="phone-mockup__bottom-nav" aria-hidden="true">
              <div className="phone-mockup__nav-item">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M3 10L11 3L19 10V19H15V14H7V19H3V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="phone-mockup__nav-item phone-mockup__nav-item--active">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 6H18M4 11H18M4 16H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="phone-mockup__nav-item">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="2" y="5" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 8L11 13.5L20 8" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="phone-mockup__nav-item">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 3C8.24 3 6 5.24 6 8V13L4 15H18L16 13V8C16 5.24 13.76 3 11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M9 15C9 16.1 9.9 17 11 17C12.1 17 13 16.1 13 15" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
          )}

        </div>
      </DeviceFrameset>
    </div>
  )
}
