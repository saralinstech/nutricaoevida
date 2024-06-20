"use client";
import { montserrat } from "@/styles/fonts";

import { testimonials } from "@/utils";
import TestimonialsCard from "./TestimonialsCard";
import CTButton from "@/components/_ui/CTButton";

import { Container } from "./styles";

export default function TestimonialsSection() {
  return (
    <Container>
      <div className="titlesTestimonialsSection">
        <h2 style={montserrat.style}>Depoimentos</h2>
        <p className="subTitleTestimonialsSection">
          Saiba o que os nossos pacientes acham dos nossos programas e serviços
        </p>
      </div>
      <div className="ContainerTestimonialsSection">
        {testimonials.map((testimonial) => (
          <TestimonialsCard
            name={testimonial.name}
            image={testimonial.image}
            years={testimonial.years}
            description={testimonial.description}
          />
        ))}
      </div>
      <CTButton />
    </Container>
  );
}
