import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  *::-webkit-scrollbar {
    width: 5px;
    border-radius: 50%;
}
*::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.137254902), rgba(114, 114, 114, 0.0980392157));
    border-radius: 10px;
    border: 1px solid rgba(134, 134, 134, 0.702);
}
*::-webkit-scrollbar-track {
    background: rgba(156, 156, 156, 0.268);
}
/* *{
  overflow-x: auto;
} */
`;
