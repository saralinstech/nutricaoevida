import { HeroSection } from "@/components/HeroSection";
import { Header } from "@/components/Header";
import { CaptivationSection } from "@/components/CaptivationSection";
import { BenefitsRange } from "@/components/BenefitsRange";

import styles from "../styles/pages/page.module.css";

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
