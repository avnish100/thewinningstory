import type { InstagramPost, YouTubeVideo } from '@/types'

export async function getInstagramPosts(username: string, limit: number = 6): Promise<InstagramPost[]> {
  // You'll need to use Instagram's Graph API
  // Requires Instagram Basic Display API or Instagram Graph API setup
  const response = await fetch(`/api/instagram?username=${username}&limit=${limit}`)
  const data = await response.json()
  return data.posts
}

export async function getYouTubeVideos(channelId: string, limit: number = 6): Promise<YouTubeVideo[]> {
  // Uses YouTube Data API v3
  const response = await fetch(`/api/youtube?channelId=${channelId}&limit=${limit}`)
  const data = await response.json()
  return data.videos
} 