/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link';
import styles from './BackMenu.module.css';

export default function backMenu() {
  return (
    <header className={styles.header}>
      <input
        className={styles.controlNavCheckbox}
        type="checkbox"
        id="control-nav"
      />
      <label className={styles.controlNav} htmlFor="control-nav" />
      <label className={styles.controlNavClose} htmlFor="control-nav" />

      <nav>
        <Link href="/">Menu</Link>
        <Link href="/covid">Informações</Link>
        <Link href="/articles">Artigos</Link>
        <Link href="/news">Notícias</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}
