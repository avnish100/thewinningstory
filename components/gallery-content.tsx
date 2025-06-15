// Create a client component wrapper for the gallery content
"use client"

import { useState } from "react"
import GalleryFilter from "./gallery-filter"
import GalleryItem from "./gallery-item"

interface GalleryImage {
    _id: string
    title: string
    caption: string
    category: string
    date: string
    imageUrl: string
    lqip: string
    featured: boolean
    order: number
  }

export default function GalleryContent({ items, categories }: { items: GalleryImage[], categories: string[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const filteredItems = activeCategory === "All" 
    ? items 
    : items.filter(item => item.category === activeCategory)

  return (
    <>
      <GalleryFilter 
        categories={categories} 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {filteredItems.map((item) => (
          <GalleryItem key={item._id} item={item} />
        ))}
      </div>
    </>
  )
}