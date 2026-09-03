import { Outfit } from "next/font/google";
import type { Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FramerProvider from "@/components/FramerProvider";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Harry's Portfolio | Frontend Developer",
  description: "Frontend developer specializing in React, Next.js, and modern web interfaces.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col items-center">
        <Navbar />
        <main className="w-full flex-1 flex flex-col items-center">
          <FramerProvider>
            {children}
          </FramerProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}