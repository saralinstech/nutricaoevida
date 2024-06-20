import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;

  padding: 1.5rem;
  width: 20rem;
  min-height: 16rem;

  background-color: white;
  color: #fd6f8e;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  .headerTestimonialsCard {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  img {
    border-radius: 50%;
  }

  h5 {
    font-size: 1rem;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  p {
    font-size: 0.8rem;
  }
`;
