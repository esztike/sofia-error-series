import { motion } from 'framer-motion'
import { Drama, Brain, BarChart3, Repeat } from 'lucide-react'
import '../styles/design-principles.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import BackToTop from '../components/BackToTop'
import PrincipleList from '../components/PrincipleList'
import SupportCard from '../components/SupportCard'
import {
  pageHeader,
  howToUseSection,
  principles,
  testingSection,
  furtherConsiderationsSection,
  closingSection,
  researchFoundations,
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
          <motion.p className="hero-eyebrow" variants={itemVariants}>{pageHeader.eyebrow}</motion.p>
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
          <p className="hero-eyebrow">The eight principles</p>
        </div>
        <PrincipleList principles={principles} />
      </section>

      {/* ── How to test them ── */}
      <section className="testing-section">
        <div className="prose-column">
          <h2 className="section-heading">{testingSection.heading}</h2>
          <p>{testingSection.intro}</p>
          <p className="hero-eyebrow">{testingSection.methodsLabel}</p>
        </div>
        <motion.div
          className="support-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {testingSection.cards.map(card => (
            <SupportCard
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
          <p>{closingSection.closingParagraph}</p>
        </div>
      </section>

      {/* ── Inspired by ── */}
      <section className="research-section">
        <div className="prose-column">
          <h2 className="section-heading">{researchFoundations.heading}</h2>
          <p className="research-intro">{researchFoundations.intro}</p>
          {researchFoundations.groups.map(group => (
            <div key={group.heading} className="research-group">
              <h4 className="research-group__heading">{group.heading}</h4>
              <ul className="research-group__list">
                {group.sources.map((source, i) => (
                  <li key={i} className="research-source">{source}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}
