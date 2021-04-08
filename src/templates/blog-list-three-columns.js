import * as React from "react"
import styled from "styled-components"

// Components
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagination from "../components/pagination"
import Tags from "../components/tags"

const BlogList = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || "Title"
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <p>No blog posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />

      <List>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const tags = post.frontmatter.tags
          const image = getImage(post.frontmatter.featuredImg)
          // const image = post.frontmatter.featuredImg

          return (
            <PostItem key={post.fields.slug}>
              <article itemScope itemType="http://schema.org/Article">
                {/* <GatsbyImage image={image} alt={title} /> */}
                {console.log("IMAGE===>", image)}

                {!image && <span>Hello World</span>}
                <header>
                  <HeadlineH3>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </HeadlineH3>
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
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 24px);
  margin: -12px;
`

const PostItem = styled.li`
  margin: 0 0 30px;
  flex-grow: 0;
  max-width: 33.3333%;
  flex-basis: 33.3333%;
  padding: 12px;
`

const HeadlineH3 = styled.h3`
  font-size: 24px;
  font-weight: 300;
  margin: 0 0 20px;

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
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
          featuredImg
        }
      }
    }
  }
`
