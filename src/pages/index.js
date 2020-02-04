import React from "react"
import { graphql } from "gatsby"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { Layout } from "../components/Layout"

export default ({data}) => {
  
  return (
    <>
        <Layout>
            {data.allMdx.nodes.map(({excerpt, frontmatter}) =>
                <>
                    <h1>{frontmatter.title}</h1>
                    <p>{frontmatter.date}</p>
                    <p>{excerpt}</p>
                </>
            )}
      </Layout>
    </>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 100)
        frontmatter {
          title
          date
        }
      }
    }
  }
`
