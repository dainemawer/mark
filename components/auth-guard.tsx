"use client"

import type React from "react"

import { useAuth } from "@/contexts/auth-context"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"
import { Loader2 } from "lucide-react"

interface AuthGuardProps {
  children: React.ReactNode
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Skip if still loading
    if (isLoading) return

    // Public routes that don't require authentication
    const publicRoutes = [
      "/auth/signin",
      "/auth/signup",
      "/auth/verify",
      "/auth/forgot-password",
      "/auth/reset-password",
    ]

    const isPublicRoute = publicRoutes.includes(pathname)

    if (!user && !isPublicRoute) {
      // Not authenticated and trying to access a protected route
      router.push("/auth/signin")
    } else if (user && isPublicRoute) {
      // Already authenticated and trying to access an auth route
      router.push("/")
    }
  }, [user, isLoading, router, pathname])

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  // Public route or authenticated user on protected route
  return <>{children}</>
}

