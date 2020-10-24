import { useState } from 'react';
import useStats from '../utils/useStats';
import styles from '../styles/News.module.css'
import Link from 'next/link'
import news from "../utils/offlineNews"

export default function CountrySelector() {
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
