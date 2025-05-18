export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  description: string;
}

function removeHashtags(title: string): string {
  return title.replace(/#\w+/g, '').trim();
}

export async function getYouTubeVideos(channelId: string, maxResults = 4): Promise<YouTubeVideo[]> {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
    const params = new URLSearchParams({
      part: 'snippet',
      channelId,
      maxResults: maxResults.toString(),
      order: 'date',
      type: 'video',
      videoDuration: 'medium',
      key: apiKey || ''
    });

    const response = await fetch(`${baseUrl}?${params}`);
    const data = await response.json();

    if (!data.items) return [];
        
    return data.items.map((item: any) => ({
      id: item.id?.videoId || '',
      title: removeHashtags(item.snippet?.title || '').replace(/&quot;/g, ''),
      thumbnail: item.snippet?.thumbnails?.high?.url || '',
      publishedAt: item.snippet?.publishedAt || '',
      description: item.snippet?.description || ''
    }));
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}