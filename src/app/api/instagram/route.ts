import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('username')
  const limit = Number(searchParams.get('limit')) || 6

  try {
    // You'll need to set up Instagram Graph API credentials
    const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN
    
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&limit=${limit}&access_token=${INSTAGRAM_ACCESS_TOKEN}`
    )
    
    const data = await response.json()
    console.log(data)
    const posts = data.map((post: any) => ({
      id: post.id,
      mediaUrl: post.media_url,
      permalink: post.permalink,
      caption: post.caption,
      timestamp: post.timestamp,
      mediaType: post.media_type,
      thumbnail: post.thumbnail_url || post.media_url,
    }))

    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Error fetching Instagram posts:', error)
    return NextResponse.json({ posts: [] })
  }
} 