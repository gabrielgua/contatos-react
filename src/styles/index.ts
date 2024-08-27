import styled, { createGlobalStyle } from 'styled-components'
import vars from './vars'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    color: black;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: black;
    background-color: ${vars.clrBg};
  }
`

export const Container = styled.div`
  width: min(800px, 100% - 2rem);
  margin-inline: auto;
  color: black;
`

export default GlobalStyles
