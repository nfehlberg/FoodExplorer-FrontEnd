import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
 :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color:${({theme})=> theme.COLORS.DARK_400};
    -webkit-font-smoothing: antialiased;
    ::-webkit-scrollbar {
      display: none;
    }
    font-size: 1.6rem;
  }

  a {
  text-decoration: none;
}

  button, a {
    cursor: pointer;
     }

  button:hover, a:hover {
    filter: brightness(1.7);
    transition: 200ms;
  }

  legend, button, a, h3{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    
  }
  
  ::-webkit-scrollbar:horizontal {
  height: 0;
  width: 0;
  display: none;
}





`