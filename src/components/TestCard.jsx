import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function TestCard({ icon: Icon, title, description, metric }) {
  return (
    <motion.div className="test-card" variants={cardVariants}>
      <Icon className="test-card__icon" size={24} aria-hidden="true" />
      <h4 className="test-card__title">{title}</h4>
      <p className="test-card__desc">{description}</p>
      <p className="test-card__metric">
        <span className="test-card__metric-label">Metric</span>
        {metric}
      </p>
    </motion.div>
  )
}
