import useStats from '../../utils/useStats';

import styles from './StatsBrazil.module.css';

export default function Stats({ dataAos }) {
  const { stats, loading, error } = useStats(
    'https://covid19-brazil-api.now.sh/api/report/v1'
  );

  if (loading) return <p>Carregando estados do Brasil...</p>;
  if (error) return <p>Error ao carregar estados do brasil</p>;

  return (
    <div className={styles.statsContainer}>
      {stats.data.slice(0, 9).map(cities => {
        const confirmed = cities.cases.toLocaleString(undefined, {
          minimumFractionDigits: 0,
        });
        const death = cities.deaths.toLocaleString(undefined, {
          minimumFractionDigits: 0,
        });
        // const recovered = cities.refuses.toLocaleString(undefined, {
        //   minimumFractionDigits: 0,
        // });

        return (
          <div
            data-aos={dataAos}
            className={styles.statsGridContainer}
            key={cities.uid}
          >
            <h2 className={styles.title}>
              <img
                className={styles.stateFlags}
                src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${cities.uf}.png`}
                alt={cities.uf}
              />

              <span>
                {cities.state} ({cities.uf})
              </span>
            </h2>

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
        );
      })}
    </div>
  );
}
