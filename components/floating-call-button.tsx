"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingCallButton() {
  const handleCall = () => {
    window.location.href = "tel:+919108910832"
  }

  return (
    <div className="fixed bottom-3 left-3 z-40 flex flex-col gap-3 md:bottom-2.5 md:left-2.5">
      <Button
        onClick={handleCall}
        className="h-14 w-14 rounded-full bg-brandPink hover:bg-brandPink/90 text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center p-0"
        aria-label="Call us at +91 9108 9108 32"
      >
        <Phone className="h-8 w-8" />
      </Button>
    </div>
  )
}
