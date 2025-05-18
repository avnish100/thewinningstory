import { groq } from 'next-sanity'

// Gallery queries
export const galleryImagesQuery = groq`*[_type == "galleryImage"] | order(order asc, _createdAt desc) {
  _id,
  title,
  caption,
  category,
  date,
  "imageUrl": image.asset->url,
  "lqip": image.asset->metadata.lqip,
  featured,
  order
}`

export const featuredGalleryImagesQuery = groq`*[_type == "galleryImage" && featured == true] | order(order asc, _createdAt desc) {
  _id,
  title,
  caption,
  category,
  date,
  "imageUrl": image.asset->url,
  "lqip": image.asset->metadata.lqip,
  featured,
  order
}[0...6]`

// Press release queries
export const pressReleasesQuery = groq`*[_type == "pressRelease"] | order(date desc) {
  _id,
  title,
  slug,
  excerpt,
  category,
  date,
  featured,
  "coverImageUrl": coverImage.asset->url,
  "lqip": coverImage.asset->metadata.lqip
}`

export const featuredPressReleasesQuery = groq`*[_type == "pressRelease" && featured == true] | order(date desc) {
  _id,
  title,
  slug,
  excerpt,
  category,
  date,
  featured,
  "coverImageUrl": coverImage.asset->url,
  "lqip": coverImage.asset->metadata.lqip
}[0...4]`

export const pressReleaseBySlugQuery = groq`*[_type == "pressRelease" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  content,
  category,
  date,
  featured,
  "coverImageUrl": coverImage.asset->url,
  "lqip": coverImage.asset->metadata.lqip
}`