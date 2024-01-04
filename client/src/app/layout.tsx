import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "sw/styles/global.style.css";

const font = Prompt({
  weight: ['200', '300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

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
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body className={font.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
