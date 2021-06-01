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
                We aim to build a platform for meaningful and long-term
                exchange. Over the past years, we were able to work with many
                inspiring people on several projects. Here we give space to our
                collaborators to interconnect the Simulacro platform with their
                external network.
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
          <textarea
            rows="8"
            cols="70"
            className={`${ContentLayout.simulacro_description}`}
          >
            Founded in 2019 by Ignacio Bruno, Javier Rojas and Maximiliano Fried
            , Simulacro is a transdisciplinary platform based between Berlin
            (DE) and Córdoba (AR). Working closely with artists and musicians we
            create multisensorial experiences, websites, and experimental
            interfaces. With a background in architecture, design, engineering,
            software and art our practice links analogue and digital space,
            aural and visual languages.
          </textarea>
          <p>
            We use software technologies like: Javascript - Python - C++ - Max
            MSP + Ambisonics - Jitter - Touch designer - Resolume Arena -
            Articulate - Rhino + Grasshopper.
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
