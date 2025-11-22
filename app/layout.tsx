import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proyecto Integral Futbolístico - Juan Chicho Vogliotti",
  description:
    "Modelo de juego, metodología, análisis de rivales y trayectoria de @chichovogliotti y @juanleandro1985.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="es">
    <head>
    <link rel="icon" href="/chicho/chicho11.jpg" type="image/jpeg" />
    <link rel="apple-touch-icon" href="/chicho/chicho11.jpg" />
    </head>
    <body
    className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50 font-sans text-sm md:text-base`}
    >
    {children}
    </body>
  </html>
  );
}
