import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VinterTEC proto site",
  description: "Made by Zekken",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
