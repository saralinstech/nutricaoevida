"use client";
import { inter, alata } from "@/fonts";

import { Container } from "./style.js";

export function HeroSection() {
  return (
    <Container>
      <div>
        <h2 style={inter.style}>Alimente seu corpo, nutra sua vida</h2>
        <p className="title" style={alata.style}>
          DESCUBRA O PODER DE UMA <br /> ALIMENTAÇÃO EQUILIBRADA
        </p>
      </div>
      <div className="containerBrand">
        <div className="brand" style={alata.style}>
          <p className="name">Angelina Cruz</p>
          <p className="slogan">NUTRIÇÃO & VIDA</p>
        </div>
      </div>
    </Container>
  );
}
