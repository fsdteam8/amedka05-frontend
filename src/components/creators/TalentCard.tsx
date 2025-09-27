"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Music } from "lucide-react"

interface TalentCardProps {
  talent: {
    id: string
    name: string
    title: string
    tier: string
    servicesCompleted: string
    image: string
    socialMedia: {
      instagram: string
      tiktok: string
    }
    rating: number
    joinedDate: string
  }
}

export function TalentCard({ talent }: TalentCardProps) {
  return (
    <Card className="group overflow-hidden bg-[#2A2A2A] hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-sm border-0">
      <CardContent className="p-8 text-center">
        <div className="relative w-38 h-38 mx-auto mb-6">
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-700">
            <Image
              src={talent.image || "/placeholder.svg?height=128&width=128&query=professional portrait"}
              alt={talent.name}
              priority 
              width={228}
              height={228}
              className="w-full h-full  transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="space-y-3">
          {/* Clickable Name - Links to Detail Page */}
          <Link href={`/talent/${talent.id}`} className="block group-hover:text-blue-300 transition-colors">
            <h3 className="text-2xl font-bold text-white mb-2 text-balance cursor-pointer">{talent.name}</h3>
          </Link>

          <p className="text-gray-400 text-lg font-medium text-pretty">{talent.title}</p>

          <p className="text-gray-500 text-base">{talent.servicesCompleted}</p>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <a
            href={`https://instagram.com/${talent.socialMedia.instagram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-300 transition-colors p-2"
            aria-label={`${talent.name}'s Instagram`}
          >
            <Instagram size={24} />
          </a>
          <a
            href={`https://tiktok.com/${talent.socialMedia.tiktok.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-300 transition-colors p-2"
            aria-label={`${talent.name}'s TikTok`}
          >
            <Music size={24} />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
