import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/contexts/auth-context"

// Keep the imports and add the new components
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mark - AI Bookmark Manager",
  description: "An AI-powered bookmark manager",
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          {/* Layout UI */}
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <AuthProvider>
                <Header />
                <main>{children}</main>
                <Footer />
            </AuthProvider>
          </ThemeProvider>
        </body>
    </html>
    )
  }
