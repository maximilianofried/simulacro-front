import Head from 'next/head'
import Terminal from './terminal'
import Link from 'next/link'
import ImagesLayout from './imagesLayout'
import LayoutStyles from '../assets/scss/Layout.module.scss'

const Layout = ({
  children,
  collaborators,
  content,
  projects,
  type,
  id,
  images,
  contentCollabs,
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

      <div className={LayoutStyles.main_layout}>
        <div
          className={`container-fluid ${LayoutStyles.no_margin} ${LayoutStyles.height_100_percent}`}
        >
          <div className={`row ${LayoutStyles.main_row}`}>
            <div
              className={`row ${LayoutStyles.first_row} ${LayoutStyles.no_margin} `}
            >
              <div
                className={`col-12 col-xl-6 ${LayoutStyles.r1_first_column}`}
              >
                <div
                  className={`${LayoutStyles.scroll_box} ${LayoutStyles.hide_scrollbar}`}
                >
                  <Terminal
                    content={content}
                    contentCollabs={contentCollabs}
                    type={type}
                    id={id}
                  />
                </div>
              </div>
              <div
                className={`col-12 col-xl-6 ${LayoutStyles.title_simulacro} ${LayoutStyles.no_padding}`}
              >
                <Link
                  href="/"
                  className={`${LayoutStyles.no_padding} ${LayoutStyles.main_title}`}
                >
                  Simulacro
                </Link>
              </div>
            </div>
            <div
              className={`row ${LayoutStyles.second_row} ${LayoutStyles.no_margin} ${LayoutStyles.no_padding} ${LayoutStyles.hide_scrollbar}`}
            >
              {images && <ImagesLayout images={images} />}
            </div>
            <div
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
            </div>
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
