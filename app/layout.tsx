import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header"
import {ChatbotWidget} from "@/components/chat-widget"




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E&C Declarations and Attestations portal",
  description: "Ethics and Compliance application for making declarations and attestations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-y-hidden` } >
          
          <div >
            <div>
               <Header/>
            </div>
            <div>
              <div>
               
              </div>
              <div></div>
            </div>
          </div>

           <ChatbotWidget/>

         {children}
      </body>
    </html>
  );
}
