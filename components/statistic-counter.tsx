"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

interface StatisticCounterProps {
  end: number
  duration?: number
  suffix?: string
}

// Easing function to make the animation smoother
const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4)

export function StatisticCounter({ end, duration = 2, suffix = "" }: StatisticCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime
      }

      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      
      // Apply easing function for smoother animation
      const easedProgress = easeOutQuart(progress)
      const currentCount = Math.floor(easedProgress * end)
      
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
