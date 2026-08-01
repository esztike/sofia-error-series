import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { walkthroughTabs } from "../content/episode-01.mdx";
import WalkthroughStepContent from "./WalkthroughStepContent";
import "../styles/walkthrough-panel.css";

export default function WalkthroughPanel() {
  const [activeTab, setActiveTab] = useState("tab-1");

  return (
    <>
      {/* ── Desktop: tab row, one panel visible at a time (above 900px) ── */}
      <Tabs.Root
        className="walkthrough walkthrough-desktop"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <Tabs.List className="walkthrough-tabs" aria-label="Walkthrough steps">
          {walkthroughTabs.map((tab) => (
            <Tabs.Trigger
              key={tab.number}
              value={`tab-${tab.number}`}
              className="walkthrough-tab"
            >
              {tab.number}. {tab.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {walkthroughTabs.map((tab) => (
          <Tabs.Content
            key={tab.number}
            value={`tab-${tab.number}`}
            className="walkthrough-content"
          >
            <WalkthroughStepContent tab={tab} />
          </Tabs.Content>
        ))}
      </Tabs.Root>

      {/* ── Mobile: numbered accordion, always one step open (900px and below) ── */}
      <Accordion.Root
        type="single"
        className="walkthrough walkthrough-accordion"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        {walkthroughTabs.map((tab) => (
          <Accordion.Item
            key={tab.number}
            value={`tab-${tab.number}`}
            className="walkthrough-accordion-item"
          >
            <Accordion.Header>
              <Accordion.Trigger className="walkthrough-accordion-trigger">
                <span className="walkthrough-accordion-number">
                  {`${tab.number}.`}
                </span>
                <span className="walkthrough-accordion-title">{tab.title}</span>
                <ChevronDown
                  className="walkthrough-accordion-chevron"
                  size={18}
                  aria-hidden="true"
                />
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="walkthrough-accordion-content">
              <div className="walkthrough-accordion-content__inner">
                <WalkthroughStepContent tab={tab} />
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </>
  );
}
