const { default: next } = require("next");

import Link from 'next/link'
import Head from 'next/head'


import stylesGeneral from '../styles/Styles.module.css'

import Footer from "../components/Footer"
import BackMenu from "../components/BackMenu"

export default function artigos() {

  return (
    <div className={stylesGeneral.container}>
      <Head>
        <title>Covid Brazil / Artigos</title>
        <link rel="icon" href="/icons/android-chrome-192x192.png" />
      </Head>


      <BackMenu />


      <h1>Artigos </h1>


      {/* <Footer /> */}
    </div>
  )
}
