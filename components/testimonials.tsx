"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonials from "@/db/testimonials";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <Card
      aria-label="Patient testimonials"
      className="bg-transparent rounded-none border-0 shadow-none relative"
    >
      <CardContent className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 relative ">
          <Image
            src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1761206765/Google__G__logo.svg_vlwoou.webp"
            alt="Google reviews"
            fill
            className="object-contain"
            sizes="40px"
            quality={80}
          />
        </div>
          <div className='text-center text-sm md:text-base font-bold text-brandDark mb-6'>
        Reviews
      </div>
        <p className="mx-auto max-w-3xl  text-center text-base font-normal tracking-tight text-gray-800  md:text-lg">"{t.review}"</p>
        <hr className="my-6 border-primary/50 w-full mx-auto  rounded-lg" />
        <p className="font-medium  text-gray-900">{t.name}</p>
      <div className="absolute inset-y-0 left-2  items-center hidden md:flex">
            <Button
              variant="secondary"
              size="icon"
              onClick={() =>
                setI((i + testimonials.length - 1) % testimonials.length)
              }
              aria-label="Previous slide"
              className="rounded-full h-11 w-11 text-4xl bg-brandPink"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>

          <div className="absolute inset-y-0 right-2 items-center hidden md:flex">
            <Button
              variant="secondary"
              size="icon"
              onClick={() => setI((i + 1) % testimonials.length)}
              aria-label="Next slide"
              className="rounded-full h-11 w-11 text-4xl bg-brandPink"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
      </CardContent>
    </Card>
  );
}

