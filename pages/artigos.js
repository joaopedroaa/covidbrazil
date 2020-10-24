const { default: next } = require("next");

import Link from 'next/link'

import stylesGeneral from '../styles/Styles.module.css'

import Footer from "../components/Footer"
import BackMenu from "../components/BackMenu"

export default function artigos() {

  return (
    <div className={stylesGeneral.container}>
      <BackMenu />


      <h1>Artigos </h1>


      {/* <Footer /> */}
    </div>
  )
}
