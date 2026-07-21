import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aavudan Farm Fresh Dairy",
    template: "%s | Aavudan",
  },

  description:
    "Premium farm fresh dairy products from Abhivrit Farms. Fresh milk, curd, paneer, ghee and other quality dairy products delivered with purity and care.",

  keywords: [
    "Aavudan",
    "Abhivrit Farms",
    "Farm Fresh Dairy",
    "Fresh Milk",
    "Curd",
    "Paneer",
    "Ghee",
    "Dairy Products",
  ],

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}