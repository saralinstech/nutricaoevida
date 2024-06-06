import React from 'react';
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 5rem;

  width: 100vw;
  height: 37rem;

  background-image: url("ProjectImages/Hero/img-hero.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  background-color: pink;
  color: white;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    padding-top: 2rem;
  }

  h2 {
    padding: 0.2rem 0.5rem;
    margin-top: 5rem;
    margin-bottom: 0.4rem;

    background-color: #fd6f8e;
    font-size: 2rem;
    letter-spacing: 4px;
  }

  .title {
    font-size: 2.652rem;
    letter-spacing: 4px;
    text-shadow: -3px 1px 6px #fd6f8e;
    text-align: center;
  }

  .name {
    font-size: 2.4rem;
  }

  .slogan {
    font-size: 1rem;
    letter-spacing: 3px;
  }

  .containerBrand {
    display: flex;
    align-items: end;
  }

  .brand > p {
    width: 100%;
    text-align: center;
    text-shadow: -3px 1px 6px #fd6f8e;
  }
`;
