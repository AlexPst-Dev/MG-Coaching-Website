import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import ScrollBlob from "./components/ScrollBlob";

export const metadata: Metadata = {
  title: "Mael Coaching",
  description: "Service de coaching adapté aux seniors par Mael GAUDRON",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`antialiased flex flex-col gap-16 relative overflow-x-hidden`}
      >
        {/* Scroll-based animated blob */}
        <ScrollBlob />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
