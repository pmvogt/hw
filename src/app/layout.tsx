import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";

const motorblock = localFont({
  src: "../../public/fonts/Motorblock.ttf",
  variable: "--font-motorblock",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hardwire — The harness for physical, real-world AI",
  description:
    "Hardwire is the deployment layer for physical AI — unifying comms, sensors, robots, compute, power, and models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${motorblock.variable} ${GeistMono.variable} ${GeistPixelSquare.variable} h-full`}
    >
      <body className="h-full overflow-hidden antialiased">{children}</body>
    </html>
  );
}
