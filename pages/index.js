import React from 'react'
import Articles from '../components/articles'
import Layout from '../components/layout'
import { getCollaborators, getProjects } from '../lib/api'

export async function getStaticProps() {
  const collaborators = await getCollaborators()
  const projects = await getProjects()
  return {
    props: { collaborators, projects },
    revalidate: 1,
  }
}

export default function Home({ collaborators, projects }) {
  return <Layout collaborators={collaborators} projects={projects} />
}
