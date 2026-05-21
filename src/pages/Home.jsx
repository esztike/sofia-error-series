import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  ArrowRight,
  LayoutGrid,
  Clock,
} from 'lucide-react'
import '../styles/homepage.css'
import {
  eyebrow,
  headingLine1,
  headingLine2,
  heroBody,
  heroTags,
  foundationCards,
  episodeCards,
} from '../content/homepage.mdx'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const closeDropdown = () => setDropdownOpen(false)

  return (
    <div className="home-page">

      {/* ── Nav ── */}
      <nav className="nav">
        <Link to="/" className="nav-wordmark" onClick={closeDropdown}>
          Sofia error series
        </Link>

        <div className="nav-actions">
          <span className="nav-hub-badge">hub</span>

          <div className="nav-dropdown-wrapper">
            <button
              className="nav-dropdown-trigger"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={() => setDropdownOpen(open => !open)}
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
                  <div className="nav-dropdown-backdrop" onClick={closeDropdown} />
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
                        <Link
                          key={card.id}
                          to={card.href}
                          className="nav-dropdown-item"
                          onClick={closeDropdown}
                        >
                          <span>{card.title}</span>
                          <ArrowRight size={12} />
                        </Link>
                      ))}
                    </div>

                    <div className="nav-dropdown-group">
                      <p className="nav-dropdown-label">Episodes</p>
                      {episodeCards.map(card =>
                        card.status === 'active' ? (
                          <Link
                            key={card.id}
                            to={card.href}
                            className="nav-dropdown-item"
                            onClick={closeDropdown}
                          >
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

      {/* ── Hero ── */}
      <motion.section
        className="hero"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="hero-left" variants={itemVariants}>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="hero-heading">
            {headingLine1}
            <em>{headingLine2}</em>
          </h1>
        </motion.div>

        <motion.div className="hero-right" variants={itemVariants}>
          <p className="hero-body">{heroBody}</p>
          <div className="hero-tags">
            {heroTags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* ── Foundation ── */}
      <section className="section--dark">
        <motion.div
          className="foundation-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          {foundationCards.map(card => (
            <motion.div
              key={card.id}
              className="card card--dark"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <div className="card-tag-row">
                <span className="card-badge">
                  <LayoutGrid size={10} />
                </span>
                <span className="tag tag--on-dark">{card.tag}</span>
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-body">{card.body}</p>
              <Link to={card.href} className="card-cta">
                {card.cta} <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Episodes ── */}
      <section className="episodes-section">
        <motion.div
          className="episodes-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          {episodeCards.map(card => {
            if (card.status === 'inactive') {
              return (
                <motion.div
                  key={card.id}
                  className="card--inactive"
                  variants={cardVariants}
                >
                  <div className="card-tag-row">
                    <span className="card-badge">
                      <LayoutGrid size={10} />
                    </span>
                    <span className="tag">{card.subTag}</span>
                  </div>
                  <h3 className="card-title card-title--inactive">{card.title}</h3>
                  <p className="coming-soon-label">Coming soon ...</p>
                </motion.div>
              )
            }

            return (
              <motion.div
                key={card.id}
                className="card card--light card--episode-active"
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div className="card-tag-row">
                  <span className="card-badge">
                    <LayoutGrid size={10} />
                  </span>
                  <span className="tag">{card.subTag}</span>
                </div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-body">{card.body}</p>
                <Link to={card.href} className="card-cta">
                  {card.cta} <ArrowRight size={14} />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <p>Sofia, an error series © 2026 Eszti Hollenback</p>
      </footer>

    </div>
  )
}
