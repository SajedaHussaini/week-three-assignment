export default function SortSelect({ setSortByPopulation, clearFilters }) {
    return (
        <div className="sort">
            <button className="sortButton" onClick={() => setSortByPopulation(true)}>
                Sort by Population (High → Low)
            </button>

            <button className="sortButton" onClick={clearFilters}>Clear filters</button>
        </div>
    )
}
