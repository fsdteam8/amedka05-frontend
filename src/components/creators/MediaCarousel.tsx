"use client"

import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi, // 👈 make sure your Carousel component exports this type
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

const mediaItems = [
  { id: 1, src: "/c1.png", alt: "Professional woman in black blazer" },
  { id: 2, src: "/c2.png", alt: "Professional woman in gray suit" },
  { id: 3, src: "/c3.png", alt: "Professional woman in white blazer" },
  { id: 4, src: "/c1.png", alt: "Professional woman in burgundy blazer" },
  { id: 5, src: "/c2.png", alt: "Professional woman in navy blazer" },
  { id: 6, src: "/c3.png", alt: "Professional woman in charcoal suit" },
]

export default function MediaCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)
  const [api, setApi] = useState<CarouselApi | null>(null)

  // ✅ Handle responsive items-per-view safely
  useEffect(() => {
    function updateItemsPerView() {
      if (window.innerWidth >= 1280) return setItemsPerView(4)
      if (window.innerWidth >= 1024) return setItemsPerView(3)
      if (window.innerWidth >= 640) return setItemsPerView(2)
      return setItemsPerView(1)
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  useEffect(() => {
    if (!api) return
    setCurrentSlide(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-white">Media</h1>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            setApi={setApi} // 👈 capture carousel API
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {mediaItems.map((item) => (
                <CarouselItem
                  key={item.id}
                  className={cn(
                    "pl-2 md:pl-4",
                    "basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  )}
                >
                  <Card className="border-0 bg-transparent overflow-hidden group cursor-pointer">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                      <Image
                    
width={400}
                        height={533}
src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex -left-6 lg:-left-12 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
            <CarouselNext className="hidden md:flex -right-6 lg:-right-12 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
          </Carousel>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {Array.from({ length: Math.ceil(mediaItems.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-200",
                  index === Math.floor(currentSlide / itemsPerView)
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/60"
                )}
                onClick={() => api?.scrollTo(index * itemsPerView)}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="md:hidden text-center mt-4 text-gray-400 text-sm">
          Swipe to see more
        </div>
      </div>
    </div>
  )
}
