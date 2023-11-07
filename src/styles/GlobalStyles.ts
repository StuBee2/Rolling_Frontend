import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./font.css";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Pretendard-Regular' !important;
     }
     
     body {
      background-color: #f9fafb;

      @media screen and (min-width: 500px) {
        zoom: 0.8;
      }
     }

    ${reset}
`;

export default GlobalStyle;
