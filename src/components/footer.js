import * as React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  text-align: center;
  padding: 10px 0 10px;
`

const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </StyledFooter>
  )
}

export default Footer
