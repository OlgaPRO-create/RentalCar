import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { TanstackProvider } from "@/providers/TanstackProvider";
import { PropsWithChildren } from "react";

const manropeFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rental Car App",
  description: "A simple rental car application",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={`${manropeFont.variable} ${interFont.variable}`}>
        <TanstackProvider>
          <main>{children}</main>
        </TanstackProvider>
      </body>
    </html>
  );
}