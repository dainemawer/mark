import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mark Bookmark Manager. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
            Terms & Conditions
          </Link>
          <Link href="/refund" className="text-muted-foreground hover:text-foreground transition-colors">
            Refund Policy
          </Link>
          <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
        </nav>
      </div>
    </footer>
  )
}

