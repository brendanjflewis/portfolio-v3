// import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://brendanjflewis.com'),
  title: "Brendan Lewis",
  description: "Professional portfolio website for Brendan Lewis",
  openGraph: {
    title: 'Brendan Lewis',
    description: 'Professional portfolio website for Brendan Lewis',
    url: 'https://brendanjflewis.com/',
    siteName: 'brendanjflewis',
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}