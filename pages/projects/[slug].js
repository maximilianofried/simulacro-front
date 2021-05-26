import Moment from 'react-moment'
import { getProject, getProjects, getCollaborators } from '../../lib/api'
import Layout from '../../components/layout'

export async function getStaticProps({ params }) {
  const project = await getProject(params.slug)
  const projects = await getProjects()
  const collaborators = await getCollaborators()
  return {
    props: { project, projects, collaborators },
    revalidate: 1,
  }
}

export default function Projects({
  project,
  projects,
  collaborators,
  setRandomNumber,
  randomNumber,
}) {
  return (
    <Layout
      projects={projects}
      content={project.content}
      contentList={project.collaborators}
      tags={project.tags}
      images={project.images}
      videos={project.videos}
      youtubeLinks={project.youtube}
      mixcloudLinks={project.mixcloud}
      collaborators={collaborators}
      id="collaborators"
      type="info"
      setRandomNumber={setRandomNumber}
      randomNumber={randomNumber}
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
