import { useState } from 'react';
import useStats from '../utils/useStats';
import styles from '../styles/News.module.css'
import Link from 'next/link'

// import Stats from './Stats';

export default function CountrySelector() {
  const newsapilink = "https://newsapi.org/v2/everything?" +
    "q=coronavírus&" +
    "sortBy=popularity&" +
    "apiKey=73c1cb62bd2444f29cda26ce59eb748f"

  const { stats: news, loading, error } = useStats(newsapilink);



  if (loading) return <p className={styles.container}> <img src="https://assets.materialup.com/uploads/e21b405b-4e2a-48dc-9181-625a37c1eae8/preview.gif" alt="" srcset="" /></p>;
  if (error) return <p className={styles.container}>Erro ao carregar notícias</p>;

  return (
    <div className={styles.container}>

      <h2>
        <Link className={styles.menu} href="/">
          &larr; Menu
      </Link>
      </h2>

      <h1 className={styles.title}>  Últimas notícias</h1>

      <p className={styles.description}>coronavírus</p>

      <div className={styles.grid}>
        {news.articles.map((news, code) => (
          <a href={news.url}
            target="_blank"
            rel="noopener noreferrer"
          >


            <div className={styles.card}>

              <img src={news.urlToImage} alt="" srcset="" />
              <div className={styles.newsText}>


                <p>
                  {news.title}
                </p>



                <p> {news.source.name}</p>
              </div>
            </div>
          </a>



        ))}
      </div>



    </div >
  );
}
