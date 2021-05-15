import React from 'react'
import Link from 'next/link'

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a className="uk-link-reset">simulacro</a>
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
      </nav>
    </div>
  )
}

export default Nav
