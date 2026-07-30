import '../styles/jamie-screens.css'

export default function JamieScreen5() {
  return (
    <div className="jamie-t5-content">

      <div className="jamie-t5-wallpaper" aria-hidden="true">
        <div className="jamie-t5-wallpaper-sun" />
        <svg className="jamie-t5-wallpaper-birds" viewBox="0 0 60 20">
          <path d="M2,12 Q7,4 12,12 Q17,4 22,12" />
          <path d="M28,6 Q32,0 36,6 Q40,0 44,6" />
        </svg>
        <svg className="jamie-t5-wallpaper-mountains" viewBox="0 0 375 480" preserveAspectRatio="none">
          <path d="M0,280 Q47,255 94,272 Q141,290 188,265 Q235,240 282,268 Q329,285 375,258 L375,480 L0,480 Z" className="jamie-t5-wallpaper-hill jamie-t5-wallpaper-hill--far" />
          <path d="M0,340 Q60,305 120,330 Q180,358 240,320 Q300,290 375,315 L375,480 L0,480 Z" className="jamie-t5-wallpaper-hill jamie-t5-wallpaper-hill--mid" />
          <path d="M0,400 Q65,365 130,392 Q195,420 260,380 Q310,350 375,378 L375,480 L0,480 Z" className="jamie-t5-wallpaper-hill jamie-t5-wallpaper-hill--near" />
        </svg>
      </div>

      <div className="jamie-t5-lock-date">
        <p className="jamie-t5-lock-day">
          <span>Tue, March 18</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM4.22 4.22a1 1 0 0 1 1.42 0l.7.7a1 1 0 1 1-1.42 1.42l-.7-.7a1 1 0 0 1 0-1.42zm14.14 14.14a1 1 0 0 1 1.42 0l.7.7a1 1 0 1 1-1.42 1.42l-.7-.7a1 1 0 0 1 0-1.42zM2 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm18 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1zM4.22 19.78a1 1 0 0 1 0-1.42l.7-.7a1 1 0 1 1 1.42 1.42l-.7.7a1 1 0 0 1-1.42 0zM18.36 5.64a1 1 0 0 1 0-1.42l.7-.7a1 1 0 1 1 1.42 1.42l-.7.7a1 1 0 0 1-1.42 0z"/></svg>
          <span>Los Angeles</span>
        </p>
        <p className="jamie-t5-lock-time">10:14</p>
      </div>

      <div className="jamie-t5-spacer" />

      <div className="jamie-t5-notif-wrap">
        <div className="jamie-t5-notif">
          <div className="jamie-t5-notif-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </div>
          <div className="jamie-t5-notif-body">
            <div className="jamie-t5-notif-top">
              <p className="jamie-t5-notif-sender">Maya Chen <span className="jamie-t5-via">· via Sofia</span></p>
              <span className="jamie-t5-notif-time">now</span>
            </div>
            <p className="jamie-t5-notif-subject">Onboarding Kickoff · updated doc link</p>
            <p className="jamie-t5-notif-preview">
              Hi Jamie — thanks for flagging that. Here's the onboarding doc: <span className="jamie-t5-notif-link">Onboarding 2025.pdf</span>
            </p>
          </div>
        </div>
      </div>

      <div className="jamie-t5-lock-icons">
        <div className="jamie-t5-lock-icon-btn" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
        </div>
        <div className="jamie-t5-lock-icon-btn" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zM9 2l-1.83 2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>
        </div>
      </div>

    </div>
  )
}
