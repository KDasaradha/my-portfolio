import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/app/components/theme-provider"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import { Toaster } from "@/app/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kesari Dasaradh - Backend Developer Portfolio",
  description: "Experienced backend developer specializing in Python, FastAPI, and microservices architecture.",
  openGraph: {
    title: "Kesari Dasaradh - Backend Developer Portfolio",
    description: "Experienced backend developer specializing in Python, FastAPI, and microservices architecture.",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kesari Dasaradh - Backend Developer Portfolio",
    description: "Experienced backend developer specializing in Python, FastAPI, and microservices architecture.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
  )
}

