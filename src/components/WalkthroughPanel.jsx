// Placeholder — WalkthroughPanel will be built as a separate component.
// Receives walkthroughTabs data from episode-01.mdx.

const placeholderStyle = {
  margin: '2rem auto',
  padding: '4rem 3rem',
  border: '1px dashed rgba(141, 132, 122, 0.2)',
  borderRadius: '8px',
  textAlign: 'center',
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--text-xs)',
  letterSpacing: 'var(--tracking-wider)',
  textTransform: 'uppercase',
  color: 'var(--color-inactive)',
}

export default function WalkthroughPanel() {
  return (
    <div style={placeholderStyle}>
      Walkthrough — coming soon
    </div>
  )
}
