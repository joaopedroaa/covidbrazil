import useStats from '../utils/useStats';

import styles from '../styles/StatsBrazil.module.css'


export default function Stats() {
  const { stats, loading, error } = useStats("https://covid19-brazil-api.now.sh/api/report/v1");

  if (loading) return <p>Carregando cidades do brasil..</p>;
  if (error) return <p>Error ao carregar cidades do brasil</p>;


  return (
    <div className={styles.statsContainer}>
      {stats.data.slice(0, 9).map((cities, code) => {
        const confirmed = cities.cases.toLocaleString(undefined, { minimumFractionDigits: 0 });;
        const death = cities.deaths.toLocaleString(undefined, { minimumFractionDigits: 0 });;
        const recovered = cities.refuses.toLocaleString(undefined, { minimumFractionDigits: 0 });;

        return (
          <div className={styles.statsGridContainer}>
            <h2 className={styles.title}>{cities.state} ({cities.uf})</h2>

            <div className={styles.statsGrid}>

              <div className={styles.statsBlock}>
                <h3>{confirmed}</h3>
                <span>Casos confirmados</span>
              </div>

              <div className={styles.statsBlock}>
                <h3>{death}</h3>
                <span>Mortes</span>
              </div>

              {/* <div className={styles.statsBlock}>
                <h3 className={styles.recoveveredCasesColor}>{recovered}</h3>
                <span>Recuperados</span>
              </div> */}
            </div>
          </div>
        )
      })}
    </div>

  );
}
