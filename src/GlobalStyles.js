import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Georama', sans-serif;
  }

  body {
    background: linear-gradient(45deg, #f5f7fa, #c3cfe2);
  }
`;
export default GlobalStyle;