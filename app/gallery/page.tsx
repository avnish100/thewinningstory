import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { client } from "@/sanity/lib/client"
import { galleryImagesQuery } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"

export const revalidate = 60 // revalidate this page every 60 seconds

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

export default async function GalleryPage() {
  const galleryItems = await client.fetch<GalleryImage[]>(galleryImagesQuery)

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/" className="inline-block mb-12">
          <Button
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white rounded-none uppercase text-xs tracking-widest"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Gallery Header */}
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-8">Photo Gallery</h1>
        <p className="text-gray-700 mb-12 max-w-2xl">
          Take a look behind the scenes at The Winning Story. Our gallery showcases the moments that make sports
          storytelling special.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item._id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden border-2 border-black">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={item.lqip}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <div className="mt-4">
                <p className="text-xs uppercase tracking-widest text-red-900 mb-1">{item.category}</p>
                <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.caption}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}