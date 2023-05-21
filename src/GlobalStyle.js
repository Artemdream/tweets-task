import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`

 body {
   max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px;
  height: 100vh;
  background: radial-gradient(circle, rgba(87,82,168,1) 0%, rgba(109,223,215,1) 56%, rgba(178,121,226,1) 100%) ;
}

;root{
  font-size: 20px;
  line-height: 1.2;

  font-family:'Montserrat',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}

button{
cursor: pointer;
}
`;
