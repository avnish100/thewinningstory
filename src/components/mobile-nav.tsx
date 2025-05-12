"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MobileNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-8 w-8 px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        alignOffset={-4}
        className="overflow-hidden bg-white border border-border rounded-none w-[300px]"
      >
        <DropdownMenuItem asChild>
          <Link href="/" className="flex items-center py-6 font-serif italic text-lg">
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/press" className="flex items-center py-6 font-serif italic text-lg">
            Press
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/about" className="flex items-center py-6 font-serif italic text-lg">
            About
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center py-6 font-serif italic text-lg"
          >
            Instagram
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center py-6 font-serif italic text-lg"
          >
            YouTube
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
