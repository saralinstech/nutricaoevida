"use client";

import { CaptivationCard } from "./CaptivationCard";
import { healthyReasons } from "./CaptivationCard/utils";

import { Container, Footer, Header, Main } from "./style";

export function CaptivationSection() {
  return (
    <Container>
      <Header>
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
      <Footer>
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
