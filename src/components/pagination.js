import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const Pagination = ({ currentPage, numPages }) => {
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()

  return (
    <StyledPagination>
      <Left>
        {currentPage > 1 ? (
          <Link title="Go to previous page" to={prevPage}>
            <FontAwesomeIcon icon={faArrowLeft} size="1x" />
          </Link>
        ) : (
          <span />
        )}
      </Left>

      <Center>
        Page {currentPage} of {numPages}
      </Center>

      <Right>
        {currentPage < numPages ? (
          <Link title="Go to next page" to={`/page/${currentPage + 1}`}>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Link>
        ) : (
          <span />
        )}
      </Right>
    </StyledPagination>
  )
}

export default Pagination

// Styled components:
const StyledPagination = styled.div`
  text-align: center;
  padding: 10px 0 10px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  text-align: left;
`

const Center = styled.div`
  text-align: center;
`

const Right = styled.div`
  text-align: right;
`
