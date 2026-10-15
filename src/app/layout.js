import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "./portfolio.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const safiraMarch = localFont({
  src: "../../public/fonts/Safira March Personal Use Only.ttf",
  variable: "--font-safira-march",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "ABI-MDG | Advanced Business Intelligence - MADAGASCAR",
  description:
    "L'intelligence des données au service de la performance de votre entreprise. Data Analyst et Data Engineer orienté pipelines. Études de cas en intégration de données, Business Intelligence, Machine Learning et automatisation.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${safiraMarch.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col portfolio-body">{children}</body>
    </html>
  );
}
