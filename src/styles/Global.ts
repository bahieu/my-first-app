import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

 export const GlobalStyles = createGlobalStyle`
 
${reset}
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
a {
    text-decoration: none;
    cursor: pointer;
}
`;

export default GlobalStyles;


