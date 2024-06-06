import "../styles/globals.css";

export const metadata = {
  title: "Angelina Cruz | Nutrição & Vida",
  description:
    "Somos uma clínica que busca entregar resultados para nossos clientes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
