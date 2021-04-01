import * as React from "react"
import styled from "styled-components"

import { Link } from "gatsby"
import Logo from "./logo"
import Menu from "./menu"
import { Container } from "../styles/styledComponents"

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderInner>
          <Link to="/">
            <Logo />
          </Link>
          <Menu />
        </HeaderInner>
      </Container>
    </StyledHeader>
  )
}

export default Header

// Styled components:
const StyledHeader = styled.header`
  width: 100%;
  padding: 5px 0px 5px;
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
  width: 100%;
  margin: auto;
  min-height: 64px;
`
