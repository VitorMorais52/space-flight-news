import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 1365px;
    width: 1365px;
    margin: 2rem;
  }
`;

export const GridBlog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;
