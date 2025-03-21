import type React from "react"
import { BookmarksProvider } from "@/hooks/use-bookmarks"
import { Toaster } from "@/components/ui/sonner"
import AuthGuard from "@/components/auth-guard"

export const metadata = {
  title: "Mark - AI Bookmark Manager",
  description: "An AI-powered bookmark manager",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Update the return statement in the RootLayout function to include Header and Footer
  return (
    <BookmarksProvider>
      <AuthGuard>
        <div className="flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </AuthGuard>
      <Toaster />
    </BookmarksProvider>
  )
}

