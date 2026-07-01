export default function StepRow({ status, name, detail, detailVariant }) {
  return (
    <div className="step-row">
      <div className={`step-indicator step-indicator--${status}`}>
        {status === 'ok'      && <span className="step-icon--ok">✓</span>}
        {status === 'fail'    && <span className="step-icon--fail">✕</span>}
        {status === 'running' && <span className="step-spinner" />}
        {status === 'pending' && <span className="step-dot" />}
      </div>
      <div className="step-content">
        <p className={`step-name${status === 'pending' ? ' step-name--muted' : ''}`}>{name}</p>
        {detail && (
          <p className={`step-detail${detailVariant ? ` step-detail--${detailVariant}` : ''}`}>
            {detail}
          </p>
        )}
      </div>
    </div>
  )
}
