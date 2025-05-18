import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PressReleases } from "@/components/press-releases"
import { client } from "@/sanity/lib/client"
import { pressReleasesQuery } from "@/sanity/lib/queries"

export const revalidate = 60 // revalidate this page every 60 seconds

export default async function PressPage() {
  const pressReleases = await client.fetch(pressReleasesQuery)

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-black">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center">
            <Link href="/" className="font-serif text-4xl md:text-5xl font-bold text-black text-center tracking-tight">
              THE WINNING STORY
            </Link>
            <p className="text-xs uppercase tracking-[0.3em] mt-2 text-gray-600">SPORTS • CULTURE • ANALYSIS</p>
          </div>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center text-black hover:text-red-900 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-black mb-6">Press Releases</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Official announcements and news from The Winning Story. Stay up to date with our latest developments,
              partnerships, and initiatives.
            </p>
          </div>

          <PressReleases releases={pressReleases} />
        </div>
      </main>

      <footer className="bg-white border-t border-black py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} The Winning Story. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
