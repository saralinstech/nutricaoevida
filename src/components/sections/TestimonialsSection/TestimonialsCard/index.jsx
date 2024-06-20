import Image from "next/image";
import { Container } from "./styles";

export default function TestimonialsCard({ image, name, years, description }) {
  return (
    <Container>
      <div className="headerTestimonialsCard">
        <Image src={image} width={56} height={56} />
        <div>
          <h5>{name}</h5>
          <p>Paciente há {years}</p>
        </div>
      </div>
      <div>{description}</div>
    </Container>
  );
}
