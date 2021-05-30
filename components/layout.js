import { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Terminal from './terminal'
import MediaLayout from './mediaLayout'
import LayoutStyles from '../assets/scss/Layout.module.scss'
import Cookie from 'js-cookie'
import { getRandomIntInclusive } from '../lib/helper'
import dynamic from 'next/dynamic'

const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false,
})
const updateColor = setRandomNumber => {
  if (setRandomNumber) return setRandomNumber(getRandomIntInclusive(0, 8))
  else return null
}
const Layout = ({
  children,
  collaborators,
  content,
  tags,
  projects,
  type,
  id,
  images,
  videos,
  contentList,
  youtubeLinks,
  mixcloudLinks,
  randomNumber,
  setRandomNumber,
  brickGothicPost,
}) => {
  return (
    <>
      <Head>
        <title>Simulacro</title>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css"
        ></link>
      </Head>

      <div
        className={`${LayoutStyles.main_layout} ${
          randomNumber === 0
            ? LayoutStyles.color_style_0
            : randomNumber === 1
            ? LayoutStyles.color_style_1
            : randomNumber === 2
            ? LayoutStyles.color_style_2
            : randomNumber === 3
            ? LayoutStyles.color_style_3
            : randomNumber === 4
            ? LayoutStyles.color_style_4
            : randomNumber === 5
            ? LayoutStyles.color_style_5
            : randomNumber === 6
            ? LayoutStyles.color_style_6
            : randomNumber === 7
            ? LayoutStyles.color_style_7
            : randomNumber === 8
            ? LayoutStyles.color_style_8
            : ''
        }   `}
      >
        <div
          className={`container-fluid ${LayoutStyles.no_margin} ${LayoutStyles.height_100_percent}`}
        >
          <div className={`row ${LayoutStyles.main_row}`}>
            <div
              className={`row ${LayoutStyles.first_row} ${LayoutStyles.no_margin} `}
            >
              <div
                className={`col-12 col-xl-6 ${
                  brickGothicPost ? LayoutStyles.brick_gothic_terminal : ''
                }`}
              >
                <div
                  className={`${LayoutStyles.scroll_box} ${LayoutStyles.hide_scrollbar}`}
                >
                  <Terminal
                    content={content}
                    contentList={contentList}
                    tags={tags}
                    type={type}
                    id={id}
                  />
                </div>
              </div>
              <div
                className={`col-12 col-xl-6 ${LayoutStyles.title_simulacro} ${LayoutStyles.no_padding}`}
              >
                <ul
                  className={`align-self-baseline ${LayoutStyles.list} ${LayoutStyles.no_padding} `}
                >
                  <li
                    className={`${LayoutStyles.padding_5vh} ${LayoutStyles.no_bullet} ${LayoutStyles.li_alignment}`}
                  >
                    {' '}
                    {/* <div className={LayoutStyles.square}></div> */}
                    <Link
                      href="/"
                      className={`${LayoutStyles.no_padding} ${LayoutStyles.main_title}`}
                    >
                      <a
                        data-tip="hey"
                        data-for="titleTooltip"
                        className={`${LayoutStyles.main_title} ${
                          LayoutStyles.font_title
                        } ${
                          randomNumber === 0
                            ? LayoutStyles.color_animation_0
                            : randomNumber === 1
                            ? LayoutStyles.color_animation_1
                            : randomNumber === 2
                            ? LayoutStyles.color_animation_2
                            : randomNumber === 3
                            ? LayoutStyles.color_animation_3
                            : randomNumber === 4
                            ? LayoutStyles.color_animation_4
                            : randomNumber === 5
                            ? LayoutStyles.color_animation_5
                            : randomNumber === 6
                            ? LayoutStyles.color_animation_6
                            : randomNumber === 7
                            ? LayoutStyles.color_animation_7
                            : randomNumber === 8
                            ? LayoutStyles.color_animation_8
                            : ''
                        } `}
                        onClick={() => {
                          updateColor(setRandomNumber)
                        }}
                      >
                        {' '}
                        Simulacro
                      </a>
                    </Link>
                    <ReactTooltip
                      id="titleTooltip"
                      place="left"
                      effect="solid"
                      textColor="#000000"
                      backgroundColor="#00FF00"
                      arrowColor="transparent"
                      className={`${LayoutStyles.tooltip_title}`}
                    />
                  </li>
                  <li
                    className={`${LayoutStyles.padding_2vh} ${LayoutStyles.no_bullet}`}
                  >
                    {' '}
                    <Link href="/projects">
                      <a
                        className={` ${LayoutStyles.main_title} ${LayoutStyles.secondary_button}`}
                      >
                        Projects
                      </a>
                    </Link>
                  </li>
                  <li className={`${LayoutStyles.no_bullet}`}>
                    <Link href="/collaborators">
                      <a
                        className={`${LayoutStyles.main_title} ${LayoutStyles.secondary_button}`}
                      >
                        Collaborators
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`row ${LayoutStyles.second_row} ${
                LayoutStyles.no_margin
              } ${LayoutStyles.no_padding} ${LayoutStyles.hide_scrollbar} ${
                brickGothicPost ? LayoutStyles.brick_gothic_media : ''
              }`}
            >
              {images && (
                <MediaLayout
                  images={images}
                  youtubeLinks={youtubeLinks}
                  videos={videos}
                  mixcloudLinks={mixcloudLinks}
                />
              )}
            </div>
            {/* <div
              className={`row ${LayoutStyles.third_row} ${LayoutStyles.no_margin} ${LayoutStyles.no_padding} `}
            >
              <div className="col-12 col-xl-12">
                <ul
                  className={`align-self-baseline ${LayoutStyles.list} ${LayoutStyles.no_padding}`}
                >
                  <li>
                    {' '}
                    <Link href="/projects">
                      <a
                        className={`${LayoutStyles.no_padding} ${LayoutStyles.main_title}`}
                      >
                        Projects
                      </a>
                    </Link>
                  </li>
                  <Link href="/collaborators">
                    <a
                      className={`${LayoutStyles.no_padding} ${LayoutStyles.main_title}`}
                    >
                      Collaborators
                    </a>
                  </Link>
                </ul>
              </div>
            </div> */}
          </div>

          {/* <div className={`row ${LayoutStyles.height_100_vh}`}>
            <div className="col-12 col-xl-6">
              <Terminal content={content} type={type} id={id} />
              <ImagesLayout images={images} />
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

                  <li>
                    {' '}
                    <Link href="/projects">
                      <a
                        className={`${LayoutStyles.no_padding} ${LayoutStyles.main_title}`}
                      >
                        Projects
                      </a>
                    </Link>
                  </li>
                  <Link href="/collaborators">
                    <a
                      className={`${LayoutStyles.no_padding} ${LayoutStyles.main_title}`}
                    >
                      Collaborators
                    </a>
                  </Link>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Layout
