import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight">FOR THE LOVE OF SPORT</h1>
                <p className="max-w-[600px] text-primary-foreground/80 text-base md:text-xl">
                  We are The Winning Story - a multi-media platform highlighting Indian athletes, behind-the-scenes heroes, and those whose stories deserve to be told.
                </p>
              </div>
            </div>
            <Image
              src="/founder.jpg"
              width={600}
              height={800}
              alt="Founder - Atharv Phadke"
              className="mx-auto aspect-[3/4] overflow-hidden rounded-lg md:rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">OUR VISION</h2>
            <p className="text-muted-foreground text-base md:text-lg text-center">
              "A Home for Indian Athletes" - The Winning Story envisions a media space where Indian athletes can authentically share their journeys – their triumphs, struggles, and the emotions that drive them. Through compelling storytelling, we aim to amplify the voices and celebrate the achievements of all Indian athletes, regardless of mainstream attention.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">UNMATCHED COVERAGE</h2>
              <p className="text-gray-500 text-base md:text-xl">
                We go beyond the headlines, scores, stats, and medals to bring you exclusive and captivating insights into the world of Indian Athletes. Our interviews delve deep into the athletes' personal journeys, struggles, and unique perspectives.
              </p>
              <p className="text-gray-500 text-base md:text-xl">
                We believe sports are more than wins and losses. We showcase the joy of victory, the agony of defeat, adversity and the unwavering spirit of human perseverance.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">THE FOUNDERS</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Atharv Phadke</h3>
                  <p className="text-gray-500 text-base">
                    A former international swimmer who has experienced the highs and lows of competitive sport at the highest level. This unique perspective informs his work as a sports journalist with 3 years of experience in the field.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Shriya</h3>
                  <p className="text-gray-500 text-base">
                    A passionate sports enthusiast and digital media expert bringing innovative storytelling approaches to the platform. Her expertise in content strategy helps bridge the gap between athletes and their audiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background border-t border-t-muted-foreground">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">OUR PURPOSE</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Build & Inspire</h3>
                <p className="text-secondary-foreground/80 text-base">
                  Build a recognizable & authentic Indian Sports Brand. Educate and inspire sports fans through compelling storytelling.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Create & Foster</h3>
                <p className="text-secondary-foreground/80 text-base">
                  Create a safe space for Indian athletes while fostering a more diverse and inclusive community for Indian sports beyond cricket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">JOIN THE MOVEMENT</h2>
            <p className="text-primary-foreground/80 text-base md:text-xl">
              Be part of our journey to revolutionize Indian sports storytelling across Instagram, YouTube Shorts, podcasts, and more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <Link href="mailto:contact@thewinningstory.com" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </Link>
              <Link href="https://instagram.com/thewinningstory" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full">
                  <Instagram className="mr-2 h-4 w-4" />
                  @thewinningstory
                </Button>
              </Link>
              <Link href="https://youtube.com/@TheWinningStory" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full">
                  <Youtube className="mr-2 h-4 w-4" />
                  @TheWinningStory
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
