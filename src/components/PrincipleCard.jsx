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
      aria-label={`Expand: ${principle.title}`}
    >
      <span className="principle-card__number">{principle.number}</span>
      <div className="principle-card__content">
        <h3 className="principle-card__title">{principle.title}</h3>
        <p className="principle-card__tagline">{principle.tagline}</p>
      </div>
    </motion.button>
  )
}
