import type { Metadata } from "next";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { WEB_PAGE_DESCRIPTION, WEB_PAGE_KEYWORDS, WEB_PAGE_NAME } from "@/metadata";

import localFont from "next/font/local";
import { Theme } from "@/components/theme-provider";

import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

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
  metadataBase: new URL("https://pulsescore.net"),
  title: { default: WEB_PAGE_NAME, template: `%s | ${WEB_PAGE_NAME}` },
  description: WEB_PAGE_DESCRIPTION,
  keywords: WEB_PAGE_KEYWORDS,
  twitter: {
    card: "summary_large_image"
  }
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
          <main className="mt-5 min-h-dvh">{children}</main>
          <Footer />
        </Theme>
      </body>
      {process.env.NODE_ENV === "production" && <GoogleAnalytics gaId="G-911TT7YCBF" />}
    </html>
  );
}
