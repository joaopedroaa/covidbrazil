import Link from 'next/link';

import {
  Article,
  Coronavirus,
  Dashboard,
  BackupTable,
} from '@styled-icons/material-sharp';

// Components
import Layout from '../components/Layout';

// Styles
import styles from '../styles/Home.module.css';
import stylesGeneral from '../styles/Styles.module.css';

export default function Home() {
  return (
    <Layout header="off">
      <main className={styles.main}>
        <h1 className={styles.title}>
          covid<span>brazil</span>
        </h1>

        <p className={stylesGeneral.description}>
          Uma plataforma, que recebe, em tempo real, dados sobre casos
          epidemiológicos, com o número de casos, mortes, recuperações, e
          informações novas sobre a doença. Com o objetivo de previnir o
          usuário.
        </p>

        <div className={styles.grid}>
          <Link href="/covid">
            <a className={styles.card}>
              <p className={styles.icon}>
                <Coronavirus />
              </p>
              <h2 className={styles.cardTitle}>Informações</h2>
              <p>Algumas informações importantes para ajudar na prevenção.</p>
            </a>
          </Link>

          <Link href="/articles">
            <a className={styles.card}>
              <p className={styles.icon}>
                <Article />
              </p>
              <h2 className={styles.cardTitle}>Artigos </h2>
              <p>Artigos criados por alunos da Rezende Rammel.</p>
            </a>
          </Link>

          <Link href="/news">
            <a className={styles.card}>
              <p className={styles.icon}>
                <BackupTable />
              </p>
              <h2 className={styles.cardTitle}>Notícias </h2>
              <p>As últimas notícias para você ficar informado.</p>
            </a>
          </Link>

          <Link href="/dashboard">
            <a className={styles.card}>
              <p className={styles.icon}>
                <Dashboard />
              </p>
              <h2 className={styles.cardTitle}>Dashboard </h2>
              <p>O dashboard da Johns Hopkins é o mais completo do mundo.</p>
            </a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
