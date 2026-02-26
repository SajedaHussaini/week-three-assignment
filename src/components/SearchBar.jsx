export default function SearchBar({ search, setSearch, loading, clearError }) {
  const hasText = search.trim().length > 0;

  return (
    <div>
      <div className="search-row">
        <span className="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
        </span>
        <input className="search-input" type="text" placeholder="Search country..." value={search} onChange={(e) => setSearch(e.target.value)} />

        <button className="clear-btn" onClick={() => { setSearch(""); clearError(); }} >
          {hasText ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-delete-icon lucide-delete"><path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" /><path d="m12 9 6 6" /><path d="m18 9-6 6" /></svg> : ""}
        </button>
      </div>
      <div>

        {loading && (
          <p className="loading-text">Loading countries...</p>
        )}
      </div>
    </div>
  )
}
