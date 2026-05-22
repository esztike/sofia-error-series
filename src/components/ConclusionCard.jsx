import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function ConclusionCard({ heading, body }) {
  return (
    <motion.div className="conclusion-card" variants={cardVariants}>
      <h4 className="conclusion-card__heading">{heading}</h4>
      <p className="conclusion-card__body">{body}</p>
    </motion.div>
  )
}
