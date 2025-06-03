'use client';

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Youtube, ArrowRight, ExternalLink, ChevronRight } from "lucide-react"
import { StatisticCounter } from "@/components/statistic-counter"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { PressReleases } from "@/components/press-releases"
import { NewsletterForm } from "@/components/newsletter-form"
import type { YouTubeVideo } from "@/lib/youtube"

interface HomePageProps {
  pressReleases: any[];
  galleryImages: any[];
  youtubeVideos: YouTubeVideo[];
}

export function HomePage({ pressReleases, galleryImages, youtubeVideos }: HomePageProps) {
    const youtubeUrl = `https://www.youtube.com/${process.env.YOUTUBE_CHANNEL_HANDLE}`
    console.log("Youtube URL:", youtubeUrl)
    const instagramUrl = `https://instagram.com/${process.env.INSTAGRAM_USERNAME}`
    console.log("Instagram URL:", instagramUrl)
    return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        id="top"
        className="relative h-screen flex items-center justify-center overflow-hidden border-b border-black"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/flame.png"
            alt="The Winning Story"
            fill
            className="object-cover opacity-100 transition-opacity duration-700"
            style={{
              animation: 'fadeToLow 1.5s ease-out forwards'
            }}
            priority
            loading="eager"
          />
          <div className="absolute inset-0"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 
            className="font-serif text-6xl md:text-8xl font-bold text-black tracking-tight mb-6 opacity-0 transform translate-y-8 animate-[fadeSlideUp_0.8s_ease-out_forwards]"
            style={{
              animationDelay: '0.2s'
            }}
          >
            THE WINNING STORY
          </h1>
          <p 
            className="text-sm uppercase tracking-[0.3em] mb-8 text-gray-900 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]"
            style={{ animationDelay: '0.6s' }}
          >
            SPORTS • CULTURE • VICTORY
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <Link href="#about" className="group opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]" style={{ animationDelay: '0.8s' }}>
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white rounded-none uppercase text-xs tracking-widest py-6 px-8 transition-all duration-300"
              >
                Our Story
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="#social" className="group opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]" style={{ animationDelay: '1s' }}>
              <Button className="bg-red-900 hover:bg-black text-white rounded-none uppercase text-xs tracking-widest py-6 px-8 transition-all duration-300">
                Follow Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <p className="text-xs uppercase tracking-widest mb-2 text-gray-600">Scroll</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-b border-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                The Story Behind <br />
                Our Publication
              </h2>
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
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-50"></div>
              <div className="relative border-2 border-black p-4 bg-white rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:rotate-0 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="About The Winning Story"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-red-900 text-white p-4 font-serif text-xl italic">
                Est. 2023
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social" className="py-24 border-b border-black">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-16 text-center">Follow Our Journey</h2>

          {/* Instagram */}
          <div className="mb-24">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <Instagram className="h-6 w-6 mr-3 text-black" />
                <h3 className="font-serif text-2xl font-bold">Instagram</h3>
              </div>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-xs uppercase tracking-widest font-medium text-red-900 hover:text-black flex items-center"
              >
                @thewinningstory
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Replace the grid with LightWidget */}
            <div className="w-full">
              <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
              <iframe 
                src="//lightwidget.com/widgets/0a4e0f22812a57f6b976a95512d71af9.html" 
                scrolling="no" 
                allowTransparency={true} 
                className="lightwidget-widget" 
                style={{width: '100%', border: 0, overflow: 'hidden'}}
              ></iframe>
            </div>

            <div className="text-center mt-8">
              <Link href="https://instagram.com" target="_blank">
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white rounded-none uppercase text-xs tracking-widest py-6 px-8"
                >
                  View Instagram Profile
                  <Instagram className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* YouTube */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <Youtube className="h-6 w-6 mr-3 text-black" />
                <h3 className="font-serif text-2xl font-bold">YouTube</h3>
              </div>
              <Link
                href="https://www.youtube.com/@TheWinningStory"
                target="_blank"
                className="text-xs uppercase tracking-widest font-medium text-red-900 hover:text-black flex items-center"
              >
                The Winning Story
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {youtubeVideos.length > 0 && (
                <div className="relative aspect-video border border-black overflow-hidden group">
                  <Image
                    src={youtubeVideos[0].thumbnail}
                    alt={youtubeVideos[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Link href={`https://youtube.com/watch?v=${youtubeVideos[0].id}`} target="_blank">
                      <div className="h-16 w-16 rounded-full bg-red-900 group-hover:bg-black transition-colors duration-300 flex items-center justify-center">
                        <svg
                          className="h-8 w-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-serif text-lg font-bold">{youtubeVideos[0].title}</h4>
                    <p className="text-sm text-gray-300">
                      {new Date(youtubeVideos[0].publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {youtubeVideos.slice(1).map((video) => (
                  <Link href={`https://youtube.com/watch?v=${video.id}`} target="_blank" key={video.id} className="flex gap-4 group">
                    <div className="relative w-40 h-24 flex-shrink-0 border border-black overflow-hidden">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-red-900 group-hover:bg-black transition-colors duration-300 flex items-center justify-center">
                          <svg
                            className="h-4 w-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-black group-hover:text-red-900 transition-colors duration-300">
                        {video.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {new Date(video.publishedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="https://www.youtube.com/@TheWinningStory" target="_blank">
                <Button className="bg-red-900 hover:bg-black text-white rounded-none uppercase text-xs tracking-widest py-6 px-8">
                  Subscribe to Our Channel
                  <Youtube className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section id="press" className="py-24 border-b border-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black">Press Releases</h2>
            <Link
              href="/press"
              className="text-xs uppercase tracking-widest font-medium text-red-900 hover:text-black flex items-center"
            >
              View All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <PressReleases releases={pressReleases} />
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
                bio: "A sports journalist with 4 years of experience in the industry, fueling a passion for all thingssports. A lifelong sports enthusiast with a keen eye forcompelling narratives and a knack for insightful analysis.",
              },
              {
                name: "Atharv Phadke",
                role: "Founder",
                bio: "A former international swimmer who has experienced the highs and lows of competitive sport at the highest level. This unique perspective informs his work as of experience in the field.",
              },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[4/5] max-w-sm mx-auto border-2 border-black overflow-hidden mb-4">
                  <Image
                    src={`/placeholder.svg?height=500&width=400&text=Team Member ${index + 1}`}
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

          {/* <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white rounded-none uppercase text-xs tracking-widest py-6 px-8"
            >
              Join Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div> */}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 border-b border-black">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-black mb-16 text-center">Behind The Scenes</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
            {galleryImages.map((item:any, index:any) => (
              <div
                key={item._id}
                className={`group overflow-hidden relative ${index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <div className="absolute inset-0 border border-black z-10 pointer-events-none"></div>
                <div className="relative w-full h-full aspect-square">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700"
                    placeholder="blur"
                    blurDataURL={item.lqip}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery" className="group">
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white rounded-none uppercase text-xs tracking-widest py-6 px-8"
              >
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Animated Statistics
      <section className="py-24 border-b border-black bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold mb-16 text-center">By The Numbers</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-serif text-5xl md:text-6xl font-bold text-red-900 mb-2">
                <StatisticCounter end={50} suffix="K+" duration={2} />
              </p>
              <p className="uppercase text-xs tracking-widest">Social Followers</p>
            </div>

            <div className="text-center">
              <p className="font-serif text-5xl md:text-6xl font-bold text-red-900 mb-2">
                <StatisticCounter end={100} suffix="+" duration={2} />
              </p>
              <p className="uppercase text-xs tracking-widest">Videos Created</p>
            </div>

            <div className="text-center">
              <p className="font-serif text-5xl md:text-6xl font-bold text-red-900 mb-2">
                <StatisticCounter end={25} suffix="+" duration={2} />
              </p>
              <p className="uppercase text-xs tracking-widest">Sports Covered</p>
            </div>

            <div className="text-center">
              <p className="font-serif text-5xl md:text-6xl font-bold text-red-900 mb-2">
                <StatisticCounter end={12} duration={2} />
              </p>
              <p className="uppercase text-xs tracking-widest">Team Members</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Interactive Timeline */}
      {/* <section className="py-24 border-b border-black">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-black mb-16 text-center">Our Journey</h2>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black"></div>

            {[
              {
                year: 2023,
                milestone: "First Instagram post reached 10,000 likes",
                description: "Founded with a vision to transform sports media",
              },
              {
                year: 2024,
                milestone: "Surpassed 50,000 YouTube subscribers",
                description: "Expanded our social media presence across platforms",
              },
              {
                year: 2025,
                milestone: "Preparing for our first major event coverage",
                description: "Launching our comprehensive coverage of major sporting events",
              },
            ].map((item, index) => (
              <div
                key={item.year}
                className={`flex items-center mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                  <h3 className="font-serif text-3xl font-bold mb-2">{item.year}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-900 rounded-full border-4 border-white"></div>

                <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12 text-right"}`}>
                  <p className="text-sm uppercase tracking-widest text-red-900 mb-2">MILESTONE</p>
                  <p className="font-medium">{item.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Carousel */}
      {/* <section className="py-24 border-b border-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-4xl font-bold text-black mb-16 text-center">What People Are Saying</h2>

          <TestimonialCarousel
            testimonials={[
              {
                quote:
                  "The Winning Story brings a fresh perspective to sports coverage. Their visual storytelling is unmatched in the industry.",
                author: "Sports Media Weekly",
              },
              {
                quote:
                  "A breath of fresh air in sports media. Their attention to detail and storytelling approach sets them apart from traditional outlets.",
                author: "Digital Content Awards",
              },
              {
                quote:
                  "The team at The Winning Story has created something special. Their content captures the emotion and drama of sports in a way few others can.",
                author: "Pro Athlete Magazine",
              },
            ]}
          />
        </div>
      </section> */}

      

      {/* Contact/Newsletter */}
      <section className="py-24 border-b border-black">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-serif text-4xl font-bold text-black mb-6">Stay Updated</h2>
          <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
            Be the first to know when we launch and receive exclusive updates on our latest content and features.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="font-serif text-2xl font-bold text-black">THE WINNING STORY</h3>
            </div>

            <div className="flex gap-6 mb-8 md:mb-0">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="h-12 w-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="h-12 w-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="h-12 w-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-600">&copy; {new Date().getFullYear()} The Winning Story. All rights reserved.</p>
              <div className="flex justify-center md:justify-end gap-4 mt-2">
                <Link href="#" className="text-xs text-gray-600 hover:text-black">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-xs text-gray-600 hover:text-black">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll Navigation */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="flex flex-col space-y-2">
          <a
            href="#top"
            className="h-12 w-12 bg-black text-white flex items-center justify-center hover:bg-red-900 transition-colors"
          >
            ↑
          </a>
        </div>
      </div>
    </div>
  )
}