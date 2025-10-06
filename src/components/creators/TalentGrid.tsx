"use client"

import { useState, useMemo } from "react"
import { TalentCard } from "./TalentCard"

// Mock data - replace with your actual data source
const mockTalents = [
  {
    id: "gal-gadot",
    name: "Gal Gadot",
    title: "Director of influence Tier",
    tier: "Top Tier",
    servicesCompleted: "20K Services Completed",
    image: "/user.png",
    socialMedia: {
      instagram: "@galgadot",
      tiktok: "@galgadot",
    },
    rating: 5,
    joinedDate: "2023-01-15",
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    title: "Creative Content Specialist",
    tier: "Mid Tier",
    servicesCompleted: "15K Services Completed",
    image: "/user.png",
    socialMedia: {
      instagram: "@sarahjohnson",
      tiktok: "@sarahjohnson",
    },
    rating: 4.8,
    joinedDate: "2023-03-20",
  },
  {
    id: "alex-chen",
    name: "Alex Chen",
    title: "Brand Ambassador",
    tier: "Top Tier",
    servicesCompleted: "25K Services Completed",
    image: "/user.png",
    socialMedia: {
      instagram: "@alexchen",
      tiktok: "@alexchen",
    },
    rating: 4.9,
    joinedDate: "2022-11-10",
  },
  {
    id: "maria-rodriguez",
    name: "Maria Rodriguez",
    title: "Lifestyle Influencer",
    tier: "Mid Tier",
    servicesCompleted: "12K Services Completed",
    image: "/user.png",
    socialMedia: {
      instagram: "@mariarodriguez",
      tiktok: "@mariarodriguez",
    },
    rating: 4.7,
    joinedDate: "2023-05-08",
  },
]

type FilterOption = "All" | "Top Tier" | "Mid Tier"

export function TalentGrid() {
  const [filterBy, setFilterBy] = useState<FilterOption>("All")

  const filteredTalents = useMemo(() => {
    let filtered = mockTalents

    // Apply filter only
    if (filterBy !== "All") {
      filtered = filtered.filter((talent) => talent.tier === filterBy)
    }

    return filtered
  }, [filterBy])

  return (
    <div className="w-full ">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">TOP TALENTS</h1>
        </div>

        {/* Filter Tabs - Top Right */}
        <div className="flex gap-2">
          <button
            onClick={() => setFilterBy("All")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filterBy === "All" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterBy("Top Tier")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filterBy === "Top Tier" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Top Tier
          </button>
          <button
            onClick={() => setFilterBy("Mid Tier")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filterBy === "Mid Tier" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Mid Tier
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTalents.map((talent) => (
          <TalentCard key={talent.id} talent={talent} />
        ))}
      </div>

      {/* Results Count */}
      <div className="mt-8 text-center text-sm text-muted-foreground">
        Showing {filteredTalents.length} of {mockTalents.length} talents
      </div>
    </div>
  )
}
