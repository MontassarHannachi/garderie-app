import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Nunito } from "next/font/google";
import BootstrapClient from "./BootstrapClient";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata = {
  title: "Les Petits Soleils - Garderie d'enfants",
  description: "Un environnement sûr et joyeux pour votre enfant.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={nunito.variable}>
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
