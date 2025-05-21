import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
  authors: [{ name: "TechifyDev", url: "https://your-portfolio-url.com" }],
  creator: "TechifyDev",
  openGraph: {
    title: "TechifyDev | Full-Stack Engineer",
    description:
      "Building clean mobile & web experiences with Flutter, Next.js, and Java backends.",
    url: "https://your-portfolio-url.com",
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
    creator: "@yourhandle"
  },
  icons: {
    icon: "/avatar.png",
    shortcut: "/avatar.png",
    apple: "/avatar.png"
  },
  manifest: "/site.webmanifest"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <Head>
        <title>TechifyDev | Full-Stack Developer</title>
        <meta name="description" content="TechifyDev is a full-stack software engineer specializing in Flutter apps, Next.js websites, and Java backends." />
        <meta name="keywords" content="TechifyDev, Flutter Developer, Next.js, Java, Spring Boot, Full Stack Developer, Mobile App Developer, Web Developer, Supabase, TailwindCSS" />
        <meta name="author" content="TechifyDev" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="TechifyDev | Full-Stack Engineer" />
        <meta property="og:description" content="Building clean mobile & web experiences with Flutter, Next.js, and Java backends." />
        <meta property="og:image" content="/avatar.png" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TechifyDev | Full-Stack Developer" />
        <meta name="twitter:description" content="I design and build modern web & mobile apps with Flutter, Next.js, and Java." />
        <meta name="twitter:image" content="/avatar.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
