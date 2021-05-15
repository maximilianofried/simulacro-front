import Head from 'next/head'
import Nav from './nav'
import Footer from './footer'
import Link from 'next/link'
import LayoutStyles from '../assets/scss/Layout.module.scss'

const Layout = ({ children, categories, article }) => {
  console.log(children)
  return (
    <>
      <Head>
        <title>Simulacro</title>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css"
        ></link>
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" /> */}
      </Head>
      <div className={LayoutStyles.main_layout}>
        <div className={`container-fluid ${LayoutStyles.no_margin}`}>
          <div className="row">
            <div className="col">
              <p>
                The default interactive simulation shell is now zsh. To update
                your reality, please run `chsh -s /bin/zsh`. npm run dev
              </p>
              <p>
                {'>'} portfolio-dep@1.0.0 dev /Users/simulacro/web/ {'>'} node
                server/index.js
              </p>
              <p>
                The static reality has been deprecated in favor of the enhanced
                simulation. https://err.sh/zeit/next.js/static-dir-deprecated
                (node:1363) ExperimentalWarning: The fs.promises API is
                experimental Browserslist: caniuse-lite is outdated.
              </p>
              <p>
                Database Connected! event - compiled successfully {'>'} Ready on
                port 3000
              </p>
              <p>
                Simulacro Studio is a transdisciplinary studio based between
                Berlin (DE) and Córdoba (AR) that delivers multisensorial
                storytelling through multidisciplinary collaborations blending
                tech art, visual, and sound.
              </p>
              <p>See here for more info:</p>
              <p>hey(dot)simulacro(at)gmail(dot)com</p>
              <p>(at)simulacro._</p>
            </div>
            <div className={`col ${LayoutStyles.right_col}`}>
              <div className="row  justify-content-end">
                <Link href="/">
                  <a
                    className={`${LayoutStyles.no_padding} ${LayoutStyles.main_title}`}
                  >
                    Simulacro
                  </a>
                </Link>
              </div>
              <div className={`row  ${LayoutStyles.menu}`}>
                <ul
                  className={`align-self-baseline ${LayoutStyles.list} ${LayoutStyles.no_padding}`}
                >
                  <li>Projects</li>
                  <li>Collaborators</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Nav categories={categories} />
      {article ? (
        <>
          <div
            id="banner"
            className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
            data-src={article.image.url}
            data-srcset={article.image.url}
            data-uk-img
          >
            <h1>{article.title}</h1>
          </div>

          <div className="uk-section">
            <div className="uk-container uk-container-small">{children}</div>
          </div>
        </>
      ) : (
        <div className="uk-section">
          <div className="uk-container uk-container-large">{children}</div>
        </div>
      )}
      <Footer categories={categories} /> */}
    </>
  )
}

export default Layout
