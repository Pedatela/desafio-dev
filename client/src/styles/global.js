import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:wght@400&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus{
    outline: 0,
  }
  html, body, #root{
    height: 100%
  }
  body{
    background: #171616;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: Roboto Slab;
    font-size: 16px;
  }
  a {
    text-decoration: none
  }
  ul {
    list-style: none
  }
  
  button {
    cursor: pointer;
  }
`