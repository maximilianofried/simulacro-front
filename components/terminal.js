import React from 'react'
import Link from 'next/link'
import ContentLayout from '../assets/scss/Content.module.scss'

const replaceContent = content => {
  let newContent = content.replace(/href/g, "target='_blank' href")
  newContent = newContent.replace()
  return newContent
}

const Terminal = ({ content, contentList, type, id }) => {
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
          <p className={ContentLayout.capitalize}> {id}: </p>
          <ul>
            {contentList &&
              contentList.map(item => {
                return (
                  <li key={item.id}>
                    <>
                      {' '}
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
          )}
          {id === 'collaborators' && (
            <>
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
          {' '}
          <p>
            Database Connected! event - compiled successfully {'>'} Ready on
            port 3000
          </p>
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
            (DE) and Córdoba (AR). We design and bring to life multisensorial
            storytelling from blending tech, art, visual and sound through the
            co-creation of artists, technicians, and performers.
          </p>
          <p>See here for more info:</p>
          <p>
            {' '}
            <a href="mailto:hey.simulacro@gmail.com">
              hey(dot)simulacro(at)gmail(dot)com
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/simulacro.xyz/" target="_blank">
              (at)simulacro._
            </a>
          </p>{' '}
        </>
      )}
    </>
  )
}

export default Terminal
