import Head from 'next/head'

// Components
import Layout from "../components/Layout"

// Utils
import news from "../utils/offlineNews"
import shuffle from "../utils/shuffle"
import useStats from '../utils/useStats';


// Styles
import styles from '../styles/News.module.css'
import stylesGeneral from '../styles/Styles.module.css'


// function enableApi() {
//   const newsapilink = "https://newsapi.org/v2/everything?" +
//     "q=coronavírus&" +
//     "sortBy=popularity&" +
//     "apiKey=73c1cb62bd2444f29cda26ce59eb748f"

//   const { stats: news, loading, error } = useStats(newsapilink);

//   if (loading) return <p className={styles.container}> <img src="https://assets.materialup.com/uploads/e21b405b-4e2a-48dc-9181-625a37c1eae8/preview.gif" alt="" srcSet="" /></p>;
//   if (error) return <p className={styles.container}>Erro ao carregar notícias</p>;

//   return [news, newsapilink];
// }



export default function News() {

  return (
    <Layout name="/ Notícias" svg="newspaper" >
      <h1 className={stylesGeneral.title}>Últimas notícias</h1>

      <p className={styles.description}>coronavírus</p>

      <div className={styles.grid}>
        {shuffle(news.articles).map((news, code) => (
          <a href={news.url}
            target="_blank"
            key={code}
            rel="noopener noreferrer"
            data-aos="fade-up"
          >
            <div className={styles.card}>
              <img src={news.urlToImage} alt="" srcSet="" />
              <div className={styles.newsText}>
                <p className={styles.newsTextTitle}> {news.title}</p>
                <p className={styles.newsTextSource}> {news.author}</p>
              </div>
            </div>
          </a>

        ))}
      </div>
    </Layout >
  );
}
