import { HeroSection } from "@/components/HeroSection";
import { Header } from "@/components/Header";
import { CaptivationSection } from "@/components/CaptivationSection";

import styles from "./page.module.css";
import { BenefitsRange } from "@/components/BenefitsRange";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSection />
      <BenefitsRange />
      <CaptivationSection />
    </main>
  );
}
