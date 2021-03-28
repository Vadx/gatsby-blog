import * as React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Normalize } from 'styled-normalize'
import { Link } from "gatsby"

import Menu from "./menu"
import Footer from "./footer"
import { theme } from "../styles/theme"
import { Container } from "../styles/styledComponents"
import { GlobalStyle } from "../styles/globalStyle"
import Logo from "./logo"

const Layout = ({ location, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Wrapper>
        <Header>
          <HeaderInner>
            <Link to="/"><Logo /></Link>
            <Menu />
          </HeaderInner>
        </Header>
        <Container>
          <main>{children}</main>
        </Container>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout

const Wrapper = styled.div`
  min-height: 100vh;
`

const Header = styled.header`
  width: 100%;
  padding: 10px 20px 10px;
  background: ${props => props.theme.headerBg};
  border-bottom: 1px solid ${props => props.theme.borderColor};
  h1 {
    margin: 0;
  }
`

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  max-width: 1220px;
  width: 100%;
  margin: auto;
  min-height: 64px;
`
