import * as React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Normalize } from "styled-normalize"
import PageTransition from "gatsby-plugin-page-transitions"

import { theme } from "../styles/theme"
import Footer from "./footer"
import { Container } from "../styles/styledComponents"
import { GlobalStyle } from "../styles/globalStyle"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Wrapper>
        <Header />
        <PageTransition transitionTime={500}>
          <Container>
            <Main>{children}</Main>
          </Container>
        </PageTransition>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout

const Wrapper = styled.div`
  min-height: 100vh;
`

const Main = styled.main`
  padding-top: 40px;
`
