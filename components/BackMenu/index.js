import styles from './BackMenu.module.css'
import Link from 'next/link'

export default function backMenu() {
  return (
    <header className={styles.header}>
      <input className={styles.controlNavCheckbox} type="checkbox" id="control-nav" />
      <label className={styles.controlNav} htmlFor="control-nav"></label>
      <label className={styles.controlNavClose} htmlFor="control-nav"></label>

      <nav>
        <Link href="/">Menu</Link>
        <Link href="/covid">Informações</Link >
        <Link href="/articles">Artigos</Link>
        <Link href="/news">Notícias</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  )
}
