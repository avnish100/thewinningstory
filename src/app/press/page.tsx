import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image" // You'll need to create this utility
import { PortableText } from "@portabletext/react"
import { pressRelease } from "@/sanity/schemaTypes/pressReleaseType"


async function getPressReleases() {
  return await client.fetch(`
    *[_type == "pressRelease"] | order(date desc) {
      _id,
      title,
      date,
      author,
      location,
      content,
      "imageUrl": image.asset->url
    }
  `)
}

export default async function PressRelease() {
  const pressReleases = await getPressReleases()

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 space-y-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">PRESS RELEASES</h1>
          <p className="text-base md:text-lg text-primary-foreground/80">
            Official announcements and news from The Winning Story
          </p>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-12">
            {pressReleases.map((release: any) => (
              <article key={release._id} className="space-y-6 border-b pb-8 md:pb-12">
                <div className="space-y-3">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    {release.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(release.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{release.author}</span>
                    </div>
                  </div>
                </div>
                {release.imageUrl && (
                  <Image
                    src={release.imageUrl}
                    width={1200}
                    height={600}
                    alt={release.title}
                    className="aspect-video rounded-lg object-cover"
                  />
                )}
                <div className="space-y-4 text-gray-500 text-base">
                  {release.location} <PortableText value={release.content} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">MEDIA INQUIRIES</h2>
            <p className="text-gray-500 text-base">
              For press inquiries, interview requests, or additional information, please contact our media relations
              team.
            </p>
            <div>
              <Button variant="secondary" className="w-full sm:w-auto">Contact Press Team</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">FOLLOW OUR JOURNEY</h2>
              <p className="text-gray-300 text-base md:text-xl">
                Stay connected with The Winning Story on social media.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full">
                  <Instagram className="mr-2 h-4 w-4" />
                  Follow on Instagram
                </Button>
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full">
                  <Youtube className="mr-2 h-4 w-4" />
                  Subscribe on YouTube
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
