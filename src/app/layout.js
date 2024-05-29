import { Inter, Alata } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&family=Dancing+Script:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} ${alata.className}`}>
        {children}
      </body>
    </html>
  );
}
