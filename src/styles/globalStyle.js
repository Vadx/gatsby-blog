import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  /* HTML elements */

  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  html {
    line-height: ${props => props.theme.lineHeight};
    font-size: ${props => props.theme.fontSize};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background: ${props => props.theme.background};
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fontSize};
    margin: 0;
  }

  hr {
    background: #a1a1a1;
    height: 1px;
    border: 0;
  }

  /* Heading */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
  
  }

  h1 {
    
  }

  h2 {
    
  }

  h3 {
    
  }

  h4 {
    
  }

  h5 {
    
  }

  h6 {
    
  }

  h1 > a {
    color: inherit;
    text-decoration: none;
  }

  h2 > a,
  h3 > a,
  h4 > a,
  h5 > a,
  h6 > a {
    text-decoration: none;
    color: inherit;
  }

  /* Prose */

  p {
    color: ${props => props.theme.textColor};
    font-weight: ${props => props.theme.fontWeight};
    font-size: ${props => props.theme.fontSize};
  }

  ul,
  ol {
    margin-left: 0;
    margin-right: 0;
    padding: 0;
    margin-bottom: 20px;
    list-style-position: outside;
    list-style-image: none;
  }

  ul li,
  ol li {
    padding-left: 0;
    margin-bottom: 10px;
  }

  li > p {
    margin-bottom: 10px;
  }

  li *:last-child {
    margin-bottom: 0;
  }

  li > ul {
    margin-left: 10px;
    margin-top: 10px;
  }

  blockquote {
    font-style: italic;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  blockquote > ul,
  blockquote > ol {
    list-style-position: inside;
  }

  table {
    width: 100%;
    margin-bottom: 20px;
    border-collapse: collapse;
    border-spacing: 0.25rem;
  }

  table thead tr th {
    border-bottom: 1px solid ${props => props.theme.border};
  }

  /* Link */

  a, 
  a:visited {
    color: ${props => props.theme.primary};
  }

  a:hover,
  a:focus {
    text-decoration: none;
  }

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  small {
    font-size: 80%;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /**
  * Remove the inner border and padding in Firefox.
  */

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
  * Restore the focus styles unset by the previous rule.
  */

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
  * Correct the padding in Firefox.
  */

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

`