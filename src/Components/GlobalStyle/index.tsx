import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`

  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: ${props => props.theme.fonte.geral};
    font-size: ${props => props.theme.tamanho.geral};
  }
`

export default GlobalStyle;