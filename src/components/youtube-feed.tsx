'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Play } from 'lucide-react'
import type { YouTubeVideo } from '@/types'
import { getYouTubeVideos } from '@/lib/api'

export function YouTubeFeed() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchVideos() {
      try {
        const data = await getYouTubeVideos('@TheWinningStory')
        setVideos(data)
      } catch (error) {
        console.error('Error fetching YouTube videos:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchVideos()
  }, [])

  if (isLoading) {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="space-y-4">
          <div className="aspect-video bg-muted rounded-lg" />
          <div className="h-4 bg-muted rounded w-3/4" />
        </div>
      ))}
    </div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <Link
          key={video.id}
          href={video.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group space-y-3"
        >
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
              <Play className="w-12 h-12 text-white" />
            </div>
          </div>
          <h3 className="mt-2 text-xl font-medium font-serif italic line-clamp-2 group-hover:text-primary transition-colors">
            {video.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {Intl.NumberFormat('en-US').format(Number(video.viewCount))} views
          </p>
        </Link>
      ))}
    </div>
  )
} 