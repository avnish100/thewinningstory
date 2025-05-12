'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram } from 'lucide-react'
import type { InstagramPost } from '@/types'
import { getInstagramPosts } from '@/lib/api'

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getInstagramPosts('thewinningstory')
        setPosts(data)
      } catch (error) {
        console.error('Error fetching Instagram posts:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (isLoading) {
    return <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="aspect-square bg-muted rounded-lg" />
      ))}
    </div>
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-square overflow-hidden rounded-lg"
        >
          <Image
            src={post.thumbnail || post.mediaUrl}
            alt={post.caption || 'Instagram post'}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
            <Instagram className="w-6 h-6 text-white" />
          </div>
        </Link>
      ))}
    </div>
  )
} 