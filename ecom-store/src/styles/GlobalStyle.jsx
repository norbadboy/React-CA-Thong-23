import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        --color-primary: #ff0080;
        --color-primary-light: #ff79c6;
        --color-primary-dark: #c5004f;
        --color-secondary: #0070f3;
        --color-secondary-light: #79b8ff;
        --color-secondary-dark: #0047b3;
        --color-tertiary: #00b8d9;
        --color-tertiary-light: #6effff;
        --color-tertiary-dark: #008ba3;
        --color-success: #36b37e;
        --color-success-light: #79f2c0;
        --color-success-dark: #00875a;
        --color-warning: #ffab00;
        --color-warning-light: #ffd766;
        --color-warning-dark: #b26e00;
        --color-danger: #ff5630;
        --color-danger-light: #ff8f71;
        --color-danger-dark: #b21f00;
        --color-neutral-0: #ffffff;
        --color-background: #1e1e1e;
    }
    body {
        height: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }
`;

export default GlobalStyle;
