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

export async function getArticles() {
  const data = await fetchAPI(`query Articles {
    articles(sort: "published_at:desc") {
      id
      title
      category {
        id
        name
      }
      image {
        url
        alternativeText
      }
    }
  }`)
  return data.articles
}

export async function getArticle(id) {
  const data = await fetchAPI(
    `query Articles($id: ID!) {
    article(id: $id) {
      id
      title
      content
      image {
        url
        alternativeText
      }
      category {
        id
        name
      }
      published_at
    }
  }`,
    { variables: { id } }
  )
  return data.article
}

export async function getCategories() {
  const data = await fetchAPI(`query Categories {
    categories {
      id
      name
    }
  }`)
  return data.categories
}

export async function getCategory(id) {
  const data = await fetchAPI(
    `query Category($id: ID!) {
    category(id: $id) {
      id
      name
      articles {
        id
        title
        content
        image {
          url
          alternativeText
        }
        category {
          id
          name
        }
      }
    }
  }
`,
    { variables: { id } }
  )
  return data.category
}
