"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import {
  Instagram,
  Youtube,
  Linkedin,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { PartnershipsColaborations } from "./PartnershipsColaborations";

// ✅ Define types for API response
interface SocialMedia {
  platform: string;
  link: string;
  followers?: number;
  _id: string;
}

interface Creator {
  _id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  bio?: string;
  description?: string;
  socialMedia?: SocialMedia[];
  interests?: string[];
  image?: string[];
}

interface CreatorResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: Creator;
}

function CreatorsDetailspage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const {
    data: response,
    isLoading,
    isError,
  } = useQuery<CreatorResponse>({
    queryKey: ["aTalent", slug],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/creator/${slug}`,
        { cache: "no-store" }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch talent data");
      }

      const data = await res.json();
      return data as CreatorResponse;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (isError || !response?.data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-white text-xl">Error loading creator profile</div>
      </div>
    );
  }

  const singleTalent = response.data;
  const mediaImages = singleTalent.image?.slice(1) || [];

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <Instagram className="w-5 h-5" />;
      case "youtube":
        return <Youtube className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : Math.max(0, Math.floor(mediaImages.length / 4) - 1)
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => {
      const maxIndex = Math.max(0, Math.floor(mediaImages.length / 4) - 1);
      return prev < maxIndex ? prev + 1 : 0;
    });
  };

  const visibleImages = mediaImages.slice(
    currentImageIndex * 4,
    currentImageIndex * 4 + 4
  );

  return (
    <div>
      <div className="bg-[#131313] py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Image */}
            <div className="w-full flex justify-center">
              <div className="relative w-[600px] h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                <Image
                  src={singleTalent.image?.[0] || "/placeholder-image.jpg"}
                  alt={singleTalent.fullName}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Details */}
            <div className="w-full space-y-6 mt-10">
              {/* Top Tier Badge */}
              <div className="inline-block">
                <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Top Tier
                </span>
              </div>

              {/* Name */}
              <h1 className="text-[32px] font-medium leading-[150%] text-white italic">
                {singleTalent.fullName}
              </h1>

              {/* Bio/Description */}
              <p className="text-gray-300 text-base leading-relaxed">
                {singleTalent.bio}
              </p>

              {/* Interests Section */}
              {singleTalent.interests && singleTalent.interests.length > 0 && (
                <div className="space-y-3">
                  <h2 className="text-[20px] font-medium leading-[150%] text-white italic">
                    Interests
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {singleTalent.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="bg-teal-700/50 text-teal-100 px-4 py-2 rounded text-sm font-medium border border-teal-600/30"
                      >
                        #{interest}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Social Media Section */}
              {singleTalent.socialMedia &&
                singleTalent.socialMedia.length > 0 && (
                  <div className="space-y-3">
                    <h2 className="text-[20px] font-medium leading-[150%] text-white italic">
                      Social Media
                    </h2>
                    <div className="flex gap-4 flex-wrap">
                      {singleTalent.socialMedia.map((social) => (
                        <a
                          key={social._id}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-700/50 hover:bg-gray-600/50 text-white p-3 rounded-lg transition-all duration-300 border border-gray-600/30"
                        >
                          {getSocialIcon(social.platform)}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

              {/* Contact Section */}
              <div className="space-y-3">
                <h2 className="text-[20px] font-medium leading-[150%] text-white italic">
                  Contact
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5" />
                    <span>{singleTalent.phoneNumber}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5" />
                    <span>{singleTalent.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Full Width Description */}
          <div className="my-[120px]">
            <h2 className="text-3xl font-bold text-white italic mb-4">
              About {singleTalent.fullName}
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              {singleTalent.description
                ? singleTalent.description
                : `${
                    singleTalent.fullName
                  } is a prominent lifestyle and fashion influencer with a keen eye for the latest trends and a talent for turning inspiration into style. She collaborates with notable brands across the fashion and lifestyle industry, creating engaging content that resonates with her audience. Through her extensive career experiences, personal travel adventures, and fashion-forward Instagram presence, ${
                    singleTalent.fullName.split(" ")[0]
                  } shares a unique perspective that blends authenticity with creativity. Her work not only showcases the latest trends but also inspires her followers to embrace their individuality and express themselves confidently.`}
            </p>
          </div>

          {/* Media Section */}
          {mediaImages.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-white italic mb-8">
                Media
              </h2>

              <div className="relative">
                {/* Image Grid */}
                <div className="grid grid-cols-4 gap-4">
                  {visibleImages.map((imageUrl, index) => (
                    <div
                      key={index}
                      className="relative w-full h-[280px] rounded-lg overflow-hidden shadow-lg border border-gray-700/50"
                    >
                      <Image
                        src={imageUrl}
                        alt={`${singleTalent.fullName} media ${
                          currentImageIndex * 4 + index + 1
                        }`}
                        width={280}
                        height={280}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                {mediaImages.length > 4 && (
                  <div className="flex justify-center items-center gap-4 mt-8">
                    <button
                      onClick={handlePrevImage}
                      className="bg-gray-700/50 hover:bg-gray-600/50 text-white p-2 rounded-full transition-all duration-300 border border-gray-600/30"
                      aria-label="Previous images"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex gap-2">
                      {Array.from({
                        length: Math.ceil(mediaImages.length / 4),
                      }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentImageIndex === index
                              ? "bg-white w-6"
                              : "bg-gray-600 hover:bg-gray-500"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={handleNextImage}
                      className="bg-gray-700/50 hover:bg-gray-600/50 text-white p-2 rounded-full transition-all duration-300 border border-gray-600/30"
                      aria-label="Next images"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <PartnershipsColaborations />
      </div>
    </div>
  );
}

export default CreatorsDetailspage;
