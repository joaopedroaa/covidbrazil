import Link from 'next/link'

import useStats from '../utils/useStats'

import Stats from '../components/Stats'
import CountrySelector from '../components/CountrySelector'
import RateOfChange from '../components/RateOfChange'
import Footer from "../components/Footer"
import BackMenu from "../components/BackMenu"
import DeathNumber from "../components/DeathNumber"
import FormatSvg from "../components/FormatSvg"

import styles from '../styles/Covid.module.css'
import stylesGeneral from '../styles/Styles.module.css'


const { default: next } = require("next");

export default function artigos() {


  return (

    <div className={stylesGeneral.container}>
      <BackMenu />

      <FormatSvg src="empty_street"/>
      <h1 className={styles.title}>Informações</h1>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Casos no Brasil</h2>
        <Stats url="https://covid19.mathdro.id/api/countries/BRA" />

      </section>

      <section className={styles.section + " " + styles.covidMap}>
        <h2 className={styles.subtitle}>Mais de <DeathNumber />  pessoas morreram em todo o mundo</h2>
        <p>Dados atualizados dia <DeathNumber choice="lastUpdate" /> UTC+0 horas. </p>
        <img className={styles.covidMapImg} src="/covid-map.png" alt="" srcset="" />

      </section>

      <Footer />
    </div>

  )


}


{/* <CountrySelector></CountrySelector> */ }
{/* <RateOfChange /> */ }
