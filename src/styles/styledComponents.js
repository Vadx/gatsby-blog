import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.theme.containerWidth};
  padding: 0 20px;
`

export const HeadlineH1 = styled.h1`
  font-size: 160%;
  margin: 0 0 10px;
`

export const HeadlineH2 = styled.h2`
  font-size: 140%;
  margin: 0 0 30px;
`
