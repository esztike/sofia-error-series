import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function TaxonomyCard({ card, onClick }) {
  return (
    <motion.button
      className="taxonomy-card"
      onClick={onClick}
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      aria-label={`Expand: ${card.title}`}
    >
      <div className="taxonomy-card__meta">
        <span
          className="taxonomy-card__badge"
          style={{
            backgroundColor: `var(--color-error-${card.number}-bg)`,
            color: `var(--color-error-${card.number}-text)`,
          }}
        >
          {card.number}
        </span>
        {card.isCaseStudy && (
          <span className="taxonomy-card__case-study-tag">Case Study</span>
        )}
      </div>
      <div className="taxonomy-card__content">
        <h3 className="taxonomy-card__title">{card.title}</h3>
        <p className="taxonomy-card__summary">{card.summary}</p>
      </div>
    </motion.button>
  )
}
