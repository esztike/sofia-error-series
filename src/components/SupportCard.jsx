import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function SupportCard({ icon: Icon, title, description, metric, children }) {
  return (
    <motion.div className="support-card" variants={cardVariants}>
      {Icon && <Icon className="support-card__icon" size={24} aria-hidden="true" />}
      <h4 className="support-card__title">{title}</h4>
      {description && <p className="support-card__desc">{description}</p>}
      {metric && (
        <p className="support-card__metric">
          <span className="support-card__metric-label">Metric</span>
          {metric}
        </p>
      )}
      {children}
    </motion.div>
  )
}
