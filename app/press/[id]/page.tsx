import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PortableText } from "@portabletext/react"
import { client } from "@/sanity/lib/client"
import { pressReleaseBySlugQuery } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import { notFound } from "next/navigation"

export const revalidate = 60 // revalidate this page every 60 seconds

interface PressRelease {
  _id: string
  title: string
  slug: {
    current: string
  }
  content: any[]
  category: string
  date: string
  coverImageUrl?: string
  lqip?: string
}

export default async function PressReleasePage({
  params,
}: {
  params: { id: string }
}) {
  const pressRelease = await client.fetch<PressRelease>(pressReleaseBySlugQuery, {
    slug: await(params.id),
  })

  if (!pressRelease) {
    notFound()
  }

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
        <article className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <Link href="/press" className="inline-flex items-center text-black hover:text-red-900 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Press Releases
            </Link>

            <div className="flex items-center text-sm text-gray-600 mb-4">
              <span>{new Date(pressRelease.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
              <span className="mx-2">•</span>
              <span className="text-red-900">{pressRelease.category}</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl font-bold text-black mb-8">{pressRelease.title}</h1>
          </div>

          {pressRelease.coverImageUrl && (
            <div className="relative aspect-video mb-12 border-2 border-black overflow-hidden">
              <Image
                src={pressRelease.coverImageUrl}
                alt={pressRelease.title}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL={pressRelease.lqip}
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <PortableText
              value={pressRelease.content}
              components={{
                types: {
                  image: ({ value }) => {
                    return (
                      <div className="relative aspect-video my-12 border-2 border-black overflow-hidden">
                        <Image
                          src={value.asset.url}
                          alt={value.alt || ''}
                          fill
                          className="object-cover"
                        />
                        {value.caption && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                            <p className="text-sm">{value.caption}</p>
                          </div>
                        )}
                      </div>
                    )
                  },
                },
              }}
            />
          </div>
        </article>
      </main>

      <footer className="bg-white border-t border-black py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} The Winning Story. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
