import { createGlobalStyle } from 'styled-components'
import { variables } from './utils/variables'

export const GlobalStyle = createGlobalStyle`

  *{
    margin:0;
    padding:0;
  }

  body {
    font-family: ${variables.fontFamily};
  }
`