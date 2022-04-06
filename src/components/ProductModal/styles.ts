import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    max-width: 300px;

    .submit-update-product {
      margin-top: 1rem;
      width: 100%;
      height: 54px;
      cursor: pointer;
      border: none;

      background: rgb(239, 239, 239);
      color: #b22e6f;
      border-radius: 4px;

      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.9);
      }
    }

    .product {
      padding-top: 0.5rem;
      margin-bottom: 1rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      background-color: rgba(0, 0, 0, 0.7);
      color: white;

      order: reverse;

      img {
        margin-top: 1rem;
        width: 300px;
        height: 200px;
      }
    }

    label {
      display: flex;
      flex-direction: column;
      color: white;
    }

    .input-textarea {
      margin-top: 0.5rem;
      padding: 0.5rem;
      color: white;

      border-radius: 4px;
      background: rgba(0, 0, 0, 0.32);
      backdrop-filter: blur(2px);

      resize: none;
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;
