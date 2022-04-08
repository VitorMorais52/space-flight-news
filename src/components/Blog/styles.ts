import styled from "styled-components";

const defineOrder = (index: number) => {
  const order = index % 2 === 0 ? 1 : -1;
  return order;
};

type BlogProps = {
  index: number;
};

export const Container = styled.div<BlogProps>`
  max-width: 800px;

  display: grid;
  gap: 2rem;
  grid-template-columns: ${({ index }) =>
    defineOrder(index) === 1 ? "auto 1.5fr" : "1.5fr auto"};

  justify-items: ${({ index }) => (defineOrder(index) === 1 ? "end" : "start")};

  font-weight: 600;
  text-align: justify;

  @media (min-width: 840px) {
    width: 800px;
  }

  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-weight: 700;
  }

  .text {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media (min-width: 420px) {
      order: ${({ index }) => defineOrder(index)};
    }
    @media (max-width: 420px) {
      align-items: center;
      justify-content: center;
    }
  }

  .double-in-line {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 4px;

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .link {
    padding: 4px;

    font-size: 14px;
    text-align: center;
    text-decoration: none;
    color: var(--blue-900);

    border-color: rgba(48, 46, 83, 0.5);
    background: var(--white);
    border: 1px solid;
    border-radius: 4px;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .img-container {
    max-width: 300px;

    display: flex;
    justify-content: ${({ index }) =>
      defineOrder(index) === 1 ? "start" : "end"};

    img {
      max-height: 300px;
      max-width: 300px;

      @media (max-width: 720px) {
        max-height: 200px;
        max-width: 200px;
      }
    }
  }

  .show-more {
    padding: 1rem;
    max-width: 100px;

    color: var(--white);
    background: var(--blue-900);
    border: none;
    border-radius: 4px;

    transition: filter 0.3s;

    &:hover {
      filter: opacity(0.8);
    }
  }
`;
