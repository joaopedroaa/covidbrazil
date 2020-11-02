import { useState } from 'react';
const { default: next } = require("next");
import Link from 'next/link'
import Head from 'next/head'

import styles from '../styles/News.module.css'
import stylesGeneral from '../styles/Styles.module.css'

import news from "../utils/offlineNews"
import useStats from '../utils/useStats';
import shuffle from "../utils/shuffle"

import Footer from "../components/Footer"
import BackMenu from "../components/BackMenu"
import FormatSvg from "../components/FormatSvg"


export default function News() {
  // const newsapilink = "https://newsapi.org/v2/everything?" +
  //   "q=coronavírus&" +
  //   "sortBy=popularity&" +
  //   "apiKey=73c1cb62bd2444f29cda26ce59eb748f"
  // const { stats: news, loading, error } = useStats(newsapilink);
  // if (loading) return <p className={styles.container}> <img src="https://assets.materialup.com/uploads/e21b405b-4e2a-48dc-9181-625a37c1eae8/preview.gif" alt="" srcset="" /></p>;
  // if (error) return <p className={styles.container}>Erro ao carregar notícias</p>;

  return (
    <div className={stylesGeneral.container}>
      <Head>
        <title>Covid Brazil / Notícias</title>
        <link rel="icon" href="/icons/android-chrome-192x192.png" />
      </Head>

      <BackMenu />
      <FormatSvg src="newspaper" />

      <h1 className={stylesGeneral.title}>Últimas notícias</h1>

      <p className={styles.description}>coronavírus</p>

      <div className={styles.grid}>
        {shuffle(news.articles).map((news, code) => (
          <a href={news.url}
            target="_blank"
            key={code}
            rel="noopener noreferrer"
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

      <Footer />
    </div >
  );
}
