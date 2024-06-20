import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7rem;

  width: 100vw;
  height: 48rem;

  background-image: url("/ProjectImages/TestimonialsSection/background-image-testimonials-section.png");
  background-repeat: no-repeat;
  background-size: cover;

  .titlesTestimonialsSection {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    padding: 0.5rem 12rem;
    background-color: white;
    color: #fd6f8e;
  }

  .subTitleTestimonialsSection {
    padding: 0.5rem 12rem;
    background-color: #fd6f8e;
    color: white;
  }

  .ContainerTestimonialsSection {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 3rem;

    max-width: 77.438rem;
  }
`;
