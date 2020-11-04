import Head from 'next/head'

// Components
import Footer from "../components/Footer"
import BackMenu from "../components/BackMenu"
import FormatSvg from "../components/FormatSvg"

// Styles
import stylesGeneral from '../styles/Styles.module.css'


export default function artigos() {

  return (
    <div className={stylesGeneral.container}>
      <Head>
        <title>Covid Brazil / Artigos</title>
        <link rel="icon" href="/icons/android-chrome-192x192.png" />
      </Head>

      <BackMenu />
      <FormatSvg src="articles" />
      <h1 className={stylesGeneral.title}>Artigos</h1>





      <Footer />
    </div>
  )
}
