import * as Tabs from '@radix-ui/react-tabs'
import { walkthroughTabs } from '../content/episode-01.mdx'
import PhoneMockup from './PhoneMockup'
import '../styles/walkthrough-panel.css'

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

            {/* ── Two independent columns ── */}
            <div className="walkthrough-grid">

              {/* Left column: Sofia's phone, then unseen card if applicable */}
              <div className="walkthrough-col">
                <div className="walkthrough__phone">
                  <PhoneMockup variant="sofia">
                    <p className="walkthrough-placeholder">Screen {tab.number}</p>
                  </PhoneMockup>
                </div>
                {hasUnseen && (
                  <div className="walkthrough__unseen-card">
                    <p className="walkthrough__unseen-label">Unseen user</p>
                    <p className="walkthrough__unseen-text">{tab.unseenUser}</p>
                  </div>
                )}
              </div>

              {/* Right column: annotation card, then Jamie's phone if applicable */}
              <div className="walkthrough-col">
                <div className="walkthrough__annotation">
                  {tab.annotation ? (
                    <>
                      <p className="walkthrough__scenario">{tab.annotation.scenario}</p>
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
                  <div className="walkthrough__phone">
                    <PhoneMockup variant="jamie">
                      <p className="walkthrough-placeholder">Jamie's screen</p>
                    </PhoneMockup>
                  </div>
                )}
              </div>

            </div>
          </Tabs.Content>
        )
      })}

    </Tabs.Root>
  )
}
