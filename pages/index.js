import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import { getCollaborators, getProjects } from '../lib/api'
import { getRandomIntInclusive } from '../lib/helper'

export async function getStaticProps() {
  const collaborators = await getCollaborators()
  const projects = await getProjects()
  return {
    props: { collaborators, projects },
    revalidate: 1,
  }
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
