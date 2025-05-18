import { client } from "@/sanity/lib/client"
import { featuredPressReleasesQuery, featuredGalleryImagesQuery } from "@/sanity/lib/queries"
import { getYouTubeVideos } from "@/lib/youtube"
import { HomePage } from "@/components/home-page"

export const revalidate = 60 // revalidate this page every 60 seconds

export default async function Page() {
  const [pressReleases, galleryImages, youtubeVideos] = await Promise.all([
    client.fetch(featuredPressReleasesQuery),
    client.fetch(featuredGalleryImagesQuery),
    getYouTubeVideos(process.env.YOUTUBE_CHANNEL_ID || '')
  ])

  return <HomePage pressReleases={pressReleases} galleryImages={galleryImages} youtubeVideos={youtubeVideos} />
}
