import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsRange from "@/components/sections/BenefitsRange";
import CaptivationSection from "@/components/sections/CaptivationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

import styles from "../styles/pages/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSection />
      <BenefitsRange />
      <CaptivationSection />
      <TestimonialsSection />
    </main>
  );
}
