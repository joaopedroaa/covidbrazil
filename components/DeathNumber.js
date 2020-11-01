
import useStats from '../utils/useStats';


export default function DeathNumber({choice}) {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api'
  );

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Error...</p>;
  const deathsValue = countries.deaths.value.toLocaleString(undefined, { minimumFractionDigits: 0 });;

  const lastUpdate = countries.lastUpdate.slice(0,10) + " às " + countries.lastUpdate.slice(11,19)

  // if(choice == "deathsValue") return deathsValue;
  if(choice == "lastUpdate") return lastUpdate;

  return (deathsValue)
}
