"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Info } from "lucide-react"

interface GalleryItemProps {
  item: {
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
}

export default function GalleryItem({ item }: GalleryItemProps) {
  const [showInfo, setShowInfo] = useState(false)

  // Randomize aspect ratio for masonry effect
  const aspectRatios = ["aspect-[4/5]", "aspect-square", "aspect-[4/3]", "aspect-[16/9]"]
  const randomAspect = aspectRatios[item.order % aspectRatios.length]

  // Format date
  const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div
        className={`relative ${randomAspect} overflow-hidden rounded-lg shadow-md`}
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        <Image
          src={item.imageUrl || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          placeholder="blur"
          blurDataURL={item.lqip}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 ${
            showInfo ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Info overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 ${
            showInfo ? "translate-y-0" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-block px-3 py-1 bg-white/90 text-zinc-900 text-xs font-medium rounded-full mb-3">
            {item.category}
          </span>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-zinc-200 text-sm line-clamp-2">{item.caption}</p>
          <div className="flex items-center mt-3 text-zinc-300 text-xs">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Info button for mobile */}
        <button
          className="md:hidden absolute top-3 right-3 bg-white/80 p-2 rounded-full"
          onClick={() => setShowInfo(!showInfo)}
        >
          <Info className="h-4 w-4 text-zinc-800" />
        </button>
      </div>

      {/* Mobile caption (visible on small screens) */}
      <div className="md:hidden mt-3">
        <span className="text-xs font-medium text-zinc-500">{item.category}</span>
        <h3 className="font-serif text-lg font-bold mt-1">{item.title}</h3>
      </div>
    </motion.div>
  )
}
