import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import "./globals.css"
import { MobileNav } from "@/components/mobile-nav"
import { motion } from "motion/react"

export const metadata: Metadata = {
  title: "The Winning Story",
  description: "Where Champions Are Made and Legends Are Written",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className="min-h-screen bg-background font-sans">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
          <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <nav className="hidden md:flex gap-8">
                <Link href="/press" className="nav-link">Press</Link>
                <Link href="/about" className="nav-link">About</Link>
            </nav>
            <Link href="/" className="logo text-lg md:text-xl">
              The Winning Story
            </Link>
            <div className="flex items-center gap-4 md:gap-6">
              <nav className="hidden md:flex gap-8">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  Instagram
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  YouTube
                </Link>
              </nav>
              <div className="md:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </header>
        <main className="min-h-[calc(100vh-var(--header-height))]">{children}</main>
        <footer className="w-full border-t bg-background/95 backdrop-blur-sm py-8 md:py-12">
          <div className="container grid gap-8 md:gap-12 px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="space-y-4 md:w-1/3">
                <h3 className="text-lg md:text-xl font-serif italic">The Winning Story</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bringing you the stories behind the victories, the struggles behind the triumphs, 
                  and the people behind the records.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 md:flex-1">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium uppercase tracking-wider">Navigation</h4>
                  <nav className="flex flex-col gap-3">
                    <Link href="/" className="text-sm hover:text-primary transition-colors">Home</Link>
                    <Link href="/press" className="text-sm hover:text-primary transition-colors">Press</Link>
                    <Link href="/about" className="text-sm hover:text-primary transition-colors">About</Link>
                  </nav>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium uppercase tracking-wider">Social</h4>
                  <nav className="flex flex-col gap-3">
                    <Link
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary transition-colors"
                    >
                      Instagram
                    </Link>
                    <Link
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary transition-colors"
                    >
                      YouTube
                    </Link>
                  </nav>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium uppercase tracking-wider">Legal</h4>
                  <nav className="flex flex-col gap-3">
                    <Link href="#" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link href="#" className="text-sm hover:text-primary transition-colors">Terms of Service</Link>
                    <Link href="#" className="text-sm hover:text-primary transition-colors">Contact</Link>
                  </nav>
                </div>
              </div>
            </div>
            <div className="border-t pt-6 md:pt-8">
              <p className="text-xs text-muted-foreground text-center">
                © {new Date().getFullYear()} The Winning Story. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
