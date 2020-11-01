import styles from '../styles/Styles.module.css'

export default function FormatSvg({src}) {

  return (
    <img className={styles.svgFormated} src={"/svg/" + src + ".svg"} alt="" srcset=""/>
  )
}
