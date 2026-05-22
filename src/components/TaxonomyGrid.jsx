import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import TaxonomyCard from './TaxonomyCard'

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

export default function TaxonomyGrid({ cards, hint }) {
  const [openId, setOpenId] = useState(null)
  const openCard = cards.find(c => c.number === openId) ?? null

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setOpenId(null) }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = openId ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [openId])

  return (
    <>
      <p className="taxonomy-hint">{hint}</p>

      <motion.div
        className="taxonomy-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={gridVariants}
      >
        {cards.map(card => (
          <TaxonomyCard
            key={card.number}
            card={card}
            onClick={() => setOpenId(card.number)}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {openCard && (
          <>
            <motion.div
              className="overlay-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            <motion.div
              className="overlay-panel-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpenId(null)}
            >
              <motion.article
                className="overlay-card"
                initial={{ opacity: 0, scale: 0.97, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 16 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="overlay-close"
                  onClick={() => setOpenId(null)}
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                <div className="overlay-card__meta">
                  <span className="taxonomy-card__number">{openCard.number}</span>
                  <span className="taxonomy-card__badge">{openCard.categoryBadge}</span>
                  {openCard.isCaseStudy && (
                    <span className="taxonomy-card__case-study-tag">Case Study</span>
                  )}
                </div>

                {openCard.isCaseStudy && (
                  <div className="overlay-case-study-banner">
                    <span>This is the error class at the centre of the Sofia case study.</span>
                    <Link
                      to={openCard.caseStudyHref}
                      className="overlay-case-study-link"
                      onClick={() => setOpenId(null)}
                    >
                      Read Episode 01 <ArrowRight size={12} />
                    </Link>
                  </div>
                )}

                <h2 className="overlay-card__title">{openCard.title}</h2>

                <div className="overlay-card__body">
                  <div className="overlay-section">
                    <h4 className="overlay-label">Scenario</h4>
                    <p className="overlay-text">{openCard.scenario}</p>
                  </div>

                  <div className="overlay-section">
                    <h4 className="overlay-label">User impact</h4>
                    <p className="overlay-text">{openCard.userImpact}</p>
                  </div>

                  <div className="overlay-section">
                    <h4 className="overlay-label">Design opportunity</h4>
                    <p className="overlay-text">{openCard.designOpportunity}</p>
                  </div>

                  {openCard.researchNote && (
                    <div className="overlay-section overlay-section--research">
                      <h4 className="overlay-label">Research note</h4>
                      <p className="overlay-text">{openCard.researchNote}</p>
                    </div>
                  )}

                  <div className="overlay-prevention-recovery">
                    <div className="overlay-section">
                      <h4 className="overlay-label">Prevention</h4>
                      <p className="overlay-text">{openCard.prevention}</p>
                    </div>
                    <div className="overlay-section">
                      <h4 className="overlay-label">Recovery</h4>
                      <p className="overlay-text">{openCard.recovery}</p>
                    </div>
                  </div>

                  <div className="overlay-principles">
                    <span className="overlay-principles__label">Related design principles</span>
                    <div className="overlay-principles__chips">
                      {openCard.relatedPrinciples.map(p => (
                        <span key={p} className="overlay-principle-chip">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
