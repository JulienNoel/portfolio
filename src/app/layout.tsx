import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Portfolio Julien Noel",
  description: "Julien Noel Développeur React / React Native, Typescript, Javascript, Kotlin, Next JS, Mobile App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className='text-slate-400 selection:text-teal-900 selection:bg-teal-300 antialiased bg-slate-800 leading-relaxed'>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
