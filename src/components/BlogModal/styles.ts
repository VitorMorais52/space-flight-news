import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;

  display: flex;
  gap: 2rem;
  font-weight: 600;
  text-align: justify;

  h2 {
    font-weight: 700;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .double-in-line {
    display: flex;
    justify-content: space-between;
  }

  .img-container {
    max-width: 300px;
    width: 300px;

    display: flex;
    justify-content: start;

    img {
      max-height: 300px;
      max-width: 300px;
    }
  }

  .visit-site {
    margin-top: 1rem;
    padding: 1rem;
    max-width: 130px;

    display: flex;
    justify-content: center;

    font-weight: normal;
    color: var(--white);
    background: var(--blue-900);
    border: none;
    border-radius: 4px;
    text-decoration: none;

    transition: filter 0.3s;

    &:hover {
      filter: opacity(0.8);
    }
  }
`;
