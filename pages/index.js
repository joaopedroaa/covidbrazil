import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import stylesGeneral from '../styles/Styles.module.css'

import Footer from "../components/Footer"


export default function Home() {

  return (
    <div className={stylesGeneral.container}>

      <Head>
        <title>covidbrazil </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          covid<span>brazil</span>
        </h1>

        <p className={styles.description}>
          Uma plataforma, que recebe, em tempo real, dados sobre casos epidemiológicos, tem o número de casos, mortes, recuperações, e informações novas sobre a doença. Com o objetivo de previnir o usuário.
        </p>


        <div className={styles.grid}>
          <Link href="/numeros">
            <a className={styles.card}>
              <h3 >Numeros &rarr; </h3>
              <p>Alguns numeros explicabo aspernatur rem pariatur vitae.</p>
            </a>
          </Link >

          <Link href="/artigos">
            <a className={styles.card}>
              <h3>Artigos &rarr; </h3>
              <p>Para voce ficar informado e ajudar na prevencao do virus.</p>
            </a>
          </Link>

          <Link href="/news">
            <a className={styles.card}>
              <h3>Notícias &rarr; </h3>
              <p>Para ficar informado. Lorem ipsum dolor sit amet consectetur.</p>
            </a>
          </Link>


        </div>
        {/* <img className={styles.covidImg} src="/covid.png"></img> */}
      </main>

      <Footer />
    </div>
  )
}
