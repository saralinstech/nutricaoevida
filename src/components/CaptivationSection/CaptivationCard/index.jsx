"use client";
import Image from "next/image";
import { alata } from "@/fonts";

import { Container } from "./styles.js";

export default function CaptivationCard({ image, title, description }) {
  return (
    <Container style={alata.style}>
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
