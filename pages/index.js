import React, { useState, useEffect } from 'react'
import Articles from '../components/articles'
import Layout from '../components/layout'
import { getCollaborators, getProjects } from '../lib/api'
import { parseCookies } from '../lib/cookie'
import Cookie from 'js-cookie'

export async function getStaticProps() {
  const collaborators = await getCollaborators()
  const projects = await getProjects()
  return {
    props: { collaborators, projects },
    revalidate: 1,
  }
}

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min) //The maximum is inclusive and the minimum is inclusive
}

export default function Home({
  collaborators,
  projects,
  setRandomNumber,
  randomNumber,
}) {
  useEffect(() => {
    setRandomNumber(getRandomIntInclusive(0, 8))
  }, [randomNumber])

  return (
    <Layout
      collaborators={collaborators}
      projects={projects}
      setRandomNumber={setRandomNumber}
      randomNumber={randomNumber}
    />
  )
}
