import { useState, useRef } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { walkthroughTabs } from "../content/episode-01.mdx";
import WalkthroughStepContent from "./WalkthroughStepContent";
import "../styles/walkthrough-panel.css";

export default function WalkthroughPanel() {
  const [activeTab, setActiveTab] = useState("tab-1");
  const [accordionValue, setAccordionValue] = useState("tab-1");
  const triggerRefs = useRef({});

  const handleTabChange = (value) => {
    setActiveTab(value);
    setAccordionValue(value);
  };

  const handleAccordionChange = (value) => {
    setAccordionValue(value);
    if (value) setActiveTab(value);
  };

  // Fires when a card's OPEN animation finishes — layout is fully settled
  // by then, so this is the one reliable moment to snap its header to the
  // top of the viewport instead of leaving the reader wherever they landed.
  const handleAccordionContentAnimationEnd = (event, tabValue) => {
    if (
      event.animationName === "walkthrough-accordion-slide-down" &&
      tabValue === accordionValue
    ) {
      triggerRefs.current[tabValue]?.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* ── Desktop: tab row, one panel visible at a time (above 900px) ── */}
      <Tabs.Root
        className="walkthrough walkthrough-desktop"
        value={activeTab}
        onValueChange={handleTabChange}
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
        collapsible
        className="walkthrough walkthrough-accordion"
        value={accordionValue}
        onValueChange={handleAccordionChange}
      >
        {walkthroughTabs.map((tab) => (
          <Accordion.Item
            key={tab.number}
            value={`tab-${tab.number}`}
            className="walkthrough-accordion-item"
          >
            <Accordion.Header>
              <Accordion.Trigger
                ref={(el) => (triggerRefs.current[`tab-${tab.number}`] = el)}
                className="walkthrough-accordion-trigger"
              >
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

            <Accordion.Content
              className="walkthrough-accordion-content"
              onAnimationEnd={(event) =>
                handleAccordionContentAnimationEnd(event, `tab-${tab.number}`)
              }
            >
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
