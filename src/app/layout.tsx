import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Theme } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const metadata: Metadata = {
  title: "PulseScore",
  description: "Live Score Statistics and Prematch Statistics"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning we must enable it because when we add theme provider there is a diffrence between server and client components
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-sm md:text-base`}>
        <Theme>
          <Header />
          <main className="mt-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
