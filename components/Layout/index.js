import Head from 'next/head';

import Footer from '../Footer';
import Header from '../Header';
import FormatSvg from '../FormatSvg';

import stylesGeneral from '../../styles/Styles.module.css';

export default function Layout(props) {
  return (
    <div className={stylesGeneral.container}>
      <Head>
        <title>Covid Brazil {props.name}</title>
      </Head>

      {props.header === 'off' || <Header />}

      <div className={stylesGeneral.content}>
        {props.svg && <FormatSvg src={props.svg} />}
        {props.children}
      </div>
      {props.footer === 'off' || <Footer />}
    </div>
  );
}
