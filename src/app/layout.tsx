import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SunLink Solution — Power Your Home. Own Your Future.",
  description: "California's premier residential solar company. $0 down options, 25-year warranty, zero hassle. Get your free solar quote today.",
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
