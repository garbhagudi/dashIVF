"use client"

import { useState, useCallback } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

interface VideoTestimonial {
  id: number
  title: string
  videoId: string
  thumbnail: string
  locations: string[]
}

const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 1,
    title: "Joyful couple celebrates pregnancy on very first embryo transfer!",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1760445537/Davanagere-02-02-1_s55l10.webp",
    locations: [
      "Hanumanthanagar",
      "Kalyan Nagar",
      "Jayanagar",
      "Electronic City",
      "Marathahalli",
      "New BEL Road",
      "Nagarbhavi",
    ],
  },
  {
    id: 2,
    title: "Success story: First time IVF success",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1760101158/1-02_yyxrvi.webp",
    locations: [
      "Hanumanthanagar",
      "Kalyan Nagar",
      "Jayanagar",
      "Electronic City",
      "Marathahalli",
      "New BEL Road",
      "Nagarbhavi",
    ],
  },
  {
    id: 3,
    title: "Happy family celebrates their bundle of joy",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1760177306/01-02_s8m5oa.webp",
    locations: [
      "Hanumanthanagar",
      "Kalyan Nagar",
      "Jayanagar",
      "Electronic City",
      "Marathahalli",
      "New BEL Road",
      "Nagarbhavi",
    ],
  },
]

const VideoTestimonialsCarousel=()=> {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [playingId, setPlayingId] = useState<number | null>(null)

  const current = testimonials[currentIndex]

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? VIDEO_TESTIMONIALS.length - 1 : prev - 1))
  }, [])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === VIDEO_TESTIMONIALS.length - 1 ? 0 : prev + 1))
  }, [])

  const handlePlayClick = useCallback(() => {
    setPlayingId(current.id)
  }, [current.id])

  return (
    <section className="bg-brandPurple" aria-label="Video testimonials">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <header className="text-center mb-10">
          <h2 className="text-balance  text-xl font-bold text-white sm:text-2xl lg:text-3xl">
            Most Trusted IVF Clinic in Bangalore
          </h2>
        </header>
        <div className="relative flex items-center justify-center gap-4 md:gap-6">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute left-0 z-10 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-brandPurpleDark text-white shadow-lg transition-transform hover:scale-110 md:relative md:left-auto"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Video Card */}
          <div className="w-full max-w-2xl">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
              {/* Video Thumbnail with Play Button */}
              <div className="relative aspect-video bg-gray-200">
             <Image
                      src={`https://img.youtube.com/vi/${current.videoId}/hqdefault.jpg`}
                      alt="Video thumbnail"
                      fill
                      className="object-cover"
                      priority={currentIndex === 0} 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                      quality={85}                     />
                {playingId !== current.id ? (
                  <button
                    onClick={handlePlayClick}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all hover:bg-black/40"
                                    >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110">
                      <Play className="h-8 w-8 fill-brandPink text-brandPink" />
                    </div>
                  </button>
                ) : (
                  /* Add loading="lazy" to iframe for performance */
                  <iframe
                    src={`https://www.youtube.com/embed/${current.videoId}?autoplay=1`}
                    
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                )}
              </div>
            </div>
            <p className="mt-5 text-end text-xs text-gray-800 md:text-sm">Swipe for more reviews →</p>
          </div>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-0 z-10 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-brandPurpleDark text-white shadow-lg transition-transform hover:scale-110 md:relative md:right-auto"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default VideoTestimonialsCarousel;

const testimonials = [
  {
    id: 1,
    videoId: 'cPPnXU9fB_0',
  },
  {
    id: 2,
    videoId: 'UjZ7APf5EbE',
  },
  {
    id: 3,
    videoId: 'I2KHjfiVKn0',
  },
  {
    id: 4,
    videoId: 'tXsmr-fnuV4',
  },
];