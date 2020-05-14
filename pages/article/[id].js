import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import { getArticles, getArticle, getCategories } from '../../lib/api'
import Layout from '../../components/layout'

export async function getStaticProps({ params }) {
  const article = await getArticle(params.id)
  const categories = await getCategories()
  return {
    props: { article, categories },
    unstable_revalidate: 1,
  }
}

export default function Article({ article, categories }) {
  return (
    <Layout categories={categories} article={article}>
      <ReactMarkdown source={article.content} />
      <p>
        <Moment format="MMM Do YYYY">{article.published_at}</Moment>
      </p>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articles = await getArticles()
  return {
    paths: articles.map(article => `/article/${article.id}`),
    fallback: false,
  }
}
