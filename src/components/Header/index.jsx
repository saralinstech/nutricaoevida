"use client";
import { alata } from "@/fonts";

import { Container } from "./style.js";

export function Header() {
  return (
    <Container style={alata.style}>
      <div>AC</div>
      <div>
        <a>Sobre</a>
        <a>Programas</a>
        <a>FAQ</a>
        <a>Contato</a>
      </div>
    </Container>
  );
}
