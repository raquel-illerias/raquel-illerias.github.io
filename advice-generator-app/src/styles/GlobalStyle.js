import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');

    *, *::before, *::after{
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        padding: 0;
        border: none;
        outline: none;
    }
    body{
        font-family: 'Manrope', sans-serif;
        min-height: 100vh;
        font-size: 28px;
        background-color: hsl(218, 23%, 16%);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: context-menu;
    }
`;