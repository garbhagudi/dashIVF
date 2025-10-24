"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Slide = { src: string; alt: string }

export function Hero({ images }: { images: Slide[] }) {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 5000)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [images.length])

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length)
  }
  function next() {
    setIndex((i) => (i + 1) % images.length)
  }

  return (
    <div className="relative  overflow-hidden h-full" aria-roledescription="carousel" aria-label="Promotions">
      {images.map((img, i) => (
        <div
          key={img.src}
          aria-hidden={index !== i}
          className={`transition-opacity duration-500 ${index === i ? "opacity-100" : "opacity-0"} absolute inset-0`}
        >
          <Image
            src={img.src || "/placeholder.svg"}
            alt={img.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
      ))}
      <div className="relative w-full pt-[50%]" aria-live="polite">
        {/* aspect ratio spacer */}
      </div>
      <div className="absolute inset-y-0 left-2  items-center hidden md:flex">
        <Button
          variant="secondary"
          size="icon"
          onClick={prev}
          aria-label="Previous slide"
          className="rounded-full h-11 w-11 text-4xl"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute inset-y-0 right-2 items-center hidden md:flex">
        <Button variant="secondary" size="icon" onClick={next} aria-label="Next slide" className="rounded-full h-11 w-11 text-4xl">
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
    </div>
  )
}
