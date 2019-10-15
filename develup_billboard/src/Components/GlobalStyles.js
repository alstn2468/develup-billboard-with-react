import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
        text-decoration: none;
        padding: 0px;
        margin: 0px;
    }
    
    body {
        background-color: #333;
	    color: #666;
    }
`;

export default globalStyles;
