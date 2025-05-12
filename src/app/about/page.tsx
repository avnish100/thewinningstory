import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">ABOUT US</h1>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                  The story behind The Winning Story.
                </p>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=800&width=600"
              width={600}
              height={800}
              alt="Team Photo"
              className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center">OUR MISSION</h2>
            <p className="text-muted-foreground md:text-lg text-center">
              We believe in the power of sports to inspire, unite, and transform lives.
              Our mission is to tell the untold stories of triumph, perseverance, and dedication
              that make sports more than just a game.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">OUR APPROACH</h2>
              <p className="text-gray-500 md:text-xl">
                We believe in immersive, authentic storytelling that captures the essence of athletic pursuit. Our
                content spans written features, photojournalism, and documentary-style video production, all designed to
                bring you closer to the athletes and teams you admire.
              </p>
              <p className="text-gray-500 md:text-xl">
                The Winning Story maintains a strong presence on Instagram and YouTube, where we share exclusive
                content, behind-the-scenes footage, and interactive experiences with our community of sports
                enthusiasts.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">OUR TEAM</h2>
              <p className="text-gray-500 md:text-xl">
                Our diverse team brings together experienced sports journalists, former athletes, award-winning
                photographers, and innovative digital creators. United by our passion for sports and storytelling, we
                work collaboratively to produce content that informs, inspires, and connects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-12">MEET THE TEAM</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  name: "Jane Smith",
                  role: "Editor-in-Chief",
                  bio: "Former sports journalist with over 15 years of experience covering major sporting events worldwide.",
                },
                {
                  name: "John Johnson",
                  role: "Content Director",
                  bio: "Award-winning documentary filmmaker specializing in sports narratives and athlete profiles.",
                },
                {
                  name: "Sarah Williams",
                  role: "Head of Digital",
                  bio: "Digital strategy expert who has led social media campaigns for major sports brands and athletes.",
                },
                {
                  name: "Michael Brown",
                  role: "Lead Photographer",
                  bio: "Internationally recognized sports photographer whose work has appeared in major publications.",
                },
                {
                  name: "David Miller",
                  role: "Senior Writer",
                  bio: "Former athlete turned journalist with unique insights into the competitive mindset.",
                },
                {
                  name: "Emily Davis",
                  role: "Video Producer",
                  bio: "Creative director specializing in short-form video content for digital platforms.",
                },
              ].map((member, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=Team+${i + 1}`}
                      width={150}
                      height={150}
                      alt={member.name}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm font-medium text-gray-500">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-secondary">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="section-title text-center">OUR VALUES</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <h3 className="article-subtitle">Authenticity</h3>
                <p className="text-secondary-foreground/80">
                  We tell real stories of real people with honesty and integrity.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="article-subtitle">Excellence</h3>
                <p className="text-secondary-foreground/80">
                  We strive for excellence in every story we tell and every piece we create.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="article-subtitle">Impact</h3>
                <p className="text-secondary-foreground/80">
                  We aim to inspire and make a difference through our storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">CONNECT WITH US</h2>
            <p className="mt-4 text-primary-foreground/80 md:text-xl">
              Have a story idea or want to collaborate? We'd love to hear from you.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
              <Link href="mailto:contact@thewinningstory.com">
                <Button variant="secondary">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Button>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">
                  <Instagram className="mr-2 h-4 w-4" />
                  Follow on Instagram
                </Button>
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">
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
