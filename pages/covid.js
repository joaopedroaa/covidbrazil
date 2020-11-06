// Components
import Stats from '../components/Stats'
import Layout from "../components/Layout"
import StatsBrazil from "../components/StatsBrazil"
import DeathNumber from "../components/DeathNumber"

// Utils
import transmissionData from "../utils/cards/transmission";
import symptomsCards from "../utils/cards/symptoms"

// Styles
import styles from '../styles/Covid.module.css'
import stylesGeneral from '../styles/Styles.module.css'



export default function artigos() {

  return (
    <Layout name="/ Informações" svg="empty_street" >

      <h1 className={stylesGeneral.title}>Informações</h1>
      <p className={stylesGeneral.description}>Coronavírus é uma família de vírus que causam infecções respiratórias. O novo agente do coronavírus foi descoberto em 31/12/19 após casos registrados na China. Provoca a doença chamada de coronavírus (COVID-19).</p>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Casos no Brasil</h2>
        <Stats url="https://covid19.mathdro.id/api/countries/BRA" />
        <StatsBrazil dataAos="fade-up" />
      </section>

      <section className={styles.section + " " + styles.sectionCovidMap}>
        <h2 className={styles.subtitle}>Mais de <DeathNumber />  pessoas morreram ao redor do mundo</h2>
        <p>Dados atualizados dia <DeathNumber choice="lastUpdate" /> UTC+0 horas. </p>
        {/* <img className={styles.covidMapImg} src="/image/microsoft-map.png" alt="" srcSet="" />  */}
        <iframe src="https://public.domo.com/cards/dG1jy" width="100%" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>
      </section>

      <section className={styles.section + " " + styles.sectionSymptoms}>
        <h2 className={styles.subtitle}>Sintomas</h2>
        <div className={styles.gridSymptoms}>
          {symptomsCards.map((symptom) => (
            <p data-aos="fade-right">{symptom}</p>
          ))}
        </div>
        <img src="/image/sintomas_corona.png" alt="" />
      </section>

      <section className={styles.section + " " + styles.sectionTransmission}>
        <h2 className={styles.subtitle}>Transmissão</h2>
        <p className={styles.description}>A transmissão acontece de uma pessoa doente para outra ou por contato próximo por meio de:</p>

        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/pixelmeetup" title="Pixelmeetup">Pixelmeetup</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}

        <div className={styles.gridTransmission}>
          {transmissionData.map((cardData) => {
            return (
              <div data-aos="fade-right" className={styles.cardTransmission}>
                <img src={`/svg/virus-spread/${cardData.image}.svg`}
                  alt={cardData.name}
                  title="Icon designed by Pixelmeetup from Flaticon"
                />
                <p>{cardData.name}</p>
              </div>
            )
          })}

        </div>
      </section>

    </Layout >
  )


}


{/* <CountrySelector></CountrySelector> */ }
{/* <RateOfChange /> */ }
