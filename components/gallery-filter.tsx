"use client"

import { cn } from "@/lib/utils"

interface GalleryFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function GalleryFilter({ categories, activeCategory, onCategoryChange }: GalleryFilterProps) {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex space-x-2 min-w-max">
        <button
          onClick={() => onCategoryChange("All")}
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors",
            activeCategory === "All" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200",
          )}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === category ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200",
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
