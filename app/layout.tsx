import type { Metadata } from "next";
import { fraunces, inter, jetbrainsMono } from "./fonts";
import { IntroGate } from "@/components/intro/IntroGate";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactButton } from "@/components/layout/FloatingContactButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibrancy Health Solutions",
  description:
    "Empowering Health, Ensuring Compliance, Building Excellence. Health and compliance consultancy for individuals, businesses, and healthcare providers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <IntroGate>
          <Header />
          {children}
          <Footer />
          <FloatingContactButton />
        </IntroGate>
      </body>
    </html>
  );
}
