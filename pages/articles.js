// Components
import Layout from "../components/Layout"

// Styles
import styles from '../styles/Articles.module.css'
import stylesGeneral from '../styles/Styles.module.css'

const articles = [
  {
    image: "01-small.jpg",
    author: "Joao",
    date: "05 de maio de 2020",
    title: "Lorem ipsum dolor sit amet",
    subtitle: "ossimus sunt provident eve nihil quod quam, ossimus sunt provident eve nihil quod quam",
  },
  {
    image: "02-small.jpg",
    author: "Pedro",
    date: "04 de maio de 2020",
    title: "Lorem ipsum ",
    subtitle: "ossimus sunt provident eve nihil quod quam, ossimus sunt provident eve nihil quod quam ossimus sunt provident eve nihil quod quam, ossimus sunt provident eve nihil quod quam",
  },
  {
    image: "01-small.jpg",
    author: "Joao",
    date: "05 de maio de 2020",
    title: "Lorem ipsum dolor sit amet",
    subtitle: "ossimus sunt provident eve nihil quod quam, ossimus sunt provident eve nihil quod quam ossimus sunt provident eve nihil quod quam, ossimus sunt provident eve nihil quod quam ossimus sunt provident eve nihil quod quam, ossimus sunt provident eve nihil quod quam",
  }
]

export default function artigos() {

  return (
    <Layout name="/ Artigos" svg="articles" footer="on">
      <h1 className={stylesGeneral.title}>Artigos</h1>

      <ul className={styles.unorderedList}>
        {articles.map((article, code) => {
          return (
            <li className={styles.list}>

              <div className={styles.image}>
                <img src={"/articles/" + article.image} alt="" />
              </div>
              <div className={styles.data}>
                <p>{article.date}</p>
                <h2>{article.title}</h2>
                <h3>{article.subtitle}</h3>
                <h4>{article.author}</h4>
              </div>
            </li>
          )
        })}
      </ul>

    </Layout>
  )
}
