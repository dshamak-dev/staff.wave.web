import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "sw/styles/global.style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Staff.Wave",
  description: "HR platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
