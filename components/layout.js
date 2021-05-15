import Head from 'next/head'
import Terminal from './terminal'
import Link from 'next/link'
import LayoutStyles from '../assets/scss/Layout.module.scss'

const Layout = ({ children, collaborators, content, projects }) => {
  return (
    <>
      <Head>
        <title>Simulacro</title>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css"
        ></link>
      </Head>
      <div className={LayoutStyles.main_layout}>
        <div
          className={`container-fluid ${LayoutStyles.no_margin} ${LayoutStyles.height_100_percent}`}
        >
          <div className={`row ${LayoutStyles.height_100_vh}`}>
            <div className="col-12 col-xl-6">
              <Terminal content={content} />
            </div>
            <div className={`col-12 col-xl-6 ${LayoutStyles.right_col}`}>
              <div className="">
                <Link href="/">
                  <a
                    className={`${LayoutStyles.no_padding} ${LayoutStyles.main_title}`}
                  >
                    Simulacro
                  </a>
                </Link>
              </div>
              <div className="">
                <ul
                  className={`align-self-baseline ${LayoutStyles.list} ${LayoutStyles.no_padding}`}
                >
                  {projects &&
                    projects.map(project => (
                      <li key={project.id}>
                        <Link
                          href={`/projects/${project.slug}`}
                          key={project.id}
                        >
                          {project.title}
                        </Link>
                      </li>
                    ))}
                  <li>Projects</li>
                  {collaborators &&
                    collaborators.map(collab => (
                      <li key={collab.id}>
                        <Link
                          href={`/collaborators/${collab.slug}`}
                          key={collab.id}
                        >
                          {collab.name}
                        </Link>
                      </li>
                    ))}
                  <li>Collaborators</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
