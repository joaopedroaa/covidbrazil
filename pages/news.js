// Components
import Layout from '../components/Layout';

// Utils
import news from '../utils/offlineNews.json';
import shuffle from '../utils/shuffle';

// Styles
import styles from '../styles/News.module.css';
import stylesGeneral from '../styles/Styles.module.css';

// import useStats from '../utils/useStats';

export default function News() {
  // const newsapilink =
  //   'https://newsapi.org/v2/everything?' +
  //   'q=coronavírus&' +
  //   'sortBy=popularity&' +
  //   'apiKey=73c1cb62bd2444f29cda26ce59eb748f';
  // const { stats: news, loading } = useStats(newsapilink);
  // console.log(newsapilink);
  // if (loading)
  //   return (
  //     <p className={styles.container}>
  //       <img
  //         src="https://assets.materialup.com/uploads/e21b405b-4e2a-48dc-9181-625a37c1eae8/preview.gif"
  //         alt=""
  //         srcSet=""
  //       />
  //     </p>
  //   );

  return (
    <Layout name="/ Notícias" svg="newspaper">
      <h1 className={stylesGeneral.title}>Últimas notícias</h1>

      <p className={styles.description}>coronavírus</p>

      <div className={styles.grid}>
        {shuffle(news.articles).map((article, code) => (
          <a
            href={article.url}
            target="_blank"
            key={code}
            rel="noopener noreferrer"
            data-aos="fade-up"
          >
            <div className={styles.card}>
              <img src={article.urlToImage} alt="" srcSet="" />
              <div className={styles.newsText}>
                <p className={styles.newsTextTitle}> {article.title}</p>
                <p className={styles.newsTextSource}> {article.author}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Layout>
  );
}
