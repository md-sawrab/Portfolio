import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md. Sawrab",
  url: "https://md-sawrab.github.io/Portfolio/",
  image: "https://md-sawrab.github.io/Portfolio/images/hero/profile.jpg",
  sameAs: [
    "https://www.instagram.com/sohel_sayyed.0x",
    "https://github.com/md-sawrab",
    "https://www.linkedin.com/in/md-sawrab/",
  ],
  jobTitle: "Data Analyst",
  description:
    "Md. Sawrab — Data Analyst specializing in turning raw data into clear insights, dashboards, and data-driven decisions.",
};

export const metadata: Metadata = {
  title: "Md. Sawrab - Data Analyst",
  description:
    "Md. Sawrab — Data Analyst specializing in insights, dashboards, and data-driven decisions.",
  keywords: [
    "Md. Sawrab",
    "Data Analyst",
    "Data Visualizer",
    "Business Intelligence",
    "SQL",
    "Python",
    "Dashboards",
  ],
  metadataBase: new URL("https://md-sawrab.github.io/Portfolio/"),
  alternates: {
    canonical: "https://md-sawrab.github.io/Portfolio/",
  },
  openGraph: {
    type: "website",
    url: "https://md-sawrab.github.io/Portfolio/",
    title: "Md. Sawrab - Data Analyst",
    description:
      "Md. Sawrab — Data Analyst specializing in insights, dashboards, and data-driven decisions.",
    siteName: "Portfolio",
    images: [
      {
        url: "https://md-sawrab.github.io/Portfolio/images/hero/profile.jpg",
        width: 800,
        height: 800,
        alt: "Md. Sawrab",
      },
    ],
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Md. Sawrab",
  },
  icons: {
    icon: [
      { url: "https://md-sawrab.github.io/Portfolio/favicon.jpg", type: "image/jpeg" },
    ],
    apple: "https://md-sawrab.github.io/Portfolio/favicon.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased grid-background`}
        suppressHydrationWarning
      >
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
