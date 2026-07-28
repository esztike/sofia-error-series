import { motion } from 'framer-motion'
import { BoneFracture, Bandage } from 'lucide-react'
import '../styles/error-taxonomy.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import TaxonomyGrid from '../components/TaxonomyGrid'
import SupportCard from '../components/SupportCard'
import {
  pageHeader,
  cardHint,
  introSection,
  howItWorksSection,
  failurePropertiesSection,
  taxonomyCards,
  designProblemSection,
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

      {/* ── The six error classes ── */}
      <section className="taxonomy-section">
        <div className="taxonomy-section__header prose-column">
          <p className="hero-eyebrow">The six error classes</p>
        </div>
        <TaxonomyGrid cards={taxonomyCards} hint={cardHint} />
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

      {/* ── What this taxonomy tells us ── */}
      <section className="prose-section">
        <div className="prose-column">
          <h2 className="section-heading">{designProblemSection.heading}</h2>
          {designProblemSection.paragraphs.map((p, i) => <p key={i}>{p}</p>)}

          <p className="hero-eyebrow">Design for the relationship</p>

          <div className="dp-visual">
            <div className="dp-visual__tier">
              <BoneFracture className="dp-visual__icon" size={48} strokeWidth={1.25} aria-hidden="true" />
              <h3 className="dp-visual__label">{designProblemSection.visual.breaks.label}</h3>
              <motion.div
                className="support-grid support-grid--quad"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={containerVariants}
              >
                {designProblemSection.visual.breaks.cards.map(card => (
                  <SupportCard key={card.title} title={card.title} description={card.body}>
                    <div className="dp-visual__pills">
                      {card.classes.map(number => {
                        const errorClass = taxonomyCards.find(c => c.number === number)
                        return (
                          <span
                            key={number}
                            className="taxonomy-card__badge"
                            style={{
                              backgroundColor: `var(--color-error-${number}-bg)`,
                              color: `var(--color-error-${number}-text)`,
                            }}
                          >
                            {number} · {errorClass.title}
                          </span>
                        )
                      })}
                    </div>
                  </SupportCard>
                ))}
              </motion.div>
            </div>

            <div className="dp-visual__tier">
              <Bandage className="dp-visual__icon" size={48} strokeWidth={1.25} aria-hidden="true" />
              <h3 className="dp-visual__label">{designProblemSection.visual.works.label}</h3>
              <motion.div
                className="dp-visual__works"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={containerVariants}
              >
                <SupportCard
                  title={designProblemSection.visual.works.cards[0].title}
                  description={designProblemSection.visual.works.cards[0].body}
                />
                <span className="dp-visual__plus" aria-hidden="true">+</span>
                <SupportCard
                  title={designProblemSection.visual.works.cards[1].title}
                  description={designProblemSection.visual.works.cards[1].body}
                />
              </motion.div>
            </div>
          </div>

          <p>{designProblemSection.closingParagraph}</p>
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

      <Footer />
    </div>
  )
}
