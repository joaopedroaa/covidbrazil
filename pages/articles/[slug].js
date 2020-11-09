import * as React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
const glob = require('glob')

// Components
import Layout from '../../components/Layout'

// Styles
import styles from '../../styles/ArticlesContent.module.css'
import stylesGeneral from '../../styles/Styles.module.css'


export default function BlogTemplate({ frontmatter, markdownBody, siteTitle }) {
  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }

  if (!frontmatter) return <></>

  return (
    <Layout siteTitle={siteTitle}>
      <article className={stylesGeneral.container + " " + styles.container}>

        <div className={styles.sectionTitle}>
          <h1 className={styles.title}>{frontmatter.title}</h1>

          <div className={styles.subtitle}>
            <h3 className={styles.author}>Por {frontmatter.author}</h3>
            <h4 className={styles.date}>{frontmatter.date}</h4>
          </div>
        </div>

        <span className={styles.sectionImg}>
          <img
            className={styles.img}
            src={frontmatter.hero_image}
            alt={frontmatter.title}
          />
          <p>Foto: {frontmatter.hero_image_author}</p>
        </span>


        <div className={styles.sectionContent}>
          <ReactMarkdown source={markdownBody} />
        </div>

        {/* <h2 className={styles.author}>Written By: {frontmatter.author}</h2> */}
      </article>

    </Layout>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params
  const content = await import(`../../posts/${slug}.md`)
  const config = await import(`../../data/config.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const blogs = glob.sync('posts/**/*.md')

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map(file =>
    file
      .split('/')[1]
      .replace(/ /g, '-')
      .slice(0, -3)
      .trim()
  )

  // create paths with `slug` param
  const paths = blogSlugs.map(slug => `/articles/${slug}`)
  return {
    paths,
    fallback: false,
  }
}
