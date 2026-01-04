import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import CookieConsent from './components/CookieConsent';

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VÖLTZMANN Medical | Precision Sleep & Neurotechnology",
  description: "VÖLTZMANN Medical develops evidence-based neurostimulation, biofeedback, and AI-powered diagnostics for optimal sleep health. Engineered in Germany.",
  keywords: ["sleep technology", "neurostimulation", "CES", "biofeedback", "German medical device", "sleep therapy", "VÖLTZMANN"],
  authors: [{ name: "VÖLTZMANN Medical Technology UG" }],
  openGraph: {
    title: "VÖLTZMANN Medical | Precision Sleep & Neurotechnology",
    description: "VÖLTZMANN Medical develops evidence-based neurostimulation, biofeedback, and AI-powered diagnostics for optimal sleep health. Engineered in Germany.",
    url: "https://voeltzmann-medical.com",
    siteName: "VÖLTZMANN Medical",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VÖLTZMANN Medical | Precision Sleep & Neurotechnology",
    description: "VÖLTZMANN Medical develops evidence-based neurostimulation, biofeedback, and AI-powered diagnostics for optimal sleep health. Engineered in Germany.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["MedicalDevice", "TechnologyCompany"],
              "name": "VÖLTZMANN Medical",
              "url": "https://voeltzmann-medical.com",
              "logo": "https://voeltzmann-medical.com/logo.png",
              "description": "German precision sleep technology company specializing in neurostimulation and AI-powered diagnostics.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "DE"
              },
              "sameAs": [
                "https://linkedin.com/company/voeltzmann",
                "https://twitter.com/voeltzmann"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
