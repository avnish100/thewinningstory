import { client } from "@/sanity/lib/client"
import { featuredPressReleasesQuery, featuredGalleryImagesQuery , foundersQuery, storyImageQuery} from "@/sanity/lib/queries"
import { getYouTubeVideos } from "@/lib/youtube"
import { HomePage } from "@/components/home-page"

export const revalidate = 60 // revalidate this page every 60 seconds

export default async function Page() {
  const [pressReleases, galleryImages, youtubeVideos, founderData, storyImage] = await Promise.all([
    client.fetch(featuredPressReleasesQuery),
    client.fetch(featuredGalleryImagesQuery),
    getYouTubeVideos(process.env.YOUTUBE_CHANNEL_ID || ''),
    client.fetch(foundersQuery),
    client.fetch(storyImageQuery)
  ])

  const youtubeUrl = `https://www.youtube.com/${process.env.YOUTUBE_CHANNEL_HANDLE}`
  console.log("Youtube URL:", youtubeUrl)
  const instagramUrl = `https://instagram.com/${process.env.INSTAGRAM_HANDLE}`
  console.log("Instagram URL:", instagramUrl)

  return <HomePage pressReleases={pressReleases} galleryImages={galleryImages} youtubeVideos={youtubeVideos} founders={founderData} storyImage={storyImage} youtubeUrl={youtubeUrl} instagramUrl={instagramUrl}/>
}
