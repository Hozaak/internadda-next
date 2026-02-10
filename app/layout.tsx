import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://internadda.com'),
  title: {
    default: "InternAdda | India's Largest Internship Ecosystem with Stipend",
    template: "%s | InternAdda"
  },
  description: "InternAdda is an MSME Registered (UDYAM-MH-08) platform offering verified professional internships with stipends, AI-powered matching, and industry-recognized certificates.",
  keywords: [
    "internship with stipend", 
    "free internship", 
    "online internship for students", 
    "internadda", 
    "python developer intern", 
    "web development internship",
    "MSME certified internship"
  ],
  authors: [{ name: "Lucky Tiwari" }],
  openGraph: {
    title: "InternAdda - Launch Your Professional Career",
    description: "Access 300+ active roles with transparent stipends and direct corporate interviews.",
    url: "https://internadda.com",
    siteName: "InternAdda",
    images: [{ url: "https://iili.io/fmfyQMg.md.png" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InternAdda | Professional Internship Ecosystem",
    description: "Get certified and hired by top corporate partners.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-slate-50`}>
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
