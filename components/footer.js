import React from 'react'
import Link from 'next/link'
import FooterStyles from '../assets/scss/Footer.module.scss'

const Footer = ({ categories }) => {
  return (
    <div>
      <footer
        className={FooterStyles.footer}
        // uk-sticky="bottom: true"
        // data-uk-navbar
      >
        {/* <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>Strapi Blog</a>
              </Link>
            </li>
          </ul>
        </div> */}

        <div className={FooterStyles.footer_right}>
          <ul className="uk-navbar-nav uk-flex-column">
            <li>
              <Link href="/">
                <a className="">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="">Collaborators</a>
              </Link>
            </li>
            {/* {categories.map(category => {
              return (
                <li key={category.id}>
                  <Link as={`/category/${category.id}`} href="/category/[id]">
                    <a className="uk-link-reset">{category.name}</a>
                  </Link>
                </li>
              )
            })} */}
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
