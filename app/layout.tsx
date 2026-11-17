import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stone Pharmacy | Homepage",
  description: "This is the official home page of stone pharmacy",
  icons: {
    icon: "favicon.ico"
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden`}>
      <body className="min-h-full w-full flex flex-col overflow-x-hidden relative">
        <Header />
        <div className="max-w-[1098px] pt-20 sm:pt-24 lg:pt-35 px-4 sm:px-6 lg:px-[60px] self-center w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
