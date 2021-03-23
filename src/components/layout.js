import * as React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { Link } from "gatsby"
import Footer from './footer'
import { theme } from '../styles/theme'


const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
  }
  a, a:visited {
    color: ${props => props.theme.primary}
  }
  p {
    color: ${props => props.theme.textColor};
    font-weight: ${props => props.theme.fontWeight};
    font-size: ${props => props.theme.fontSize};
  }
  ul, li {
    font-weight: 300;
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  max-width: 1024px;
`

const Header = styled.header`
  
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div data-is-root-path={isRootPath}>
        <Wrapper>
          <Header>{header}</Header>
          <main>{children}</main>
          <Footer />
        </Wrapper>
      </div>
    </ThemeProvider>
  )
}

export default Layout
