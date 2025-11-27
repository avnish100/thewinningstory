"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, ArrowRight } from "lucide-react"

interface PressRelease {
  _id: string
  title: string
  slug: {
    current: string
  }
  date: string
  category: string
  excerpt: string
  featured: boolean
  coverImageUrl?: string
  lqip?: string
}

interface PressReleasesProps {
  releases: PressRelease[]
  showFeatured?: boolean
}

export function PressReleases({ releases, showFeatured = true }: PressReleasesProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All")

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(releases.map((release) => release.category)))]

  // Filter releases by category
  const filteredReleases =
    activeCategory === "All" ? releases : releases.filter((release) => release.category === activeCategory)

  // Find featured release
  const featuredRelease = releases.find((release) => release.featured)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div>
      {/* Featured Press Release */}
      {showFeatured && featuredRelease && (
        <div className="mb-12 border-2 border-black p-8 bg-white relative">
          <div className="absolute top-0 right-0 bg-red-900 text-white px-4 py-2 uppercase text-xs tracking-wider font-medium">
            Featured
          </div>
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{formatDate(featuredRelease.date)}</span>
            <span className="mx-2">•</span>
            <span className="text-red-900">{featuredRelease.category}</span>
          </div>
          <h3 className="font-serif text-3xl font-bold text-black mb-4">{featuredRelease.title}</h3>
          <p className="text-gray-700 mb-6">{featuredRelease.excerpt}</p>
          <Link href={`/press/${featuredRelease.slug.current}`}>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white rounded-none uppercase text-xs tracking-widest py-6 px-8"
            >
              Read Full Release
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      )}

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-xs uppercase tracking-widest font-medium transition-colors ${
              activeCategory === category
                ? "bg-black text-white"
                : "border border-black text-black hover:bg-black hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Press Release List */}
      <div className="space-y-8">
        {filteredReleases
          .filter((release) => !release.featured || activeCategory !== "All" || !showFeatured)
          .map((release) => (
            <div key={release._id} className="border-b border-gray-200 pb-8">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{formatDate(release.date)}</span>
                <span className="mx-2">•</span>
                <span className="text-red-900">{release.category}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-black mb-3">{release.title}</h3>
              <p className="text-gray-700 mb-4">{release.excerpt}</p>
              <Link
                href={`/press/${release.slug.current}`}
                className="text-red-900 hover:text-black font-medium flex items-center"
              >
                <FileText className="h-4 w-4 mr-2" />
                Read Full Release
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}
