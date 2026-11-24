import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { DotBackground } from "@/components/dot-background";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { profile, siteUrl } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.fullName} | Backend Software Engineer (Go, Java)`;
const description =
  "Neha Ghardwal is a backend software engineer in Delhi, India building distributed systems, event-driven microservices and high-performance REST APIs with Go, Java, PostgreSQL, MongoDB, OpenSearch, Redis and AWS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${profile.fullName}`,
  },
  description,
  applicationName: `${profile.fullName} Portfolio`,
  authors: [{ name: profile.fullName, url: siteUrl }],
  creator: profile.fullName,
  keywords: [
    "Neha Ghardwal",
    "Backend Software Engineer",
    "Golang Developer",
    "Go Developer India",
    "Java Developer",
    "Distributed Systems",
    "Microservices",
    "Event-Driven Architecture",
    "OpenSearch",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Software Engineer Delhi",
    "Software Engineer Noida",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: profile.fullName,
    title,
    description,
    locale: "en_IN",
    firstName: "Neha",
    lastName: "Ghardwal",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  // Paste the token from Google Search Console → "HTML tag" verification.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// Structured data so Google can show a rich "person" result.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  url: siteUrl,
  image: `${siteUrl}${profile.photo}`,
  jobTitle: "Software Engineer",
  worksFor: { "@type": "Organization", name: "Orangutan Technologies" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Bennett University" },
  address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
  email: `mailto:${profile.email}`,
  knowsAbout: [
    "Go",
    "Java",
    "Distributed Systems",
    "Microservices",
    "Event-Driven Architecture",
    "OpenSearch",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
  ],
  sameAs: [profile.social.github, profile.social.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider>
            <DotBackground />
            <div className="relative z-10 flex min-h-full flex-1 flex-col">{children}</div>
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
