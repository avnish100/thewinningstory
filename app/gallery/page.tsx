import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { client } from "@/sanity/lib/client"
import { galleryImagesQuery } from "@/sanity/lib/queries"
import GalleryFilter from "@/components/gallery-filter"
import GalleryItem from "@/components/gallery-item"
import GalleryContent from "@/components/gallery-content"
import { useState } from "react"
// revalidate this page every 60 seconds

interface GalleryImage {
  _id: string
  title: string
  caption: string
  category: string
  date: string
  imageUrl: string
  lqip: string
  featured: boolean
  order: number
}

// Main page component (server component)
export default async function GalleryPage() {
  const galleryItems = await client.fetch<GalleryImage[]>(galleryImagesQuery)
  const categories = Array.from(new Set(galleryItems.map((item) => item.category)))

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

        {/* Gallery Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-zinc-900 mb-6">Behind the Lens</h1>
          <p className="text-zinc-600 text-lg md:text-xl leading-relaxed">
            Take a look behind the scenes at The Winning Story. Our gallery showcases the moments that make sports
            storytelling special — capturing the emotion, dedication, and triumph that define athletic excellence.
          </p>
        </div>

        {/* Gallery Content */}
        <GalleryContent items={galleryItems} categories={categories} />
      </div>
    </div>
  )
}
