import * as React from "react"
import styled from "styled-components"
import { Container } from "../styles/styledComponents"

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faFacebookSquare,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <InnerWrap>
          <Left>
            © {new Date().getFullYear()}, Design by{" "}
            <a href="instagram.com/_vadx_">Vadx</a>
          </Left>
          <Right>
            <IconLink href="https://instagram.com/_vadx_" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </IconLink>
            <IconLink href="https://facebook.com" target="_blank">
              <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
            </IconLink>
            <IconLink href="https://twitter.com" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </IconLink>
            <IconLink href="https://twitter.com" target="_blank">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </IconLink>
          </Right>
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

const IconLink = styled.a`
  margin: 0 7px;
  color: ${props => props.theme.iconsColor};
  &:hover {
    color: ${props => props.theme.primary};
  }
`

const Right = styled.div`
  text-align: right;
`
