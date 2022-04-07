import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  button:hover {
    background-color: #302e53;
    filter: opacity(0.8);
  }

  h1 {
    margin: 2.5rem;
    text-align: center;
  }

  .top {
    width: 100%;

    display: flex;
    justify-content: flex-end;
    gap: 2rem;

    .form-control {
      @media (min-width: 768px) {
        width: 400px;
      }
      @media (max-width: 768px) {
        max-width: 400px;
      }
    }
  }

  .logo {
    margin-top: 2.5rem;
    max-width: 200px;
    max-height: 200px;
    overflow: hidden;

    padding: 2rem;

    border: 1px solid;
    border-radius: 50%;
    border-color: rgba(0, 0, 0, 0.2);

    svg {
      width: 100px;
      height: 100px;
    }

    &:hover {
      border-color: rgba(0, 0, 0, 1);
      filter: opacity(0.8);

      svg {
        animation: animationRocket 3s infinite;
        animation-delay: 0.3s;
      }
    }

    @keyframes animationRocket {
      0% {
      }
      25% {
        transform: rotate(-45deg);
      }
      50% {
        transform: translateY(-200px) rotate(-45deg);
      }
      75% {
        transform: translateY(0) rotate(-45deg);
      }
      100% {
        transform: rotate(0);
      }
    }
  }
`;
