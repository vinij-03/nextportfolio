import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inconsolata } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  weight: ["400", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: "Vineet Jana",
  description:
    "Tech enthusiast and Computer Science student from India, co-founder of Twinverse Technology, creating cool AR, VR, and spatial computing solutions to blend reality and the virtual world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inconsolata.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
