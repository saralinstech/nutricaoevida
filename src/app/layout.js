import { Inter, Alata } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const alata = Alata({
  style: "normal",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Angelina Cruz | Nutrição & Vida",
  description:
    "Somos uma clínica que busca entregar resultados para nossos clientes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${alata.className}`}>
        {children}
      </body>
    </html>
  );
}
