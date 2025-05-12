import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const channelId = searchParams.get('channelId')
  const limit = Number(searchParams.get('limit')) || 6

  try {
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
    
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=UCjc9QpOW3RbMIyUygPHfBfg&part=snippet&order=date&maxResults=10 `
    )
    
    const data = await response.json()
    
    const videos = await Promise.all(
      data.items.map(async (item: any) => {
        // Get both statistics and content details
        const videoDetailsResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&id=${item.id.videoId}&part=statistics,contentDetails`
        )
        const videoDetails = await videoDetailsResponse.json()
        
        // Skip YouTube Shorts (typically 60 seconds or less)
        const duration = videoDetails.items[0]?.contentDetails.duration || ''
        const durationInSeconds = parseDuration(duration)
        if (durationInSeconds <= 60) {
          return null
        }

        return {
          id: item.id.videoId,
          title: item.snippet.title.replace(/#\w+/g, '').replace(/&quot;/g, '').trim(),
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high.url,
          publishedAt: item.snippet.publishedAt,
          videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          viewCount: videoDetails.items[0]?.statistics.viewCount || '0',
        }
      })
    )

    // Filter out null values (Shorts that were skipped)
    const filteredVideos = videos.filter(video => video !== null)

    return NextResponse.json({ videos: filteredVideos })
  } catch (error) {
    console.error('Error fetching YouTube videos:', error)
    return NextResponse.json({ videos: [] })
  }
}

function parseDuration(duration: string): number {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)
  if (!match) return 0

  const hours = (parseInt(match[1]) || 0)
  const minutes = (parseInt(match[2]) || 0)
  const seconds = (parseInt(match[3]) || 0)

  return hours * 3600 + minutes * 60 + seconds
} 