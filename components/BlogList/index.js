import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

// Components
import Layout from "../../components/Layout"

// Styles
import styles from '../../styles/Articles.module.css'
import stylesGeneral from '../../styles/Styles.module.css'


const BlogList = ({ allBlogs }) => {
  function truncateSummary(content) {
    return content.slice(0, 190).trimEnd() + "..."
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    // const lastUpdate = countries.lastUpdate.slice(0,10) + " às " + countries.lastUpdate.slice(11,19)

    // return date.toDateString().slice(4)
    return fullDate
  }

  return (
    <ul className={styles.unorderedList}>
      {allBlogs.length > 1 && allBlogs.map((article, code) => {
        return (
          <Link key={article.slug} href={{ pathname: `/articles/${article.slug}` }}>
            <li data-aos="zoom-in-up" className={styles.list}>

              <div className={styles.image}>
                <img
                  src={article.frontmatter.hero_image}
                  alt={article.frontmatter.hero_image} />
              </div>
              <div className={styles.data}>
                <p className={styles.date}>{reformatDate(article.frontmatter.date)}</p>
                <h2 className={styles.title}>{article.frontmatter.title}</h2>

                <h3 className={styles.description}>
                  <ReactMarkdown
                    source={truncateSummary(article.markdownBody)}
                  />
                </h3>



                <h4 className={styles.author}>{article.frontmatter.author}</h4>
              </div>
            </li>
          </Link>
        )
      })}
    </ul>
  )
}





export default BlogList
