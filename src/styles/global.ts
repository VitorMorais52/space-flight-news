import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: 28px;
        font-weight: 300;
        line-height: 40px;;
    }

    .App{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #e1e0e0;
        
        main {
            margin-top: 6rem;
        }

    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        z-index: 1;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width:100%;
        max-width: 570px;
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
        background-color: rgba(149, 69, 255, 0.9);
        background-image: linear-gradient(to right, purple , rgb(108, 0, 255));

    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        cursor: pointer;

        &:hover {
            filter: brightness(0.8);
        }
    }

 

`;
