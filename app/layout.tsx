import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ChartColumnBigIcon } from "lucide-react";
import Link from "next/link";
import { ClerkProvider } from "@clerk/nextjs";
import NavAuth from "@/components/NavAuth";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextCash",
  description: "Track your expenses with NextCash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.variable} antialiased`}>
          <nav className="bg-primary p-4 text-white h-20 flex items-center justify-between">
            <Link
              href="/"
              className="font-bold text-2xl flex gap-1 items-center"
            >
              <ChartColumnBigIcon className="text-lime-500" /> NextCash
            </Link>
            <NavAuth />
          </nav>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
