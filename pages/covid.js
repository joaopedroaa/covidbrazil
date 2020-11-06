import Head from 'next/head'

// Components
import Stats from '../components/Stats'
import StatsBrazil from "../components/StatsBrazil"
import Footer from "../components/Footer"
import BackMenu from "../components/BackMenu"
import DeathNumber from "../components/DeathNumber"
import FormatSvg from "../components/FormatSvg"

// Styles
import styles from '../styles/Covid.module.css'
import stylesGeneral from '../styles/Styles.module.css'


export default function artigos() {
  return (

    <div className={stylesGeneral.container}>
      <Head> <title>Covid Brazil / Informações</title> </Head>
      <BackMenu />


      <FormatSvg src="empty_street" />
      <h1 className={stylesGeneral.title}>Informações</h1>


      <section className={styles.section}>
        <h2 className={styles.subtitle}>Brasil</h2>
        <Stats url="https://covid19.mathdro.id/api/countries/BRA" />
        <StatsBrazil />
      </section>


      {/* <section className={styles.section}>
      </section> */}

      <section className={styles.section + " " + styles.sectionCovidMap}>
        <h2 className={styles.subtitle}>Mais de <DeathNumber />  pessoas morreram ao redor do mundo</h2>
        <p>Dados atualizados dia <DeathNumber choice="lastUpdate" /> UTC+0 horas. </p>
        {/* <img className={styles.covidMapImg} src="/image/microsoft-map.png" alt="" srcset="" />  */}
        <iframe src="https://public.domo.com/cards/dG1jy" width="100%" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>
      </section>

      <section className={styles.section + " " + styles.sectionSymptoms}>
        <h2 className={styles.subtitle}>Sintomas</h2>
        <div className={styles.gridSymptoms}>
          <p>Febre</p>
          <p>Falta de ar</p>
          <p>Tosse</p>
          <p>Dor de garganta</p>
          <p>Dor de cabeça</p>
          <p>Cansaço</p>
        </div>
        <img src="/image/sintomas_corona.png" alt=""/>
      </section>






      <Footer />

    </div >

  )


}


{/* <CountrySelector></CountrySelector> */ }
{/* <RateOfChange /> */ }
