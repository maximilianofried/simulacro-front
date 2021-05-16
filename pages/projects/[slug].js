import Moment from 'react-moment'
import { getProject, getProjects, getCollaborators } from '../../lib/api'
import Layout from '../../components/layout'

export async function getStaticProps({ params }) {
  const project = await getProject(params.slug)
  const projects = await getProjects()
  const collaborators = await getCollaborators()
  console.log(project)
  return {
    props: { project, projects, collaborators },
    revalidate: 1,
  }
}

export default function Projects({ project, projects, collaborators }) {
  return (
    <Layout
      projects={projects}
      content={project.content}
      images={project.images}
      collaborators={collaborators}
      type="info"
    ></Layout>
  )
}

export async function getStaticPaths() {
  const projects = await getProjects()
  return {
    paths: projects.map(projects => `/projects/${projects.slug}`),
    fallback: false,
  }
}
