"use client";
import Image from "next/image";

import { Container } from "./style";

export function CaptivationCard({ image, title, description }) {
  return (
    <Container>
      <div className="header-container">
        <Image
          src={image}
          width={366}
          height={169}
          alt="Picture of the author"
        />
        <p>{title}</p>
      </div>
      <div className="description">{description}</div>
    </Container>
  );
}
