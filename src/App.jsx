import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const ErrorTaxonomy = lazy(() => import('./pages/ErrorTaxonomy'))
const DesignPrinciples = lazy(() => import('./pages/DesignPrinciples'))
const Episode01 = lazy(() => import('./pages/Episode01'))

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error-taxonomy" element={<ErrorTaxonomy />} />
          <Route path="/design-principles" element={<DesignPrinciples />} />
          <Route path="/episode-01" element={<Episode01 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
