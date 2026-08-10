import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      if (y < 400) {
        setVisible(false)
      } else if (y < lastY) {
        setVisible(true) // scrolling up
      } else if (y > lastY) {
        setVisible(false) // scrolling down
      }
      lastY = y
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) return null

  return createPortal(
    <button className="back-to-top" onClick={scrollUp} aria-label="Back to top">
      <ArrowUp size={18} />
    </button>,
    document.body,
  )
}
