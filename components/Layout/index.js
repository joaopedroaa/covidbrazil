import Head from 'next/head'

import Footer from "../../components/Footer"
import BackMenu from "../../components/BackMenu"
import FormatSvg from "../../components/FormatSvg"

import stylesGeneral from '../../styles/Styles.module.css'

export default function Layout(props) {
  return (
    <div className={stylesGeneral.container}>
      <Head>
        <title>Covid Brazil {props.name}</title>
      </Head>

      {props.header == "off" || <BackMenu />}
      {props.svg && <FormatSvg src={props.svg}/>}
      {props.children}
      {props.footer == "off" || <Footer />}
    </div>
  )
}
