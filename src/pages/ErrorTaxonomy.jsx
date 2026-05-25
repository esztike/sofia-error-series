import { motion } from 'framer-motion'
import '../styles/error-taxonomy.css'
import Nav from '../components/Nav'
import PageHero from '../components/PageHero'
import TaxonomyGrid from '../components/TaxonomyGrid'
import ConclusionCard from '../components/ConclusionCard'
import {
  pageHeader,
  cardHint,
  introSection,
  howItWorksSection,
  failurePropertiesSection,
  taxonomyCards,
  conclusionSection,
  conclusionCards,
  closingSection,
  researchFoundations,
} from '../content/error-taxonomy.mdx'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
}

export default function ErrorTaxonomy() {
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
          <motion.p className="page-description" variants={itemVariants}>{pageHeader.description}</motion.p>
          <motion.div className="page-tags" variants={itemVariants}>
            {pageHeader.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── Why errors in agentic AI are different ── */}
      <section className="prose-section">
        <div className="prose-column">
          <h2 className="section-heading">{introSection.heading}</h2>
          {introSection.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      {/* ── How this taxonomy works ── */}
      <section className="prose-section">
        <div className="prose-column">
          <h2 className="section-heading">{howItWorksSection.heading}</h2>
          {howItWorksSection.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          {howItWorksSection.subsections.map(sub => (
            <div key={sub.heading} className="prose-subsection">
              <h3 className="subsection-heading">{sub.heading}</h3>
              {sub.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          ))}
        </div>
      </section>

      {/* ── Two failure properties ── */}
      <section className="prose-section">
        <div className="prose-column">
          <h2 className="section-heading">{failurePropertiesSection.heading}</h2>
          <p>{failurePropertiesSection.intro}</p>
          {failurePropertiesSection.properties.map(prop => (
            <div key={prop.heading} className="prose-subsection">
              <h3 className="subsection-heading">{prop.heading}</h3>
              {prop.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          ))}
        </div>
      </section>

      {/* ── The six error classes ── */}
      <section className="taxonomy-section">
        <div className="taxonomy-section__header prose-column">
          <h2 className="section-heading">The six error classes</h2>
        </div>
        <TaxonomyGrid cards={taxonomyCards} hint={cardHint} />
      </section>

      {/* ── What this taxonomy tells us ── */}
      <section className="prose-section">
        <div className="prose-column">
          <h2 className="section-heading">{conclusionSection.heading}</h2>
          {conclusionSection.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      {/* ── Conclusion card strip ── */}
      <section className="conclusion-strip">
        <div className="conclusion-strip__inner">
          <motion.div
            className="conclusion-strip__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
          >
            {conclusionCards.map((card, i) => (
              <ConclusionCard key={i} heading={card.heading} body={card.body} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Conclusion ── */}
      <section className="prose-section">
        <div className="prose-column">
          <h2 className="section-heading">{closingSection.heading}</h2>
          {closingSection.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      {/* ── Research foundations ── */}
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

      <footer className="site-footer">
        <p>Sofia, an error series © 2026 Eszti Hollenback</p>
      </footer>
    </div>
  )
}
