"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { UserNav } from "@/components/user-nav"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export function Header() {
  const { user } = useAuth()
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <h1 className="text-xl font-bold">
              <span className="text-primary">Mark</span> - AI Bookmark Manager
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {!user && (
            <>
              <Button asChild variant="outline" size="sm">
                <Link href="/auth/signin">Sign In</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </>
          )}

          {user && (
            <Button asChild variant="outline" size="sm" className="gap-1">
              <Link href="/pricing">
                <Sparkles className="h-4 w-4 text-yellow-500" />
                <span>Upgrade</span>
              </Link>
            </Button>
          )}

          <ModeToggle />
          {user && <UserNav />}
        </div>
      </div>
    </header>
  )
}

