import * as React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Link } from "gatsby"

import Menu from "./menu"
import Footer from "./footer"
import { theme } from "../styles/theme"
import { Container } from "../styles/styledComponents"
import { GlobalStyle } from "../styles/globalStyle"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = <Link to="/">{title}</Link>
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper data-is-root-path={isRootPath}>
        <Header>
          <HeaderInner>
            {header}
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
  border-bottom: 1px solid ${props => props.theme.border};
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
