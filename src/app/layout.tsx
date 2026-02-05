import type { Metadata } from "next";
import { Encode_Sans_Expanded } from "next/font/google";
import "./globals.css";
import Navbar from "../../componets/Navbar/Navbar";

const encodeSans = Encode_Sans_Expanded({
  variable: "--font-encode-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mr Chilli",
  description: "Authentic Sri Lankan spicy dishes with fresh ingredients. Order online for delivery in Colombo. Visit Mr Chilli today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${encodeSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        <div className="pt-16 sm:pt-20 md:pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
