import Image from "next/image";
import styles from "./page.module.css";
import { HeroSection } from "@/components/HeroSection";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSection />
      <div className={styles.benefitsRange}>
        <div>Saúde</div>
        <div>+</div>
        <div>Bem-estar</div>
        <div>+</div>
        <div>Auto estima</div>
        <div>+</div>
        <div>Performance</div>
        <div>+</div>
        <div>Beleza</div>
      </div>
    </main>
  );
}
