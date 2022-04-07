import styled from "styled-components";

export const Container = styled.header`
  max-width: 1365px;
  width: 1365px;
  margin-top: 2rem;

  margin-bottom: 3.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    transition: filter 0.3s;
  }

  button:hover {
    background-color: var(--blue-900);
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
    margin-top: 3.5rem;
    padding: 2rem;

    max-width: 200px;
    max-height: 200px;
    overflow: hidden;

    border: 1px solid;
    border-radius: 50%;
    border-color: rgba(0, 0, 0, 0.2);

    transition: filter 0.3s;

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
