import useStats from '../utils/useStats';

export default function DeathNumber({ choice }) {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api'
  );

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Error...</p>;
  if (choice === 'lastUpdate') {
    const { lastUpdate } = countries;
    const date = new Date(lastUpdate);

    const month = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(
      date
    );
    const formatedDate = `${date.getDate()} de ${month} de ${date.getFullYear()}`;
    const formatedHour = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    return `${formatedDate} às ${formatedHour}`;
  }

  return countries.deaths.value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
  });
}
