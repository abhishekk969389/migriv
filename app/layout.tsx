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
import SmoothScroll from "./components/ui/smoothscroll";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Real fixed header outside smooth scroll */}
        <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full shadow-md bg-white">
          <TopBar />
          <Navbar />
        </header>

        <SmoothScroll>
          {/* Invisible spacer to push content down exactly by header's height */}
          <header className="invisible flex flex-col w-full">
            <TopBar />
            <Navbar />
          </header>
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
