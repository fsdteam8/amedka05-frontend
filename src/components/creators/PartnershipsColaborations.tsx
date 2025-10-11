"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

export function PartnershipsColaborations() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  /* eslint-disable @typescript-eslint/no-explicit-any */
  // ✅ Fetch API Data
  const {
    data: allPartnerships,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Partnerships"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/partnership`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch partnerships");
      }

      return res.json();
    },
  });

  // ✅ Handle loading and error state
  if (isLoading) {
    return (
      <div className="w-full bg-[#0a0a0a] py-20 text-center text-white">
        <p>Loading partnerships...</p>
      </div>
    );
  }

  if (isError || !allPartnerships?.data?.data) {
    return (
      <div className="w-full bg-[#0a0a0a] py-20 text-center text-red-400">
        <p>Failed to load partnerships</p>
      </div>
    );
  }

  const partnerships = allPartnerships.data.data;

  // ✅ Sync active index with carousel
  if (api) {
    api.on("select", () => setActiveIndex(api.selectedScrollSnap()));
  }

  return (
    <div className="w-full bg-[#0a0a0a] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="mb-3 font-sans text-3xl font-bold italic text-white md:text-4xl lg:text-5xl">
            Partnerships & Collaborations
          </h1>
          <p className="mx-auto max-w-2xl text-pretty font-sans text-sm text-zinc-400 md:text-base lg:text-lg">
            Trusted by industry leaders to bring creativity and influence to
            every campaign.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partnerships.map((item: any, index: number) => (
              <CarouselItem
                key={item._id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-[600px] md:h-[650px] lg:h-[700px]">
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02] md:rounded-3xl">
                    {/* Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
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
        </Carousel>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {partnerships.map((_: any, index: number) => (
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
  );
}
