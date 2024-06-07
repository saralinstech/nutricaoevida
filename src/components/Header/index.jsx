"use client";
import { alata } from "@/fonts";

import { Container } from "./styles.js";

export default function Header() {
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
