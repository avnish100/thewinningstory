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
  founders: {
    founder1: {
      image: {
        asset: {
          url: string;
        };
      };
      description: string;
    };
    founder2: {
      image: {
        asset: {
          url: string;
        };
      };
      description: string;
    };
  };
  storyImage: any;
  youtubeUrl: any;
  instagramUrl: any;
}

export function HomePage({ pressReleases, galleryImages, youtubeVideos, founders, storyImage, youtubeUrl, instagramUrl }: HomePageProps) {
    return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
  id="top"
  className="relative h-screen flex items-center justify-center overflow-hidden border-b border-black"
>
  {/* Background div with all the optimizations */}
  <div 
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: 'url(/flame.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed', // Creates parallax effect but can impact performance on mobile
      // Alternative: remove backgroundAttachment for better mobile performance
      opacity: 0,
      animation: 'fadeToLow 1.5s ease-out forwards',
      willChange: 'auto',
      contain: 'layout style paint',
      transform: 'translate3d(0, 0, 0)',
      backfaceVisibility: 'hidden',
    }}
  ></div>

  <div className="container mx-auto px-4 z-10 text-center relative">
    <h1 
      className="font-serif text-6xl md:text-8xl font-bold text-black tracking-tight mb-6 opacity-0 transform translate-y-8 animate-[fadeSlideUp_0.8s_ease-out_forwards]"
      style={{
        animationDelay: '0.2s',
        transform: 'translate3d(0, 0, 0)',
      }}
    >
      THE WINNING STORY
    </h1>
    <p 
      className="text-sm uppercase tracking-[0.3em] mb-8 text-gray-900 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]"
      style={{ 
        animationDelay: '0.6s',
        transform: 'translate3d(0, 0, 0)',
      }}
    >
      SPORTS • CULTURE • VICTORY
    </p>

    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
      <Link href="/story" className="group opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]" style={{ animationDelay: '0.8s' }}>
        <Button
          variant="outline"
          className="border-black text-black hover:bg-black hover:text-white rounded-none uppercase text-xs tracking-widest py-6 px-8 transition-all duration-300"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          Our Story
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </Link>
      <Link href={instagramUrl} className="group opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]" style={{ animationDelay: '1s' }}>
        <Button 
          className="bg-red-900 hover:bg-black text-white rounded-none uppercase text-xs tracking-widest py-6 px-8 transition-all duration-300"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
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

      {/* Social Media Section */}
      <section id="social" className="py-24 border-b border-black">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-16 text-center">Follow Our Journey</h2>

          {/* YouTube */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <Youtube className="h-6 w-6 mr-3 text-black" />
                <h3 className="font-serif text-2xl font-bold">YouTube</h3>
              </div>
              <Link
                href={youtubeUrl}
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
                      {new Date(youtubeVideos[0].publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
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
                        {new Date(video.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href={youtubeUrl} target="_blank">
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

      {/* Photo Gallery */}
      <section className="py-24 border-b border-black">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-black mb-16 text-center">Behind The Scenes</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages?.map((item: any, index: number) => (
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
                    placeholder={item.lqip ? "blur" : "empty"}
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
                href={instagramUrl}
                target="_blank"
                className="h-12 w-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href={youtubeUrl}
                target="_blank"
                className="h-12 w-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-600">&copy; {new Date().getFullYear()} The Winning Story. All rights reserved.</p>
              <div className="flex justify-center md:justify-end gap-4 mt-2">
              
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