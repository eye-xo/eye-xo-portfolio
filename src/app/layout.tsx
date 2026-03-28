import type { Metadata } from "next";
import { Poppins, VT323 } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/header/NavBar";
import ScrollProgressBar from "@/components/header/ScrollProgressBar";
import { navItems } from "@/utils/navigation/navItems";

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rohit's Portfolio",
  description: "Full Stack Dev & DevOps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${vt323.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-poppins">
        <ScrollProgressBar />
        <NavBar navItems={navItems} />
        {children}
      </body>
    </html>
  );
}
