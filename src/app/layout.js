// import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Brendan Lewis",
  description: "Brendan's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}