import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spotsie",
  description: "Hvað helgsie er að hlusta á.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <title>Spotsie</title>
        <meta name="description" content="Hvað helgsie er að hlusta á." />
        <meta property="og:title" content="Spotsie" />
        <meta property="og:description" content="Hvað helgsie er að hlusta á." />
        <meta property="og:image" content="https://spotsie.netlify.app/web-app-manifest-192x192.png" />
        <meta property="og:url" content="https://spotsie.netlify.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>
      </body>
    </html>
  );
}
