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
          <p>
            {'>'} portfolio-dep@1.0.0 dev /Users/simulacro/web/ {'>'} node
            server/index.js
          </p>
          <p>
            The static reality has been deprecated in favor of the enhanced
            simulation. https://err.sh/zeit/next.js/static-dir-deprecated
            (node:1363) ExperimentalWarning: The fs.promises API is experimental
            Browserslist: caniuse-lite is outdated.
          </p>
          <p>
            Database Connected! event - compiled successfully {'>'} Ready on
            port 3000
          </p>
          <p className={`${ContentLayout.simulacro_description}`}>
            Simulacro Studio is a transdisciplinary studio based between Berlin
            (DE) and Córdoba (AR) that delivers multisensorial storytelling
            through multidisciplinary collaborations blending tech art, visual,
            and sound.
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
