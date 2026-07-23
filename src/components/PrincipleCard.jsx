import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function PrincipleCard({ principle, onClick }) {
  return (
    <motion.button
      className="principle-card"
      onClick={onClick}
      variants={cardVariants}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      aria-label={`Expand: ${principle.shortLabel}`}
    >
      <div className="principle-card__meta">
        <span
          className="principle-card__number-dot"
          style={{ backgroundColor: `var(--color-principle-${principle.number.toLowerCase()})` }}
        />
        <span className="principle-card__number">{principle.number}</span>
      </div>
      <div className="principle-card__content">
        <h3 className="principle-card__title">{principle.shortLabel}</h3>
        <p className="principle-card__tagline">{principle.tagline}</p>
      </div>
    </motion.button>
  )
}
