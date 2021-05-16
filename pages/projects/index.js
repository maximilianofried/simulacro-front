import Moment from 'react-moment'
import { getProject, getProjects, getCollaborators } from '../../lib/api'
import Layout from '../../components/layout'

export async function getStaticProps() {
  //   const project = await getProject(params.slug)
  const projects = await getProjects()
  //   const collaborators = await getCollaborators()
  return {
    props: { projects },
    revalidate: 1,
  }
}

export default function Projects({ project, projects }) {
  return (
    <Layout
      // projects={projects}
      content={projects}
      type="list"
      id="projects"
      // collaborators={collaborators}
    ></Layout>
  )
}

// export async function getStaticPaths() {
//   const projects = await getProjects()
//   return {
//     paths: projects.map(projects => `/projects/${projects.slug}`),
//     fallback: false,
//   }
// }
