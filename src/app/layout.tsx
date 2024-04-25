import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Ticket System",
    default: "Ticket System",
  },
  description: "PUFA Computing is a organization in President University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
