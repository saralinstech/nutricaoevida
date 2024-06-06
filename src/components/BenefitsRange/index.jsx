"use client";
import { dancing_script } from "@/fonts";

import { Container } from "./style.js";

export function BenefitsRange() {
  return (
    <Container style={dancing_script.style}>
      <div>Saúde</div>
      <div>+</div>
      <div>Bem-estar</div>
      <div>+</div>
      <div>Auto-estima</div>
      <div>+</div>
      <div>Performance</div>
      <div>+</div>
      <div>Beleza</div>
    </Container>
  );
}
