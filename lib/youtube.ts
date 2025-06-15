export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  description: string;
}

function removeHashtags(title: string): string {
  return title.replace(/#\w+/g, '').replace(/&amp;/g, '&').trim();
}

export async function getYouTubeVideos(
  channelId: string, 
  maxResults = 4
): Promise<YouTubeVideo[]> {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    
    if (!apiKey) {
      console.error('YouTube API key is missing');
      return [];
    }

    const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
    
    // Target durations: medium (4-20 min) and long (20+ min)
    const durations = ['medium', 'long'];
    
    // Create concurrent requests for both durations
    const requests = durations.map(async (duration) => {
      const params = new URLSearchParams({
        part: 'snippet',
        channelId,
        maxResults: Math.ceil(maxResults / durations.length).toString(),
        order: 'date',
        type: 'video',
        videoDuration: duration,
        key: apiKey
      });

      const response = await fetch(`${baseUrl}?${params}`, {
        // Add cache control headers
        headers: {
          'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=86400'
        }
      });

      if (!response.ok) {
        throw new Error(`API request failed for ${duration}: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        duration,
        items: data.items || []
      };
    });

    // Execute all requests concurrently
    const results = await Promise.all(requests);
    
    // Combine and process all videos
    const allVideos = results
      .flatMap(result => 
        result.items.map((item: any) => ({
          id: item.id?.videoId || '',
          title: removeHashtags(item.snippet?.title || '').replace(/&quot;/g, '"'),
          thumbnail: item.snippet?.thumbnails?.high?.url || '',
          publishedAt: item.snippet?.publishedAt || '',
          description: item.snippet?.description || '',
          duration: result.duration // Add duration metadata
        }))
      )
      // Sort by publish date (most recent first)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      // Limit to requested number of results
      .slice(0, maxResults);

    return allVideos;

  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}