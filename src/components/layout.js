import * as React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Link } from "gatsby"
import Footer from './footer'
import { theme } from '../styles/theme'
import { Container } from '../styles/styledComponents'
import { GlobalStyle } from '../styles/globalStyle'


const Wrapper = styled.div`
  min-height: 100vh;
`

const Header = styled.header`
  width: 100%;
  padding: 10px 20px 10px;
  border-bottom: 1px solid ${props => props.theme.border};
  h1 {
    margin: 0
  }
`

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
    header = (
      <Link to="/">
        {title}
      </Link>
    )
  }
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper data-is-root-path={isRootPath}>
          <Header>{header}</Header>
          <Container>
            <main>{children}</main>
          </Container>
          <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
