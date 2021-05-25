import React, { useState, useEffect } from 'react'
import { parseCookies } from '../lib/cookie'
import Cookie from 'js-cookie'
import '../assets/css/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export async function getInitialProps({ req }) {
  const cookies = parseCookies(req)
  return {
    initalRandomValue: cookies.randomNumber,
  }
}

const App = ({ Component, pageProps, initalRandomValue }) => {
  const [randomNumber, setRandomNumber] = useState(
    initalRandomValue ? initalRandomValue : 0
  )

  useEffect(() => {
    Cookie.set('randomNumber', randomNumber)
  }, [randomNumber])

  return (
    <Component
      {...pageProps}
      setRandomNumber={setRandomNumber}
      randomNumber={randomNumber}
    />
  )
}
export default App
