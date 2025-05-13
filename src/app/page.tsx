'use client'
import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import React from "react"
import { Button } from "@/components/ui/button"
import { InstagramFeed } from '@/components/instagram-feed'
import { YouTubeFeed } from '@/components/youtube-feed'

export default function HomePage() {
  const [showOverlay, setShowOverlay] = React.useState(true);
  const instagramUrl = `https://instagram.com/thewinningstory`;
  return (
    <>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            onAnimationComplete={() => setShowOverlay(false)}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 1 }}
            className="fixed inset-0 bg-[#2f4138] z-50 pointer-events-none flex items-center justify-center p-4"
          >
            <div className="relative overflow-hidden w-full max-w-lg mx-auto">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#4f1717] z-10"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="text-2xl sm:text-4xl font-light italic text-white text-center"
              >
                The Winning Story
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="text-2xl sm:text-4xl font-light italic text-white text-center"
              >
                There's no place like sports
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col min-h-screen relative">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-28 lg:py-36 xl:py-44 bg-[#4f1717] text-white">
          <div className="container px-4 md:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="space-y-3"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    Where Champions Are Made and Legends Are Written
                  </h1>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-base sm:text-lg md:text-xl text-white/80 font-light max-w-[600px]"
                  >
                    Discover the stories behind the victories, the struggles behind the triumphs, and the people behind
                    the records.
                  </motion.p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-3 pt-4 w-full max-w-full"
                >
                  <Link 
                    href="https://instagram.com/thewinningstory" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full sm:w-auto flex-shrink-0"
                  >
                    <Button className="w-full min-w-[200px] bg-primary hover:bg-primary/90 text-white">
                      <Instagram className="mr-2 h-4 w-4" />
                      Follow on Instagram
                    </Button>
                  </Link>
                  <Link 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full sm:w-auto flex-shrink-0"
                  >
                    <Button variant="outline" className="w-full min-w-[200px] border-primary text-primary hover:bg-primary/10">
                      <Youtube className="mr-2 h-4 w-4" />
                      Subscribe on YouTube
                    </Button>
                  </Link>
                </motion.div>
              </div>
              <Image
                src="/placeholder.svg?height=800&width=600&text=Featured+Athlete"
                width={600}
                height={800}
                alt="Featured Athlete"
                className="mx-auto aspect-[3/4] hidden md:block overflow-hidden rounded-lg md:rounded-none object-cover object-center sm:w-full lg:order-last shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Featured Stories Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center"
            >
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Featured Stories</h2>
                <p className="text-muted-foreground text-base md:text-lg font-light">The latest and greatest from The Winning Story.</p>
              </div>
              <Link href="#" className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                View all stories
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <div className="grid gap-6 md:gap-8 pt-8 md:pt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "The Comeback: How Team Phoenix Rose From the Ashes",
                  category: "Basketball", 
                  image: "/placeholder.svg?height=400&width=600&text=Basketball",
                },
                {
                  title: "Breaking Barriers: The First Woman to Win the Ultra Marathon",
                  category: "Running",
                  image: "/placeholder.svg?height=400&width=600&text=Running",
                },
                {
                  title: "Mind Games: The Psychology Behind Championship Teams",
                  category: "Sports Psychology",
                  image: "/placeholder.svg?height=400&width=600&text=Psychology",
                },
              ].map((story, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="flex flex-col h-full"
                >
                  <Link href="#" className="group relative overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 md:p-6">
                      <div className="text-sm font-medium uppercase tracking-wide text-[#4f1717]">
                        {story.category}
                      </div>
                      <h3 className="mt-2 text-lg md:text-xl font-medium line-clamp-2">
                        {story.title}
                      </h3>
                      <div className="mt-4 flex items-center gap-2">
                        <Instagram className="h-5 w-5 text-[#4e334c]" />
                        <span className="text-sm text-muted-foreground">View on Instagram</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Highlights Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#4f1717]/10">
          <div className="container px-4 md:px-8">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Video Highlights</h2>
                <p className="text-muted-foreground text-base md:text-lg font-light">Watch our latest video content on YouTube.</p>
              </div>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Visit our YouTube channel
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 pt-6 md:pt-8">
              <YouTubeFeed />
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#4e334c] text-white">
          <div className="container px-4 md:px-8">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Follow Us on Instagram</h2>
                <p className="text-muted-foreground text-base md:text-lg font-light">Get daily updates and behind-the-scenes content.</p>
              </div>
              <Link
                href="https://instagram.com/thewinningstory"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-medium text-white hover:underline"
              >
                @thewinningstory
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4 pt-6 md:pt-8 md:grid-cols-4 lg:grid-cols-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square overflow-hidden rounded-lg bg-card"
                  >
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=Insta+${i + 1}`}
                      alt={`Instagram post ${i + 1}`}
                      width={300}
                      height={300}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/0 opacity-0 transition-all duration-300 group-hover:bg-primary/90 group-hover:opacity-100">
                      <Instagram className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 md:mt-8 text-center">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  <Instagram className="mr-2 h-4 w-4" />
                  Follow on Instagram
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#2f4138] relative min-h-[50vh] md:min-h-[70vh] flex items-center">
          <div className="container px-4 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-[600px] space-y-8 md:space-y-10 text-center"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-4 md:space-y-6"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">Join Our Community</h2>
                <p className="text-base md:text-lg text-white/80">
                  Subscribe to our newsletter for exclusive content and updates.
                </p>
              </motion.div>
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button variant="secondary" type="submit" className="w-full sm:w-auto rounded-lg bg-white text-[#2f4138] hover:bg-white/90 px-6">
                  Subscribe
                </Button>
              </motion.form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
