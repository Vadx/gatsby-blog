import * as React from "react"
import styled from "styled-components"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import Pagination from "../components/pagination"
import Tags from "../components/tags"
import { HeadlineH1 } from "../styles/styledComponents"

const BlogList = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || "Title"
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>No blog posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />

      <List>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const tags = post.frontmatter.tags

          return (
            <PostItem key={post.fields.slug}>
              <article itemScope itemType="http://schema.org/Article">
                <header>
                  <HeadlineH1>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </HeadlineH1>
                  <Tags>{tags}</Tags>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </PostItem>
          )
        })}
      </List>

      <Pagination
        numPages={pageContext.numPages}
        currentPage={pageContext.currentPage}
      />
    </Layout>
  )
}

export default BlogList

// Styled components:
const List = styled.ol`
  list-style: none;
`

const PostItem = styled.li`
  margin: 0 0 30px;
`

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`
