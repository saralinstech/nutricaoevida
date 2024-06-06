"use client";
import { Dancing_Script } from "next/font/google";

import { Container } from "./style";

const dancing_script = Dancing_Script({
  style: "normal",
  weight: ["400"],
  subsets: ["latin"],
});

export function BenefitsRange() {
  return (
    <Container className={`${dancing_script.className}`}>
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
