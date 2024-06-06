"use client";
import { alata } from "@/fonts";
import { healthyReasons } from "@/utils";

import { CaptivationCard } from "./CaptivationCard";

import { Container, Header, Main, Footer } from "./style.js";

export function CaptivationSection() {
  return (
    <Container>
      <Header style={alata.style}>
        MOTIVOS PARA TER UMA VIDA MAIS <br /> SAUDÁVEL COM ALIMENTAÇÃO
      </Header>
      <Main>
        {healthyReasons.map((item, index) => (
          <CaptivationCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </Main>
      <Footer style={alata.style}>
        <p>
          Adotar uma alimentação saudável é um investimento na sua saúde e
          bem-estar a longo prazo, proporcionando uma vida mais plena e
          satisfatória
        </p>

        <butoon>Fale conosco</butoon>
      </Footer>
    </Container>
  );
}
