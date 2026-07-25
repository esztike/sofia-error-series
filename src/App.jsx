import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ErrorTaxonomy from './pages/ErrorTaxonomy'
import DesignPrinciples from './pages/DesignPrinciples'
import Episode01 from './pages/Episode01'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error-taxonomy" element={<ErrorTaxonomy />} />
        <Route path="/design-principles" element={<DesignPrinciples />} />
        <Route path="/episode-01" element={<Episode01 />} />
      </Routes>
    </BrowserRouter>
  )
}
