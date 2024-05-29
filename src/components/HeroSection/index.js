"use client";
import { Container } from "./style";

export const HeroSection = () => {
  return (
    <Container>
      <div>
        <h2>Alimente seu corpo, nutra sua vida</h2>
        <p className="title">
          DESCUBRA O PODER DE UMA <br /> ALIMENTAÇÃO EQUILIBRADA
        </p>
      </div>
      <div className="containerBrand">
        <div className="brand">
          <p className="name">Angelina Cruz</p>
          <p className="slogan">NUTRIÇÃO & VIDA</p>
        </div>
      </div>
    </Container>
  );
};
