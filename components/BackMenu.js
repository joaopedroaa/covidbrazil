import styles from '../styles/Styles.module.css'
import Link from 'next/link'

export default function backMenu() {
  return (
    <h2>
      <Link className={styles.backMenu} href="/">
        &larr; Menu
      </Link>
    </h2>
  )
}
