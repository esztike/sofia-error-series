import { useRef } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import PrincipleCard from './PrincipleCard'

export default function PrincipleList({ principles }) {
  const triggerRefs = useRef({})

  // Fires only for the panel that just opened (slide-down only ever plays
  // on the open item) — layout is settled by then, so this is the reliable
  // moment to snap its trigger to the top instead of leaving it wherever
  // the previous card's collapse happened to land it.
  const handleContentAnimationEnd = (event, value) => {
    if (event.animationName === 'principle-slide-down') {
      triggerRefs.current[value]?.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <Accordion.Root type="single" collapsible className="principle-list">
        {principles.map(p => (
          <PrincipleCard
            key={p.number}
            principle={p}
            triggerRef={(el) => (triggerRefs.current[p.number] = el)}
            onContentAnimationEnd={(event) => handleContentAnimationEnd(event, p.number)}
          />
        ))}
      </Accordion.Root>
    </>
  )
}
