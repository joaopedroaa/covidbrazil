import Link from 'next/link'
import Head from 'next/head'


import Stats from '../components/Stats'
import Footer from "../components/Footer"
import BackMenu from "../components/BackMenu"
import DeathNumber from "../components/DeathNumber"
import FormatSvg from "../components/FormatSvg"

import styles from '../styles/Covid.module.css'
import stylesGeneral from '../styles/Styles.module.css'


export default function artigos() {


  return (

    <div className={stylesGeneral.container}>
      <Head>
        <title>Covid Brazil / Informações</title>
        <link rel="icon" href="/icons/android-chrome-192x192.png" />
      </Head>


      <BackMenu />

      <FormatSvg src="empty_street" />
      <h1 className={stylesGeneral.title}>Informações</h1>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Casos no Brasil</h2>
        <Stats url="https://covid19.mathdro.id/api/countries/BRA" />

      </section>

      <section className={styles.section + " " + styles.covidMap}>
        <h2 className={styles.subtitle}>Mais de <DeathNumber />  pessoas morreram ao redor do mundo</h2>
        <p>Dados atualizados dia <DeathNumber choice="lastUpdate" /> UTC+0 horas. </p>

        {/* <img className={styles.covidMapImg} src="/image/microsoft-map.png" alt="" srcset="" />
        <p className={styles.covidMapImgDescription}>Imagem retirada de www.bing.com/covid/local</p> */}
        {/* <img className={styles.covidMapImg} src="/svg/connected_world.svg" alt="" srcset="" /> */}
        {/* <FormatSvg src="connected_world" /> */}
        {/* <iframe src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map" frameborder="0" width="100%" height="600px"></iframe> */}
        {/* <iframe src="https://covid19.biglocalnews.org/world-map/?embed=country#/country/076" frameborder="0" scrolling="no" style="width: 600px; height: 890px" ></iframe> */}
        {/* <iframe style={{ width: '600px', height: "815px" }} src="https://covid19.biglocalnews.org/world-map/?embed=country#/country/076" frameborder="0" scrolling="no" ></iframe> */}

        <iframe src="https://public.domo.com/cards/dG1jy" width="100%" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>



      </section>

      <Footer />
    </div >

  )


}


{/* <CountrySelector></CountrySelector> */ }
{/* <RateOfChange /> */ }
