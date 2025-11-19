import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header"
import Page from "./page"
import { ToastProvider } from "@/components/ui/toast";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ENC Declarations and Attestations page",
  description: "An ENC application for making declarations and attestations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          
          <div>
            <div>
               <Header/>
            </div>
            <div>
              <div>
               
              </div>
              <div></div>
            </div>
          </div>

           

         {children}
      </body>
    </html>
  );
}
