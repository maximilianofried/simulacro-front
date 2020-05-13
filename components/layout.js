import Head from 'next/head'
import Nav from './nav'

const Layout = ({ children, categories, article }) => (
  <>
    <Head>
      <title>Strapi blog</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Staatliches"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
    </Head>
    <Nav categories={categories} />
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
  </>
)

export default Layout
