import styles from './BackMenu.module.css'
import Link from 'next/link'

export default function backMenu() {
  return (
    <header className={styles.header}>
      <Link href="/">Menu</Link>
      <Link href="/covid">Informações</Link >
      <Link href="/articles">Artigos</Link>
      <Link href="/news">Notícias</Link>
      <Link href="/dashboard">Dashboard</Link>
    </header>
  )
}
