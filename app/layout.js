import { Pinyon_Script, IM_Fell_English } from "next/font/google";
import "./globals.css";

const script = Pinyon_Script({ weight: "400", subsets: ["latin"], variable: "--font-script" });
const fell = IM_Fell_English({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], variable: "--font-fell" });

export const metadata = { title: "Para Genesis María", description: "Una carta para ti" };
export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${script.variable} ${fell.variable}`}>
      <body>{children}</body>
    </html>
  );
}