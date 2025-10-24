"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import  doctors  from "@/db/doctors"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function DoctorsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (!scrollContainerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScroll)
      window.addEventListener("resize", checkScroll)
      return () => {
        container.removeEventListener("scroll", checkScroll)
        window.removeEventListener("resize", checkScroll)
      }
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const itemWidth = container.querySelector("[data-doctor-item]")?.clientWidth || 0
    const scrollAmount = itemWidth + 16 
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <div id="doctors" className="relative w-full">
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scroll-smooth mx-auto"
        style={{
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth:"none"
        }}
      >
        <div className="flex gap-4 md:gap-6 px-4 md:px-6 pb-4">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              data-doctor-item
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
              style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "always",
              }}
            >
              <div className="flex flex-col items-center">
                <div className="relative mx-auto h-48 w-48 md:h-52 md:w-52 flex-shrink-0">
                  <div className="animate-rotate bg-[length: 400%] absolute h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40"></div>
                  <Image
                    className="overflow-hidden rounded-full bg-transparent shadow-2xl drop-shadow-2xl"
                    src={doctor?.image?.url}
                    alt={doctor?.imageAlt || doctor?.name}
                    width={220}
                    height={220}
                    loading="lazy"
                    quality={75}
                  />
                </div>
                <div className="mt-4 flex flex-col items-center justify-center space-y-2 text-center">
                  <div className="h-auto space-y-1 text-base md:text-lg font-medium leading-5 md:leading-6">
                    <h3 className="text-brandDark text-sm md:text-base">{doctor?.name}</h3>
                    <p className="text-xs text-brandPurpleDark">{doctor?.qualification}</p>
                    <p className="pb-2 text-xs md:text-sm text-brandPink">{doctor?.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => scroll("left")}
          aria-label="Previous slide"
          className="rounded-full h-10 w-10 md:h-11 md:w-11 text-2xl md:text-4xl ml-2 pointer-events-auto"
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => scroll("right")}
          aria-label="Next slide"
          className="rounded-full h-10 w-10 md:h-11 md:w-11 text-2xl md:text-4xl mr-2 pointer-events-auto"
          disabled={!canScrollRight}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
    </div>
  )
}


