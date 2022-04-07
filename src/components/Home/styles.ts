import styled from "styled-components";

export const Main = styled.main`
  max-width: 1365px;
  width: 1365px;
`;

export const GridBlog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

export const Footer = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  .square {
    width: 15px;
    height: 15px;
    border: 2px solid;
    border-color: rgba(48, 46, 83, 0.5);
    background-color: rgba(48, 46, 83, 0.2);

    transition: transform 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }

  .load-more {
    margin-top: 2rem;
    padding: 1rem;
    max-width: 140px;

    font-weight: 600;
    color: var(--blue-900);

    background: var(--white);
    border-color: var(--blue-900);
    border: 1px solid;
    border-radius: 4px;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
