import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledPagination = styled.footer`
  text-align: center;
  padding: 10px 0 10px;
`

const Pagination = ({ currentPage, numPages }) => {
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()

  return (
    <StyledPagination>
      <nav className="pagination">
        {currentPage > 1 ? (
          <Link
            title="Go to previous page"
            // to={`/blog/${currentPage - 1}`}>
            to={prevPage}
          >
            ← Newer posts
          </Link>
        ) : (
          <span />
        )}
        Page {currentPage} of {numPages}
        {currentPage < numPages ? (
          <Link title="Go to next page" to={`/blog/${currentPage + 1}`}>
            Older posts →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </StyledPagination>
  )
}

export default Pagination
