import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import PrincipleCard from './PrincipleCard'

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

export default function PrincipleList({ principles }) {
  const [openId, setOpenId] = useState(null)
  const openPrinciple = principles.find(p => p.number === openId) ?? null

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
      <motion.div
        className="principle-list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={listVariants}
      >
        {principles.map(p => (
          <PrincipleCard
            key={p.number}
            principle={p}
            onClick={() => setOpenId(p.number)}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {openPrinciple && (
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
                className="overlay-card dp-overlay-card"
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

                <div className="dp-overlay__header">
                  <span className="dp-overlay__number">{openPrinciple.number}</span>
                  <h2 className="dp-overlay__title">{openPrinciple.title}</h2>
                  <p className="dp-overlay__tagline">{openPrinciple.tagline}</p>
                </div>

                <div className="dp-overlay__body">
                  <div className="overlay-section">
                    <h4 className="overlay-label">Anti-pattern</h4>
                    <p className="overlay-text">{openPrinciple.antiPattern}</p>
                  </div>

                  <div className="overlay-section">
                    <h4 className="overlay-label">Principle in action</h4>
                    <p className="overlay-text">{openPrinciple.principleInAction}</p>
                  </div>

                  <div className="overlay-section">
                    <h4 className="overlay-label">Screen chips</h4>
                    <div className="dp-screen-chips">
                      {openPrinciple.screenChips.map(chip => (
                        <span key={chip} className="dp-screen-chip">{chip}</span>
                      ))}
                    </div>
                  </div>

                  <div className="overlay-section">
                    <h4 className="overlay-label">Addresses errors</h4>
                    <div className="dp-error-refs">
                      {openPrinciple.addressesErrors.map(err => (
                        <Link
                          key={err.number}
                          to="/error-taxonomy"
                          className="dp-error-ref"
                          onClick={() => setOpenId(null)}
                        >
                          {err.number} · {err.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="overlay-section">
                    <h4 className="overlay-label">Research note</h4>
                    <p className="overlay-text">{openPrinciple.researchNote}</p>
                  </div>

                  {openPrinciple.designInteractionNote && (
                    <div className="overlay-section dp-interaction-note">
                      <h4 className="overlay-label">Design interaction note</h4>
                      <p className="overlay-text">{openPrinciple.designInteractionNote}</p>
                    </div>
                  )}
                </div>
              </motion.article>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
