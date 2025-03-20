import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { BookmarksProvider } from "@/hooks/use-bookmarks"
import { Toaster } from "@/components/ui/sonner"
import { AuthProvider } from "@/contexts/auth-context"
import AuthGuard from "@/components/auth-guard"

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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <BookmarksProvider>
              <AuthGuard>{children}</AuthGuard>
              <Toaster />
            </BookmarksProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

