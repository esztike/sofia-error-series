import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, LayoutGrid, CircleSlash, PencilRuler } from 'lucide-react'
import '../styles/homepage.css'
import Nav from '../components/Nav'
import {
  eyebrow,
  headingLine1,
  headingLine2,
  heroBody,
  heroTags,
  foundationLabel,
  foundationCards,
  episodesLabel,
  episodeCards,
} from '../content/homepage.mdx'

const MotionLink = motion.create(Link)

const FOUNDATION_ICONS = {
  'error-taxonomy': CircleSlash,
  'design-principles': PencilRuler,
}

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
  return (
    <div className="home-page">

      {/* ── Nav ── */}
      <Nav />

      {/* ── Hero ── */}
      <motion.section
        className="hero"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p className="hero-eyebrow" variants={itemVariants}>{eyebrow}</motion.p>

        <div className="hero-grid">
          <motion.div className="hero-left" variants={itemVariants}>
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
        </div>
      </motion.section>

      {/* ── Foundation ── */}
      <section className="foundation-section">
        <p className="eyebrow foundation-label">{foundationLabel}</p>
        <motion.div
          className="foundation-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          {foundationCards.map(card => {
            const Icon = FOUNDATION_ICONS[card.id] || LayoutGrid
            return (
            <MotionLink
              key={card.id}
              to={card.href}
              className="card card--dark"
              variants={cardVariants}
              whileHover={{ boxShadow: '0px 4px 16px 4px rgba(24, 25, 26, 0.25)' }}
            >
              <div className="card-tag-row">
                <span className="card-badge">
                  <Icon size={10} />
                </span>
                <span className="tag tag--on-dark">{card.tag}</span>
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-body">{card.body}</p>
              <span className="card-cta">
                {card.cta} <ArrowRight size={14} />
              </span>
            </MotionLink>
            )
          })}
        </motion.div>
      </section>

      {/* ── Episodes ── */}
      <section className="episodes-section">
        <p className="eyebrow episodes-label">{episodesLabel}</p>
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
                  <span className="card-episode-num">{card.id.replace('ep-', '')}</span>
                  <div className="card-tag-row card-tag-row--stacked">
                    <span className="eyebrow">Error class</span>
                    <span
                      className="dp-error-ref"
                      style={{
                        backgroundColor: `var(--color-error-${card.errorClassNumber}-bg)`,
                        color: `var(--color-error-${card.errorClassNumber}-text)`,
                      }}
                    >
                      {card.errorClassNumber} · {card.errorClassTitle}
                    </span>
                  </div>
                  <h3 className="card-title card-title--inactive">{card.title}</h3>
                  <p className="coming-soon-label">Coming soon ...</p>
                </motion.div>
              )
            }

            return (
              <MotionLink
                key={card.id}
                to={card.href}
                className="card card--light card--episode-active"
                variants={cardVariants}
                whileHover={{ boxShadow: '0px 4px 16px 4px rgba(24, 25, 26, 0.15)' }}
              >
                <span className="card-episode-num card-episode-num--active">{card.id.replace('ep-', '')}</span>
                <div className="card-tag-row card-tag-row--stacked">
                  <span className="eyebrow">Error class</span>
                  <span
                    className="dp-error-ref"
                    style={{
                      backgroundColor: `var(--color-error-${card.errorClassNumber}-bg)`,
                      color: `var(--color-error-${card.errorClassNumber}-text)`,
                    }}
                  >
                    {card.errorClassNumber} · {card.errorClassTitle}
                  </span>
                </div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-body">{card.body}</p>
                <span className="card-cta">
                  {card.cta} <ArrowRight size={14} />
                </span>
              </MotionLink>
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
