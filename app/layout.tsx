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

export const metadata = {
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
