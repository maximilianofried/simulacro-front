import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import { getCollaborator, getCollaborators, getProjects } from '../../lib/api'
import Layout from '../../components/layout'
import Terminal from '../../components/terminal'

export async function getStaticProps({ params }) {
  const collaborator = await getCollaborator(params.slug)
  const collaborators = await getCollaborators()
  const projects = await getProjects()
  return {
    props: { collaborator, collaborators, projects },
    revalidate: 1,
  }
}

export default function Collaborators({
  collaborator,
  collaborators,
  projects,
}) {
  return (
    <Layout
      collaborators={collaborators}
      content={collaborator.content}
      contentList={collaborator.projects}
      projects={projects}
      type="info"
      id="projects"
    ></Layout>
    //   <p>
    //   <Moment format="MMM Do YYYY">{article.published_at}</Moment>
    // </p>
  )
}

export async function getStaticPaths() {
  const collaborators = await getCollaborators()
  return {
    paths: collaborators.map(
      collaborators => `/collaborators/${collaborators.slug}`
    ),
    fallback: false,
    revalidate: 1,
  }
}
