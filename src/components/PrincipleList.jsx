import * as Accordion from '@radix-ui/react-accordion'
import PrincipleCard from './PrincipleCard'

export default function PrincipleList({ principles }) {
  return (
    <>
      <Accordion.Root type="single" collapsible className="principle-list">
        {principles.map(p => (
          <PrincipleCard key={p.number} principle={p} />
        ))}
      </Accordion.Root>
    </>
  )
}
