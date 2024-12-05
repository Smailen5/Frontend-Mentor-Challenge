import { Navbar } from "@/components/molecules/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/Inter-VariableFont_slnt,wght.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "News Homepage",
  description: "News Homepage",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <div className="pt-14">{children}</div>
      </body>
    </html>
  );
}
