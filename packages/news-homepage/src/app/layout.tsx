import { Navbar } from "@/components/atoms/Navbar";
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
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>
        <Navbar />
        <div className="mx-auto max-w-screen-xl px-4 py-16 md:py-24 lg:py-48 xl:px-20">
          {children}
        </div>
      </body>
    </html>
  );
}
