import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
${({ theme }) => css`
  html {
    font-size: 62.5%;
  }
  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
  }
  ::-webkit-scrollbar {
    width: 1rem;
  }
  ::-webkit-scrollbar-track {
    background: ${theme.colors.darkBlue};
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.white};
    border-radius: 1rem;
  }
`}

`

export default GlobalStyles
