import React from 'react'
import Link from 'next/link'
import ContentLayout from '../assets/scss/Content.module.scss'

const replaceContent = content => {
  let newContent = content.replace(/href/g, "target='_blank' href")
  newContent = newContent.replace()
  return newContent
}

const Terminal = ({ content, contentList, type, id }) => {
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
          {
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
          }
        </>
      ) : (
        <>
          {' '}
          <p>
            The default interactive simulation shell is now zsh. To update your
            reality, please run `chsh -s /bin/zsh`. npm run dev
          </p>
          <p>npm run dev</p>
          <p>
            Database Connected! event - compiled successfully {'>'} Ready on
            port 3000
          </p>
          <p className={`${ContentLayout.simulacro_description}`}>
            Simulacro is a transdisciplinary platform that links artists,
            technicians, performers, disciplines, and many more to deliver
            multisensorial storytelling through multidisciplinary collaborations
            blending tech art, visual, and sound. Originally founded by{' '}
            <Link href="/collaborators/ignacio-bruno">
              <a className={ContentLayout.color_black}>Ignacio Bruno</a>
            </Link>
            ,
            <Link href="/collaborators/javier-rojas">
              <a>Javier Rojas</a>
            </Link>
            ,and{' '}
            <Link href="/collaborators/maximiliano-fried">
              <a>Maximiliano Fried</a>
            </Link>{' '}
            the platform is based between Berlin (DE) and Córdoba (AR).
          </p>
          <p>See here for more info:</p>
          <p>hey(dot)simulacro(at)gmail(dot)com</p>
          <p>(at)simulacro._</p>{' '}
        </>
      )}
    </>
  )
}

export default Terminal
