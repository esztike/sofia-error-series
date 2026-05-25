import { motion } from 'framer-motion'
import '../styles/design-principles.css'
import Nav from '../components/Nav'
import PrincipleList from '../components/PrincipleList'
import {
  pageHeader,
  howToUseSection,
  principles,
  furtherConsiderationsSection,
  closingSection,
} from '../content/design-principles.mdx'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
}

export default function DesignPrinciples() {
  return (
    <div className="inner-page">
      <Nav />

      {/* ── Hero ── */}
      <motion.section
        className="dp-hero"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="dp-hero__left" variants={itemVariants}>
          <p className="eyebrow">{pageHeader.eyebrow}</p>
          <h1 className="dp-hero__title">{pageHeader.title}</h1>
          <p className="dp-hero__subtitle">{pageHeader.subtitle}</p>
        </motion.div>

        <motion.div className="dp-hero__right" variants={itemVariants}>
          <p className="dp-hero__intro">{pageHeader.intro}</p>
          <div className="dp-hero__tags">
            {pageHeader.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* ── How to use them ── */}
      <section className="prose-section">
        <div className="prose-column">
          <h2 className="section-heading">{howToUseSection.heading}</h2>
          {howToUseSection.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      {/* ── Eight principle cards ── */}
      <section className="dp-list-section">
        <div className="dp-list-section__header">
          <h2 className="dp-section-heading">The eight principles</h2>
        </div>
        <PrincipleList principles={principles} />
      </section>

      {/* ── Further considerations ── */}
      <section className="prose-section">
        <div className="prose-column">
          <h2 className="section-heading">{furtherConsiderationsSection.heading}</h2>
          <p>{furtherConsiderationsSection.intro}</p>
          {furtherConsiderationsSection.subsections.map(sub => (
            <div key={sub.heading} className="prose-subsection">
              <h3 className="subsection-heading">{sub.heading}</h3>
              <p>{sub.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Where the principles point ── */}
      <section className="dp-closing-section">
        <div className="prose-column">
          <h2 className="section-heading">{closingSection.heading}</h2>
          {closingSection.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <footer className="site-footer">
        <p>Sofia, an error series © 2026 Eszti Hollenback</p>
      </footer>
    </div>
  )
}
