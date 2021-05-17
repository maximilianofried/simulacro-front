async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(
    `${process.env.API_URL || 'http://localhost:1337'}/graphql`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  )

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getCollaborators() {
  const data = await fetchAPI(`query Collaborators {
    collaborators(sort: "name:desc") {
      id
      name
      slug
      link
    }
  }`)
  return data.collaborators
}

export async function getCollaborator(slug) {
  const data = await fetchAPI(
    `query Collaborators($slug: String!) {
    collaborators(where: {slug: $slug}) {
      id
      name
      slug
      link
      description
      content
      projects {
        name
        slug
      }
    }
  }`,
    { variables: { slug } }
  )
  return data.collaborators[0]
}

export async function getProjects() {
  const data = await fetchAPI(`query Projects {
    projects(sort: "date:desc") {
      id
      name
      slug
    }
  }`)
  return data.projects
}

export async function getProject(slug) {
  const data = await fetchAPI(
    `query Projects($slug: String!) {
    projects(where: {slug: $slug}) {
      id
      name
      slug
      description
      content
      links {
        url
      }
      collaborators {
        name
        link
        slug
        id
      }
      images {
        url
        formats
        id
      }
      date
    }
  }`,
    { variables: { slug } }
  )
  return data.projects[0]
}
