import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { foundersQuery, storyImageQuery } from "@/sanity/lib/queries"

export const revalidate = 60 // revalidate this page every 60 seconds

export default async function StoryPage() {
  const [founders, storyImage] = await Promise.all([
    client.fetch(foundersQuery),
    client.fetch(storyImageQuery)
  ])

  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="fixed top-8 left-8 z-50">
        <Link href="/" className="group">
          <Button
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white rounded-none uppercase text-xs tracking-widest py-4 px-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Story Section */}
      <section className="pt-32 pb-24 border-b border-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                The Story Behind <br />
                Our Publication
              </h1>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  The Winning Story is a premium sports media publication dedicated to capturing the essence of victory,
                  the spirit of competition, and the culture surrounding sports.
                </p>
                <p>
                  Founded in 2023, we bring a unique perspective to sports coverage, focusing on the narratives that
                  define athletes, teams, and moments that transcend the game itself.
                </p>
                <p>
                  Our mission is to deliver compelling visual storytelling that celebrates the triumph, struggle, and
                  beauty of sports through stunning photography, immersive videos, and thoughtful commentary.
                </p>
              </div>

              <div className="mt-12 flex items-center">
                <div className="h-px bg-black flex-grow mr-8"></div>
                <div className="font-serif italic text-xl">"Victory has a thousand fathers"</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-100 rounded-full blur-3xl opacity-50"></div>
              <div className="relative border-2 border-black p-3 bg-white rotate-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:rotate-0 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] max-w-[400px] mx-auto">
                <Image
                  src={storyImage?.image?.asset?.url || "/placeholder.svg?height=400&width=500"}
                  alt="About The Winning Story"
                  width={250}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-red-900 text-white p-3 font-serif text-lg italic">
                Est. 2023
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="py-24 border-b border-black">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-16 text-center">
            The Voices Behind Our Story
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Shriya Rajachandra",
                role: "Founder",
                image: founders?.founder1?.image?.asset?.url || "/placeholder.svg?height=500&width=400&text=Founder+1",
                bio: founders?.founder1?.description || "A sports journalist with 4 years of experience in the industry, fueling a passion for all things sports.",
              },
              {
                name: "Atharv Phadke",
                role: "Founder",
                image: founders?.founder2?.image?.asset?.url || "/placeholder.svg?height=500&width=400&text=Founder+2",
                bio: founders?.founder2?.description || "A former international swimmer who has experienced the highs and lows of competitive sport at the highest level.",
              },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[4/5] max-w-sm mx-auto border-2 border-black overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={`${member.name}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <h3 className="font-serif text-2xl font-bold">{member.name}</h3>
                <p className="text-red-900 uppercase text-xs tracking-widest mb-2">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 