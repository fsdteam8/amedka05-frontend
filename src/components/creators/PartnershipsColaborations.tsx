"use client"

import { useState } from "react"
import { Carousel, CarouselContent, CarouselItem,  type CarouselApi } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const partnerships = [
  {
    id: 1,
    title: "Nike Air Jordan 1 Elevate",
    description:
      "Step up your style with a design that elevates every look. This sneaker reinvents a classic with a platform, delivering a low-key profile. Cushioned air support ensures all-day comfort while smooth leather in contrasting hues creates a striking visual appeal.",
    image: "/pc1.png",
    alt: "Nike Air Jordan 1 Elevate sneakers",
  },
  {
    id: 2,
    title: "Gucci Horsebit 1955 Satchel",
    description:
      "Elevate your elegance with a design that blends heritage and modernity. This satchel reimagines a classic with a structured silhouette and signature horsebit detail. Crafted from premium leather, it offers durability and sophistication, while its spacious interior keeps essentials organized in style.",
    image: "/pc2.png",
    alt: "Gucci Horsebit 1955 Satchel",
  },
  {
    id: 3,
    title: "Val Paris Watch",
    description:
      "Elevate your style with a timepiece that exudes sophistication. This watch blends classic design with modern detailing, featuring a sleek stainless steel case and minimalist dial. Precision quartz movement ensures reliability, while its refined finish adds elegance to every outfit.",
    image: "/pc1.png",
    alt: "Val Paris Watch on wrist",
  },
  {
    id: 4,
    title: "Premium Leather Bag",
    description:
      "Discover timeless elegance with our premium leather collection. Each piece is meticulously crafted to combine functionality with sophisticated design, perfect for the modern professional.",
    image: "/pc1.png",
    alt: "Premium Leather Bag",
  },
  {
    id: 5,
    title: "Designer Sunglasses",
    description:
      "Shield your eyes in style with our designer sunglasses collection. Featuring UV protection and contemporary frames, these sunglasses are the perfect accessory for any occasion.",
    image: "/pc2.png",
    alt: "Designer Sunglasses",
  },
]

export function PartnershipsColaborations() {
  const [api, setApi] = useState<CarouselApi>()
  const [activeIndex, setActiveIndex] = useState(0)

  // Sync active index with carousel
  if (api) {
    api.on("select", () => setActiveIndex(api.selectedScrollSnap()))
  }

  return (
    <div className="w-full bg-[#0a0a0a] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="mb-3 font-sans text-3xl font-bold italic text-white md:text-4xl lg:text-5xl">
            Partnerships & Collaborations
          </h1>
          <p className="mx-auto max-w-2xl text-pretty font-sans text-sm text-zinc-400 md:text-base lg:text-lg">
            Trusted by industry leaders to bring creativity and influence to every campaign.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partnerships.map((item, index) => (
              <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-[600px] md:h-[650px] lg:h-[700px]">
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02] md:rounded-3xl">
                    
                    {/* Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        priority={index === 0}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col bg-[#0a1628] p-6 md:p-8 lg:p-10">
                      <h2 className="mb-4 font-sans text-2xl font-bold italic text-[#5dd4d4] md:text-3xl lg:text-4xl">
                        {item.title}
                      </h2>
                      <p className="mb-6 flex-1 text-pretty font-sans text-sm leading-relaxed text-zinc-300 md:mb-8 md:text-base lg:text-lg">
                        {item.description}
                      </p>

                      {/* Buttons */}
                      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                        <Button className="flex-1 rounded-xl bg-[#5dd4d4] px-6 py-5 text-sm font-semibold text-[#0a1628] transition-all hover:bg-[#4ec5c5] md:text-base">
                          Call Admin
                        </Button>
                        <Button className="flex-1 rounded-xl bg-[#5dd4d4] px-6 py-5 text-sm font-semibold text-[#0a1628] transition-all hover:bg-[#4ec5c5] md:text-base">
                          Request Collaboration
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Arrows */}
          {/* <CarouselPrevious className="hidden md:flex md:absolute md:left-4 md:top-1/2 md:-translate-y-1/2" />
          <CarouselNext className="hidden md:flex md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2" /> */}
        </Carousel>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {partnerships.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                activeIndex === index ? "bg-[#5dd4d4] scale-110" : "bg-zinc-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
