import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PressReleases } from "@/components/press-releases"
import { client } from "@/sanity/lib/client"
import { pressReleasesQuery } from "@/sanity/lib/queries"

export const revalidate = 60 // revalidate this page every 60 seconds

export default async function PressPage() {
  const pressReleases = await client.fetch(pressReleasesQuery)

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="container mx-auto px-4 py-16">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-16">
          <Link href="/" className="inline-block">
            <Button
              variant="outline"
              className="border-zinc-800 text-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-zinc-900 mb-6">Press Releases</h1>
          <p className="text-zinc-600 text-lg md:text-xl leading-relaxed">
            Official announcements and news from The Winning Story. Stay up to date with our latest developments,
            partnerships, and initiatives.
          </p>
        </div>

        {/* Press Releases Content */}
        <PressReleases releases={pressReleases} showFeatured={false} />
      </div>
    </div>
  )
}
