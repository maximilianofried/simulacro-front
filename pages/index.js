import React from 'react'
import Articles from '../components/articles'
import Layout from '../components/layout'
import { getArticles, getCategories } from '../lib/api'

export async function getStaticProps() {
  const articles = await getArticles()
  const categories = await getCategories()
  return {
    props: { articles, categories },
    unstable_revalidate: 1,
  }
}

export default function Home({ articles, categories }) {
  return (
    <Layout categories={categories}>
      <h1>Strapi blog</h1>
      <Articles articles={articles} />
    </Layout>
  )
}
