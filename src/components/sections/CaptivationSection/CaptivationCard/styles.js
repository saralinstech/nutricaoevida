import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 18rem;
  min-height: 26rem;

  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.15);

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
