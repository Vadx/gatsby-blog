import * as React from "react"
import styled from "styled-components"
import { Container } from "../styles/styledComponents"

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <InnerWrap>
          <Left>
            © {new Date().getFullYear()}, Design by{" "}
            <a href="instagram.com/_vadx_">Vadx</a>
          </Left>
          <Right>icons</Right>
        </InnerWrap>
      </Container>
    </StyledFooter>
  )
}

export default Footer

// Styled components:

const StyledFooter = styled.footer`
  margin-top: 50px;
  border-top: 1px solid ${props => props.theme.borderColor};
  padding: 20px 0;
`

const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  text-align: left;
`

const Right = styled.div`
  text-align: right;
`
