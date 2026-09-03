import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FramerProvider from "@/components/FramerProvider";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Harry's Portfolio | Frontend Developer",
  description: "Frontend developer specializing in React, Next.js, and modern web interfaces.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased scroll-smooth`}>
      <body className=" flex flex-col  items-center ">
        <Navbar />
        <FramerProvider>
          {children}
        </FramerProvider>
        <Footer />
      </body>
    </html>
  );
}
