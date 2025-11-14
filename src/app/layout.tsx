import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "AIFolio – Discover 100+ AI Tools",
    template: "%s | AIFolio",
  },

  description:
    "AIFolio is a curated directory of 100+ AI tools with pricing, ranking, descriptions, and detailed insights. Your one-stop platform to explore, compare, and discover AI tools for productivity, creativity, coding, marketing, research, and more.",

  keywords: [
    "AI tools",
    "AI directory",
    "AI tool finder",
    "AI tool comparison",
    "ChatGPT alternatives",
    "AI apps",
    "AI software list",
    "machine learning tools",
    "AIFolio",
    "AI productivity tools",
    "AI for developers",
  ],

  openGraph: {
    type: "website",
    url: "https://your-domain.com",
    title: "AIFolio – Explore 100+ AI Tools",
    description:
      "Browse a curated catalog of 100+ AI tools with ranking, pricing, details, and verified data. Built with Next.js 14 and Tailwind for speed and clarity.",
    siteName: "AIFolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AIFolio – AI Tools Directory",
      },
    ],
  },

  authors: [
    { name: "Aakash Gupta", url: "https://github.com/aakash-gupta02" }
  ],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest",

  twitter: {
    card: "summary_large_image",
    title: "AIFolio – Discover 100+ AI Tools",
    description:
      "A curated directory of 100+ AI tools with ranking, pricing, and detailed insights for developers, creators, and professionals.",
    images: ["/og-image.png"],
    creator: "@AakashG99795",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-100`}
      >
        <ThemeProvider>
          <Navbar />
          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
