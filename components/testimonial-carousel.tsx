"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const next = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [current])

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative border-2 border-black p-8 bg-white">
      <div className="overflow-hidden">
        <div
          className="transition-all duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
            display: "flex",
            width: `${testimonials.length * 100}%`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center" style={{ width: `${100 / testimonials.length}%` }}>
              <p className="font-serif text-2xl italic mb-6">"{testimonial.quote}"</p>
              <div className="h-px w-24 bg-red-900 mx-auto mb-6"></div>
              <p className="font-medium">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-4 -right-4 flex space-x-2">
        <button
          onClick={prev}
          className="h-10 w-10 border border-black bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="h-10 w-10 border border-black bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isTransitioning) return
              setIsTransitioning(true)
              setCurrent(index)
            }}
            className={`h-2 w-2 rounded-full transition-colors ${current === index ? "bg-red-900" : "bg-gray-300"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
