import * as Tabs from '@radix-ui/react-tabs'
import { walkthroughTabs } from '../content/episode-01.mdx'
import PhoneMockup from './PhoneMockup'
import SofiaScreen1 from './SofiaScreen1'
import SofiaScreen2 from './SofiaScreen2'
import SofiaScreen3 from './SofiaScreen3'
import SofiaScreen4 from './SofiaScreen4'
import SofiaScreen5 from './SofiaScreen5'
import '../styles/walkthrough-panel.css'

const SOFIA_SCREENS = { 1: SofiaScreen1, 2: SofiaScreen2, 3: SofiaScreen3, 4: SofiaScreen4, 5: SofiaScreen5 }

export default function WalkthroughPanel() {
  return (
    <Tabs.Root className="walkthrough" defaultValue="tab-1">

      <Tabs.List className="walkthrough-tabs" aria-label="Walkthrough steps">
        {walkthroughTabs.map(tab => (
          <Tabs.Trigger
            key={tab.number}
            value={`tab-${tab.number}`}
            className="walkthrough-tab"
          >
            {tab.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {walkthroughTabs.map(tab => {
        const hasUnseen = !!tab.unseenUser
        const SofiaScreenComponent = SOFIA_SCREENS[tab.number]
        return (
          <Tabs.Content
            key={tab.number}
            value={`tab-${tab.number}`}
            className="walkthrough-content"
          >

            {/* ── Story beat — full width ── */}
            <div className="walkthrough__story">
              <p className="walkthrough__story-label">Story beat</p>
              <p className="walkthrough__beat">{tab.storyBeat}</p>
            </div>

            {/* ── 2×2 grid: Sofia phone/annotation, unseen phone/annotation ── */}
            <div className="walkthrough-grid">

              <div className="walkthrough__phone walkthrough__phone--sofia">
                <PhoneMockup variant="sofia">
                  {SofiaScreenComponent
                    ? <SofiaScreenComponent />
                    : <p className="walkthrough-placeholder">Screen {tab.number}</p>}
                </PhoneMockup>
              </div>

              <div className={`walkthrough__annotation${hasUnseen ? ' walkthrough__annotation--paired' : ''}`}>
                {tab.annotation ? (
                  <>
                    <div className="walkthrough__decisions">
                      <p className="walkthrough__section-label">Design decisions</p>
                      {tab.annotation.designDecisions.map((d, i) => (
                        <div key={i} className="walkthrough__decision">
                          <p className="walkthrough__decision-label">{d.label}</p>
                          <p className="walkthrough__decision-body">{d.body}</p>
                        </div>
                      ))}
                    </div>
                    <div className="walkthrough__principles">
                      <p className="walkthrough__section-label">Principles at work</p>
                      <div className="walkthrough__chips">
                        {tab.annotation.principlesAtWork.map(p => (
                          <span key={p} className="walkthrough__chip">{p}</span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="walkthrough__principles">
                    <p className="walkthrough__section-label">Principles at work</p>
                    <div className="walkthrough__chips">
                      {(tab.principlesAtWork || []).map(p => (
                        <span key={p} className="walkthrough__chip">{p}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {hasUnseen && (
                <div className="walkthrough__phone walkthrough__phone--unseen">
                  <PhoneMockup variant="jamie">
                    <p className="walkthrough-placeholder">Jamie's screen</p>
                  </PhoneMockup>
                </div>
              )}

              {hasUnseen && (
                <div className="walkthrough__unseen-card">
                  <p className="walkthrough__unseen-label">Unseen user</p>
                  <p className="walkthrough__unseen-text">{tab.unseenUser}</p>
                </div>
              )}

            </div>
          </Tabs.Content>
        )
      })}

    </Tabs.Root>
  )
}
