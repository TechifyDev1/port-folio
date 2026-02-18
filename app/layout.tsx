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

// app/layout.tsx or app/page.tsx

export const metadata: Metadata = {
  title: "TechifyDev | Full-Stack Developer & Shopify Designer",
  description:
    "TechifyDev is a senior full-stack software engineer specializing in Flutter apps, Next.js websites, and Shopify store design. Explore my portfolio of scalable digital solutions.",
  keywords: [
    "TechifyDev",
    "Flutter Developer",
    "Next.js Developer",
    "Java Backend Developer",
    "Full-Stack Developer",
    "Mobile App Developer",
    "Web Developer",
    "Spring Boot",
    "TailwindCSS",
    "Supabase",
    "Frontend Engineer",
    "Backend Engineer",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "TechifyDev", url: "https://port-folio-9dxv.vercel.app" }],
  creator: "TechifyDev",
  openGraph: {
    title: "TechifyDev | Full-Stack Developer & Shopify Designer",
    description:
      "Building clean mobile & web experiences with Flutter, Next.js, and Shopify Store Design.",
    url: "https://port-folio-three-amber.vercel.app",
    siteName: "TechifyDev",
    images: [
      {
        url: "/avatar.png",
        width: 800,
        height: 600,
        alt: "TechifyDev Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "TechifyDev | Full-Stack Developer & Shopify Designer",
    description:
      "I design and build modern web & mobile apps with Flutter, Next.js, and Shopify.",
    images: ["/avatar.png"],
    creator: "@techifydev_1"
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "jjegQ2Hi3U5KA2rTXyOj3vbCCzWUGW-cTwBSKUaWz3c"
  },
  alternates: {
    canonical: "https://port-folio-three-amber.vercel.app"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "TechifyDev",
              url: "https://port-folio-three-amber.vercel.app",
              jobTitle: "Full-Stack Developer & Shopify Designer",
              sameAs: [
                "https://github.com/TechifyDev1",
                "https://twitter.com/techifydev_1"
              ],
              description: "Full-stack software engineer specializing in Flutter, Next.js, and Shopify Store Design."
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
