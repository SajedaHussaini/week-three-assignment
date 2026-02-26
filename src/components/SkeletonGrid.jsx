export default function SkeletonGrid() {
  return (
    <div className="countries-grid">
      {Array.from({ length: 8 }).map((_, i) => (
        // <div key={i} className="card-skeleton-card">
          <div key={i} className="skeleton-card">
          <div className="skeleton flag" />
          <div className="skeleton line" />
          <div className="skeleton line small" />
        </div>
      ))}
    </div>
  )
}
