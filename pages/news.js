import { useState } from 'react';
import Link from 'next/link'

import styles from '../styles/News.module.css'
import stylesGeneral from '../styles/Styles.module.css'

import news from "../utils/offlineNews"
import useStats from '../utils/useStats';
import shuffle from "../utils/shuffle"

import Footer from "../components/Footer"
import BackMenu from "../components/BackMenu"


export default function CountrySelector() {
  return (
    <div className={stylesGeneral.container}>

      <BackMenu/>

      <h1 className={styles.title}>  Últimas notícias</h1>

      <p className={styles.description}>coronavírus</p>

      <div className={styles.grid}>
        {shuffle(news.articles).map((news, code) => (
          <a href={news.url}
            target="_blank"
            rel="noopener noreferrer"
          >

            <div className={styles.card}>

              <img src={news.urlToImage} alt="" srcset="" />
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
