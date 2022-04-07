import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --white: #ffffff;
        --pumpkin: #d07017;
        --gray-100: #e1e1e6;
        --gray-300: #a8a8b3;
        --gray-900: #1e2022;
        --cyan-500: #61dafb;
        --blue-900: #302e53;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 400;
        color: var(--blue-900);
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: 28px;
        font-weight: 400;
        line-height: 40px;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    button {
        cursor: pointer;
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
        max-width: 700px;
        padding: 4rem;
        position: relative;
        border-radius: 0.24rem;
        background-color: var(--white);
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
            filter: opacity(0.8);
        }
    }
`;
