import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import '../styles/not-found.css'

export default function NotFound() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Page not found · Sofia Error Series'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <div className="inner-page not-found-page">
      <main className="not-found">
        <p className="not-found-code">404</p>
        <h1 className="not-found-heading">This is a dead end</h1>
        <p className="not-found-body">
          A broken link or a page that moved. Nothing dramatic. The hub has
          everything that's actually published.
        </p>
        <Link to="/" className="not-found-home">
          <ArrowLeft size={14} />
          Back to the hub
        </Link>
      </main>
    </div>
  )
}
