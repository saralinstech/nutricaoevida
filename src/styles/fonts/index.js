import { Inter, Alata, Dancing_Script } from "next/font/google";

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

export { inter, alata, dancing_script };
