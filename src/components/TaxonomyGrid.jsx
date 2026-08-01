import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog'
import { X, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { principles } from '../content/design-principles.mdx'
import TaxonomyCard from './TaxonomyCard'

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const principleByNumber = Object.fromEntries(principles.map(p => [p.number, p]))

export default function TaxonomyGrid({ cards, hint }) {
  const [openId, setOpenId] = useState(null)
  const openCard = cards.find(c => c.number === openId) ?? null

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

      <Dialog.Root open={!!openCard} onOpenChange={(open) => !open && setOpenId(null)}>
        <AnimatePresence>
          {openCard && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  className="overlay-backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </Dialog.Overlay>

              <Dialog.Content asChild aria-describedby={undefined}>
                <motion.div
                  className="overlay-panel-wrapper"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.article
                    className="overlay-card"
                    initial={{ opacity: 0, scale: 0.97, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97, y: 16 }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Dialog.Close asChild>
                      <button className="overlay-close" aria-label="Close">
                        <X size={18} />
                      </button>
                    </Dialog.Close>

                    <div className="overlay-card__meta">
                      <span
                        className="taxonomy-card__badge"
                        style={{
                          backgroundColor: `var(--color-error-${openCard.number}-bg)`,
                          color: `var(--color-error-${openCard.number}-text)`,
                        }}
                      >
                        {openCard.number} · {openCard.title}
                      </span>
                      {openCard.isCaseStudy && (
                        <span className="taxonomy-card__case-study-tag">Case Study</span>
                      )}
                    </div>

                    {openCard.isCaseStudy && (
                      <Link
                        to={openCard.caseStudyHref}
                        className="overlay-case-study-banner"
                        onClick={() => setOpenId(null)}
                      >
                        <span>This is the error class at the center of the Sofia case study.</span>
                        <span className="overlay-case-study-link">
                          Read Episode 01 <ArrowRight size={12} />
                        </span>
                      </Link>
                    )}

                    <Dialog.Title asChild>
                      <h2 className="overlay-card__title">{openCard.title}</h2>
                    </Dialog.Title>

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
                            <span key={p} className="principle-chip">
                              <span className="principle-chip-dot" style={{ backgroundColor: `var(--color-principle-${p.toLowerCase()})` }} />
                              {p} {principleByNumber[p]?.shortLabel}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </>
  )
}
