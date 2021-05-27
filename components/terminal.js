import React from 'react'
import Link from 'next/link'
import ContentLayout from '../assets/scss/Content.module.scss'
import dynamic from 'next/dynamic'

const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false,
})

const replaceContent = content => {
  let newContent = content.replace(/href/g, "target='_blank' href")
  newContent = newContent.replace()
  return newContent
}

const Terminal = ({ content, contentList, type, id, tags }) => {
  let mainCollabs,
    otherCollabs = []
  if (type === 'list' && id === 'collaborators') {
    mainCollabs = content.filter(collab => collab.main_collaborator)
    otherCollabs = content.filter(collab => !collab.main_collaborator)
  }
  return (
    <>
      {content && type === 'info' ? (
        <>
          <div
            dangerouslySetInnerHTML={{
              __html: replaceContent(content ? content : ''),
            }}
          />
          <br />
          {tags && (
            <p>
              {tags.map(tag => {
                return (
                  <>
                    {' '}
                    {'#'}
                    {tag.name}
                  </>
                )
              })}
            </p>
          )}
          <br />
          <p className={ContentLayout.capitalize}> {id}: </p>
          <ul>
            {contentList &&
              contentList.map(item => {
                return (
                  <li key={item.id}>
                    <>
                      {'> '}
                      <Link href={`/${id}/${item.slug}`}>
                        <a>{item.name}</a>
                      </Link>
                    </>
                  </li>
                )
              })}
          </ul>
        </>
      ) : content && type === 'list' ? (
        <>
          {id === 'projects' && (
            <ul>
              {content.map(item => {
                let tags = item.tags

                return (
                  <li key={item.id}>
                    <>
                      {'> '}{' '}
                      <Link href={`/${id}/${item.slug}`}>
                        <a
                          data-for="projectsTooltip"
                          data-tip={tags.map(tag => tag.name)}
                        >
                          {' '}
                          {item.name}
                        </a>
                      </Link>
                    </>
                    <ReactTooltip
                      id="projectsTooltip"
                      place="right"
                      effect="solid"
                      textColor="#000000"
                      backgroundColor="#00FF00"
                      arrowColor="transparent"
                      className={`${ContentLayout.tooltip}`}
                    />
                  </li>
                )
              })}
            </ul>
          )}
          {id === 'collaborators' && (
            <>
              <p className={`${ContentLayout.simulacro_description}`}>
                Every project we collaborate on creates new connections that
                make the development meaningful. This section tends to give
                space and reveal the transdisciplinary links created behind our
                productions so far.{' '}
              </p>
              <ul>
                {mainCollabs.map(item => {
                  return (
                    <li key={item.id}>
                      <>
                        {'> '}{' '}
                        <Link href={`/${id}/${item.slug}`}>
                          <a>{item.name}</a>
                        </Link>
                      </>
                    </li>
                  )
                })}
              </ul>
              <hr className={ContentLayout.separator} />
              <ul>
                {otherCollabs.map(item => {
                  return (
                    <li key={item.id}>
                      <>
                        {'> '}{' '}
                        <Link href={`/${id}/${item.slug}`}>
                          <a>{item.name}</a>
                        </Link>
                      </>
                    </li>
                  )
                })}
              </ul>
            </>
          )}
        </>
      ) : (
        <>
          <p className={`${ContentLayout.simulacro_description}`}>
            Founded in 2019 by{' '}
            <Link href="/collaborators/ignacio-bruno">
              <a className={ContentLayout.color_black}>Ignacio Bruno</a>
            </Link>
            ,{' '}
            <Link href="/collaborators/javier-rojas">
              <a>Javier Rojas</a>
            </Link>{' '}
            and{' '}
            <Link href="/collaborators/maximiliano-fried">
              <a>Maximiliano Fried</a>
            </Link>
            , Simulacro is a transdisciplinary platform based between Berlin
            (DE) and Córdoba (AR). Working closely with artists and musicians we
            create multisensorial experiences, websites, and experimental
            interfaces. With a background in architecture, design, engineering,
            software and art our practice links analogue and digital space,
            aural and visual languages.
          </p>
          <p>
            We ensure the use of high end technology to develop our projects
            using softwares like: Node.js - React - CSS - Max MSP + Ambisonics -
            Jitter - Touch designer - Resolume Arena - Articulate - Rhino +
            Grasshopper.
          </p>
          <p> Contact us:</p>
          <p>
            {' '}
            <a href="mailto:hey.simulacro@gmail.com">
              hey(dot)simulacro(at)gmail(dot)com
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/simulacro.xyz/" target="_blank">
              (at)simulacro.xyz
            </a>
          </p>{' '}
        </>
      )}
    </>
  )
}

export default Terminal
