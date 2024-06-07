import { styled } from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;

  padding: 2rem 4rem;

  width: 100vw;
  height: fit-content;

  background-color: white;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.8rem;
  text-align: center;
  color: #fd6f8e;
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  max-width: 77.438rem;
  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 3rem;

  margin-top: 1.5rem;

  p {
    color: #fd6f8e;
    font-size: 1rem;
  }
`;
