import Link from 'next/link'

import useStats from '../utils/useStats'

import Stats from '../components/Stats'
import CountrySelector from '../components/CountrySelector'
import RateOfChange from '../components/RateOfChange'
import Footer from "../components/Footer"
import BackMenu from "../components/BackMenu"

import styles from '../styles/Covid.module.css'
import stylesGeneral from '../styles/Styles.module.css'

const { default: next } = require("next");

export default function artigos() {



  return (

    <div className={stylesGeneral.container}>
      <BackMenu />


      <h1>Brasil</h1>

      <Stats url="https://covid19.mathdro.id/api/countries/BRA" />

      <CountrySelector></CountrySelector>

      {/* <RateOfChange /> */}

      {/* <Footer /> */}
    </div>

  )
}
