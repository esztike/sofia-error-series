import { motion } from 'framer-motion'
import { Drama, Brain, BarChart3, Repeat } from 'lucide-react'
import '../styles/design-principles.css'
import Nav from '../components/Nav'
import PageHero from '../components/PageHero'
import PrincipleList from '../components/PrincipleList'
import TestCard from '../components/TestCard'
import {
  pageHeader,
  cardHint,
  howToUseSection,
  principles,
  testingSection,
  furtherConsiderationsSection,
  closingSection,
} from '../content/design-principles.mdx'

const TEST_ICONS = {
  drama: Drama,
  brain: Brain,
  'bar-chart-3': BarChart3,
  repeat: Repeat,
}

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
      <PageHero src={null} alt="" />

      {/* ── Page header ── */}
      <motion.section
        className="page-header"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="prose-column">
          <motion.p className="eyebrow" variants={itemVariants}>{pageHeader.eyebrow}</motion.p>
          <motion.h1 className="page-title" variants={itemVariants}>{pageHeader.title}</motion.h1>
          <motion.p className="page-subtitle" variants={itemVariants}>{pageHeader.subtitle}</motion.p>
          <motion.p className="page-description" variants={itemVariants}>{pageHeader.intro}</motion.p>
          <motion.div className="page-tags" variants={itemVariants}>
            {pageHeader.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </motion.div>
        </div>
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
        <div className="dp-list-section__header prose-column">
          <h2 className="section-heading">The eight principles</h2>
        </div>
        <PrincipleList principles={principles} hint={cardHint} />
      </section>

      {/* ── How to test them ── */}
      <section className="testing-section">
        <div className="prose-column">
          <h2 className="section-heading">{testingSection.heading}</h2>
        </div>
        <motion.div
          className="testing-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {testingSection.cards.map(card => (
            <TestCard
              key={card.title}
              icon={TEST_ICONS[card.icon]}
              title={card.title}
              description={card.description}
              metric={card.metric}
            />
          ))}
        </motion.div>
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
      <section className="prose-section">
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
