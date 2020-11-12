import Link from 'next/link';

// Components
import Layout from '../components/Layout';

// Styles
import styles from '../styles/Dashboard.module.css';
import stylesGeneral from '../styles/Styles.module.css';

export default function Dashboard() {
  return (
    <Layout name="/ Dashboard" svg="dashboard" footer="off">
      <h1 className={stylesGeneral.title}> Johns Hopkins Dashboard </h1>
      <p className={stylesGeneral.description}>
        Os especialistas da Johns Hopkins em saúde pública global, doenças
        infecciosas e preparação para emergências estão na vanguarda da resposta
        internacional ao COVID - 19. Este dashboard é um recurso para ajudar a
        avançar na compreensão do vírus, informar o público e informar os
        legisladores a fim de orientar uma resposta, melhorar o atendimento e
        salvar vidas.
      </p>
      <Link href="/dashboard/open">
        <a className={styles.button}> Abrir </a>
      </Link>
    </Layout>
  );
}
