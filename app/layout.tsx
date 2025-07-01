import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/components/theme-provider";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Toaster } from "@/app/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kesari Dasaradh - Backend Developer | Python, FastAPI, Microservices Expert",
  description:
    "Results-driven Backend Developer with 2 years of experience in Python, FastAPI, microservices architecture, and DevOps. Specialized in API security, performance optimization, and CI/CD automation. Based in Andhra Pradesh, India.",
  keywords: [
    "Backend Developer",
    "Python Developer",
    "FastAPI Expert",
    "Microservices Architecture",
    "API Development",
    "DevOps Engineer",
    "CI/CD Automation",
    "Docker Containerization",
    "PostgreSQL",
    "Redis Caching",
    "JWT Authentication",
    "OAuth 2.0",
    "SonarQube",
    "Snyk Security",
    "Jenkins",
    "GitHub Actions",
    "HashiCorp Vault",
    "NGINX",
    "SQLAlchemy ORM",
    "Pydantic Validation",
    "Andhra Pradesh Developer",
    "India Backend Developer"
  ],
  authors: [{ name: "Kesari Dasaradh" }],
  creator: "Kesari Dasaradh",
  publisher: "Kesari Dasaradh",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kesari-dasaradh.vercel.app",
    title: "Kesari Dasaradh - Backend Developer | Python, FastAPI, Microservices Expert",
    description:
      "Results-driven Backend Developer with 2 years of experience in Python, FastAPI, microservices architecture, and DevOps. Specialized in API security, performance optimization, and CI/CD automation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kesari Dasaradh - Backend Developer Portfolio",
      },
    ],
    siteName: "Kesari Dasaradh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kesari Dasaradh - Backend Developer | Python, FastAPI, Microservices Expert",
    description:
      "Results-driven Backend Developer with 2 years of experience in Python, FastAPI, microservices architecture, and DevOps.",
    images: ["/og-image.jpg"],
    creator: "@kesari_dasaradh",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://kesari-dasaradh.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
