import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight, Clock } from 'lucide-react'
import { foundationCards, episodeCards } from '../content/homepage.mdx'

export default function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const close = () => setDropdownOpen(false)

  return (
    <nav className="nav">
      <Link to="/" className="nav-wordmark" onClick={close}>
        Sofia error series
      </Link>

      <div className="nav-actions">
        <Link to="/" className="nav-hub-badge" onClick={close}>hub</Link>

        <div className="nav-dropdown-wrapper">
          <button
            className="nav-dropdown-trigger"
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
            onClick={() => setDropdownOpen(o => !o)}
          >
            series
            <motion.span
              className="nav-dropdown-chevron"
              animate={{ rotate: dropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={14} />
            </motion.span>
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <>
                <div className="nav-dropdown-backdrop" onClick={close} />
                <motion.div
                  className="nav-dropdown-panel"
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                >
                  <div className="nav-dropdown-group">
                    <p className="nav-dropdown-label">Foundation</p>
                    {foundationCards.map(card => (
                      <Link key={card.id} to={card.href} className="nav-dropdown-item" onClick={close}>
                        <span>{card.title}</span>
                        <ArrowRight size={12} />
                      </Link>
                    ))}
                  </div>

                  <div className="nav-dropdown-group">
                    <p className="nav-dropdown-label">Episodes</p>
                    {episodeCards.map(card =>
                      card.status === 'active' ? (
                        <Link key={card.id} to={card.href} className="nav-dropdown-item" onClick={close}>
                          <span>{card.title}</span>
                          <ArrowRight size={12} />
                        </Link>
                      ) : (
                        <div key={card.id} className="nav-dropdown-item nav-dropdown-item--inactive">
                          <span>{card.title}</span>
                          <Clock size={12} />
                        </div>
                      )
                    )}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  )
}
