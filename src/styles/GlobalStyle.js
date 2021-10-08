import { createGlobalStyle } from "styled-components";

import background from '../assets/background.svg'

export default createGlobalStyle`
  :root {
    --primary: #185adb;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }


  body, input, button {
    font: 400 1rem sans-serif;
    background-image: url(${background});

  }
  
  input, button {
    all:unset;
    cursor: pointer;
    border-radius: 5px;
  }
  
  input, select, option{
    text-align: left;
    padding-left: 3vh;
    border-radius: 5px;
  }

`;