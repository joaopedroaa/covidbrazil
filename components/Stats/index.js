import useStats from '../../utils/useStats';
import styles from './Stats.module.css';

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Error...</p>;

  const confirmed = stats.confirmed.value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
  });
  const death = stats.deaths.value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
  });
  const recovered = stats.recovered.value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
  });

  return (
    <div className={styles.statsGrid}>
      <div className={styles.statsBlock}>
        <h3 className={styles.confirmedCasesColor}>{confirmed}</h3>
        <span>Casos confirmados</span>
      </div>

      <div className={styles.statsBlock}>
        <h3 className={styles.deathCasesColor}>{death}</h3>
        <span>Mortes</span>
      </div>

      <div className={styles.statsBlock}>
        <h3 className={styles.recoveveredCasesColor}>{recovered}</h3>
        <span>Recuperados</span>
      </div>
    </div>
  );
}
