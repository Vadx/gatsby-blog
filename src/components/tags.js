import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Tags = ({ children }) =>
  children && (
    <TagsList>
      {children.map(t => (
        <li key={t}>
          <Link to={`/tags/${t}/`}>{t}</Link>
        </li>
      ))}
    </TagsList>
  )

export default Tags

// Styled components:
const TagsList = styled.ul`
  display: flex;
  margin: 0 0 10px 0;

  li {
    margin: 0 5px 5px 0;
    list-style: none;

    a {
      color: ${props => props.theme.textColorPrimary};
      text-decoration: none;
      font-size: 80%;
      background-color: ${props => props.theme.borderColor};
      border-radius: 4px;
      padding: 3px 6px;

      &::hover {
        opacity: 0.5;
      }
    }
  }
`
