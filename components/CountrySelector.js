import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );

  const [selectedCountry, setSelectedCountry] = useState('BRA');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <h2>{`https://covid19.mathdro.id/api/countries/${selectedCountry}`}</h2>
      <select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {countries.countries.map((country, code) => (
          <option
            selected={selectedCountry === country.iso3}
            key={code}
            value={country.iso3}
          >
            {country.name}
          </option>
        ))}
      </select>

      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>

    </div>
  );
}
