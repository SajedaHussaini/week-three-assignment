import CountryCard from "./CountryCard";
import SkeletonGrid from "./SkeletonGrid";

export default function CountryList({ countries, loading }) {
  if (loading) return <SkeletonGrid />
  if (!countries?.length) return null;

  return (
    <div className="countrylist">
      {countries.map((c) => (
        <CountryCard key={c.cca3 || c.name.common} country={c} />
        // <CountryCard key={c.name.common} country={c} />
      ))}
    </div>
  )
}
