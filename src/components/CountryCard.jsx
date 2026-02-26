export default function Country ({ country }) {
  return (
    <div className="card">
      {country.flags?.png && (
        <img className="flag" src={country.flags.png} alt={country.name?.common}
          width="100" />
      )}

      <h3>{country.name?.common || "Unknown Country"}</h3>
      <p>Region: {country.region || "N/A"}</p>
      <p>
        Population:{""}
        {country.population ? country.population.toLocaleString() : "N/A"}
      </p>
    </div>
  )
}
