import { Inter, Alata, Dancing_Script, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const alata = Alata({
  style: "normal",
  weight: ["400"],
  subsets: ["latin"],
});
const dancing_script = Dancing_Script({
  style: "normal",
  weight: ["400"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  style: "normal",
  weight: ["700", "400", "300", "100"],
  subsets: ["latin"],
});

export { inter, alata, dancing_script, montserrat };
