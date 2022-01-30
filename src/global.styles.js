import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    body {
        font-family: 'Libre Franklin', sans-serif;
        padding: 20px 60px;
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }
`;