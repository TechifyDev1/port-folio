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
  title: "TechifyDev | Full-Stack Developer",
  description:
    "TechifyDev is a full-stack software engineer specializing in Flutter apps, Next.js websites, and robust Java/Spring Boot backends. Let's build something beautiful, fast, and functional.",
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
    title: "TechifyDev | Full-Stack Engineer",
    description:
      "Building clean mobile & web experiences with Flutter, Next.js, and Java backends.",
    url: "https://port-folio-9dxv.vercel.app",
    siteName: "TechifyDev",
    images: [
      {
        url: "/avatar.png",
        width: 800,
        height: 600,
        alt: "TechifyDev Avatar"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "TechifyDev | Full-Stack Developer",
    description:
      "I design and build modern web & mobile apps with Flutter, Next.js, and Java.",
    images: ["/avatar.png"],
    creator: "@techifydev_1"
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "jjegQ2Hi3U5KA2rTXyOj3vbCCzWUGW-cTwBSKUaWz3c"
  },
  alternates: {
    canonical: "https://port-folio-9dxv.vercel.app"
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
              url: "https://port-folio-9dxv.vercel.app",
              jobTitle: "Full-Stack Developer",
              sameAs: [
                "https://github.com/TechifyDev1",
                "https://twitter.com/techifydev_1"
              ],
              description: "Full-stack software engineer specializing in Flutter, Next.js, and Java/Spring Boot."
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
