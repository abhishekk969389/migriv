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

import { site } from "@/data/index";

export const metadata: Metadata = {
  title: site.brand.siteTitle,
  description: site.brand.siteDescription,
};

import TopBar from "./components/topbar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-50 flex flex-col w-full shadow-md bg-white">
          <TopBar />
          <Navbar />
        </header>
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
