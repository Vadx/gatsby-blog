import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/Seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <Title>404: Not Found</Title>
      <Description>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Description>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

//Styled components:

const Title = styled.h1`
  text-align: center;
  margin: 0 0 20px 0;
  padding-top: 40px;
`

const Description = styled.p`
  margin: 0;
  text-align: center;
`
