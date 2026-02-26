import './App.css'
import { useState, useEffect } from "react";
import CountryList from "./components/CountryList";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import SortSelect from "./components/SortSelect";
import SkeletonGrid from "./components/SkeletonGrid";
import ErrorMessage from './components/ErrorMessage';


function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");
  const [sortByPopulation, setSortByPopulation] = useState(false);
  const [deboucedSearch, setDeboucedSearch] = useState(search);


  // Debounced search (500ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDeboucedSearch(search.trim());
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  //fetch countries
  async function fetchCountries() {
    setLoading(true);
    setError("");

    let url = "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital,cca3";

    if (deboucedSearch && deboucedSearch.length >= 2) {
      url = `https://restcountries.com/v3.1/name/${deboucedSearch}?fields=name,flags,region,population,capital,cca3`;
    } else if (region && region !== "all") {
      url = `https://restcountries.com/v3.1/region/${region}?fields=name,flags,region,population,capital,cca3`;
    }


    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("No countries found");
      const data = await res.json();

      if (!data || data.length === 0) {
        throw new Error("No countries found");
      }

      if (sortByPopulation) {
        data.sort(
          (a, b) => (b.population || 0) - (a.population || 0)
        );
      }


      setCountries(data);
    } catch (err) {

      setError("No countries found. Try another search.");
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [deboucedSearch, region, sortByPopulation]);

  const clearFilters = () => {
    setSearch("");
    setRegion("all");
    setSortByPopulation(false);
    setError("");
  };

  const retryFetch = () => {
    fetchCountries();
  };

  return (
    <div className="app">
      <div className="hero-card">
        <h1>Countries Explorer</h1>

        <div className="control-card">

          <SearchBar search={search} setSearch={setSearch} loading={loading} clearError={() => { setError(""); setCountries([]); }} />

          <div className="filters-row">
            <RegionFilter region={region} setRegion={setRegion} />
            <SortSelect sortByPopulation={sortByPopulation} setSortByPopulation={setSortByPopulation} clearFilters={clearFilters} />
          </div>
        </div>
      </div>

      {loading && <SkeletonGrid />}

      {!loading && error && (
        <ErrorMessage message={error} onRetry={retryFetch} />
      )}

      {!loading && !error && countries.length > 0 && (
        <CountryList countries={countries} />
      )}

    </div>
  )
}
export default App
