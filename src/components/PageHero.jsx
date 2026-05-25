export default function PageHero({ src, alt }) {
  if (!src) return null
  return <img src={src} alt={alt || ''} className="page-hero" />
}
