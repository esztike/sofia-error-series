import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
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
          <DropdownMenu.Root open={dropdownOpen} onOpenChange={setDropdownOpen} modal={false}>
            <DropdownMenu.Trigger asChild>
              <button className="nav-dropdown-trigger">
                series
                <motion.span
                  className="nav-dropdown-chevron"
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={14} />
                </motion.span>
              </button>
            </DropdownMenu.Trigger>

            <AnimatePresence>
              {dropdownOpen && (
                <DropdownMenu.Portal forceMount>
                  <DropdownMenu.Content asChild align="end" sideOffset={12}>
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
                          <DropdownMenu.Item key={card.id} asChild>
                            <Link to={card.href} className="nav-dropdown-item">
                              <span>{card.title}</span>
                              <ArrowRight size={12} />
                            </Link>
                          </DropdownMenu.Item>
                        ))}
                      </div>

                      <div className="nav-dropdown-group">
                        <p className="nav-dropdown-label">Episodes</p>
                        {episodeCards.map(card =>
                          card.status === 'active' ? (
                            <DropdownMenu.Item key={card.id} asChild>
                              <Link to={card.href} className="nav-dropdown-item">
                                <span>{card.title}</span>
                                <ArrowRight size={12} />
                              </Link>
                            </DropdownMenu.Item>
                          ) : (
                            <DropdownMenu.Item key={card.id} disabled asChild>
                              <div className="nav-dropdown-item nav-dropdown-item--inactive">
                                <span>{card.title}</span>
                                <Clock size={12} />
                              </div>
                            </DropdownMenu.Item>
                          )
                        )}
                      </div>
                    </motion.div>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              )}
            </AnimatePresence>
          </DropdownMenu.Root>
        </div>
      </div>
    </nav>
  )
}
