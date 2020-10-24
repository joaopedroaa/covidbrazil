import Link from 'next/link'

import useStats from '../utils/useStats'

import Stats from '../components/Stats'
import CountrySelector from '../components/CountrySelector'
import RateOfChange from '../components/RateOfChange'

import styles from '../styles/Covid.module.css'


const { default: next } = require("next");

export default function artigos() {
  const { stats, loading, error } = useStats("https://covid19.mathdro.id/api/countries/BRA");

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Error...</p>;

  const confirmed = stats.confirmed.value.toLocaleString(undefined, { minimumFractionDigits: 0 });;
  const death = stats.deaths.value.toLocaleString(undefined, { minimumFractionDigits: 0 });;
  const recovered = stats.recovered.value.toLocaleString(undefined, { minimumFractionDigits: 0 });;

  return (
    <div className={styles.container}>
      <Link className={styles.backMenu} href="/">
        &larr; Menu
      </Link>


      <h1>Brasil</h1>


      <div className={styles.statsGrid}>

        <div className={styles.statsBlock}>
          <h3>{confirmed}</h3>
          <span>Casos confirmados</span>
        </div>

        <div className={styles.statsBlock}>
          <h3>{death}</h3>
          <span>Mortes</span>
        </div>

        <div className={styles.statsBlock}>
          <h3 className={styles.recoveveredCasesColor}>{recovered}</h3>
          <span>Recuperados</span>
        </div>

      </div>

      {/* <CountrySelector></CountrySelector> */}

      {/* <RateOfChange /> */}
    </div>
  )
}
