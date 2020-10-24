import { useState } from 'react';
import useStats from '../utils/useStats';
import styles from '../styles/News.module.css'

// import Stats from './Stats';

export default function CountrySelector() {
  const { stats: news, loading, error } = useStats(
    "https://google-news.p.rapidapi.com/v1/search?country=BR&lang=pt&q=corona",
    "google-news.p.rapidapi.com",
    process.env.NEXT_PUBLIC_GOOGLE_NEWS_API_KEY
  );

  // const { stats: news, loading, error } = useStats(
  //   'http://newsapi.org/v2/top-headlines?' +
  //   "country=br&" +
  //   "q=pandemia&" +
  //   "sortBy=popularity&" +
  //   "apiKey=73c1cb62bd2444f29cda26ce59eb748f"
  // );

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <h1>Últimas notícias</h1>

      {news.articles.map((news, code) => (
        <div className={styles.news}>
          <a href={news.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {news.source.name}
          </a>

          <p>

            {news.title}
          </p>
        </div>



      ))}



    </div>
  );
}
