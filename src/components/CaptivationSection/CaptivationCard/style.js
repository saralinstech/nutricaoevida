import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 18rem;
  min-height: 26rem;

  box-shadow: 1px 4px 14px #808080c7;
  border-radius: 1rem;

  .header-container {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 100%;
    border-radius: 1rem 1rem 0 0;
  }

  p {
    padding: 0.5rem 0;

    background-color: #fd6f8e;
    color: white;
    text-align: center;
  }

  .description {
    padding: 1rem 1rem 1rem 1.5rem;

    color: #fd6f8e;
  }
`;
