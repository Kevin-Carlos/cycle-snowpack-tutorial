import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.6rem;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  };

  h1, h2, h3, h4, h5 {
    font-family: 'Roboto Slab', serif;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;
