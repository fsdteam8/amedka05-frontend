"use client";

import { useState, useMemo } from "react";
import { TalentCard } from "./TalentCard";
import { useQuery } from "@tanstack/react-query";

type FilterOption = "All" | "Top Tier" | "Mid Tier";

type SocialMedia = {
  platform: string;
  link: string;
  followers: number;
  _id: string;
};

type Talent = {
  _id: string;
  fullName: string;
  tier: string; // 'top' | 'mid' | etc
  totalFollowers: number;
  image: string[]; // array of URLs
  socialMedia: SocialMedia[];
  createdAt: string;
  description?: string;
};

export function TalentGrid() {
  const [filterBy, setFilterBy] = useState<FilterOption>("All");

  // Fetch talents from API
  const { data: talents, isLoading, isError } = useQuery({
    queryKey: ["talents"],
    queryFn: async (): Promise<Talent[]> => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/creator`);
      if (!res.ok) throw new Error("Failed to fetch talents");
      const json = await res.json();
      return json.data.data; // API response path
    },
  });

  // Map API tier values ('top', 'mid') to FilterOption display
  const mappedTalents = useMemo(() => {
    if (!talents) return [];
    return talents.map((t) => ({
      ...t,
      tier: t.tier.toLowerCase() === "top" ? "Top Tier" : t.tier.toLowerCase() === "mid" ? "Mid Tier" : t.tier,
    }));
  }, [talents]);

  // Filter talents based on selected filter
  const filteredTalents = useMemo(() => {
    if (!mappedTalents) return [];
    if (filterBy === "All") return mappedTalents;
    return mappedTalents.filter((t) => t.tier === filterBy);
  }, [filterBy, mappedTalents]);

  if (isLoading) return <div className="text-white">Loading talents...</div>;
  if (isError) return <div className="text-red-500">Failed to load talents</div>;

  return (
    <div className="w-full">
      {/* Header and Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">TOP TALENTS</h1>

        <div className="flex gap-2">
          {(["All", "Top Tier", "Mid Tier"] as FilterOption[]).map((option) => (
            <button
              key={option}
              onClick={() => setFilterBy(option)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filterBy === option
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTalents.map((talent) => (
          <TalentCard
            key={talent._id}
            talent={{
              id: talent._id,
              name: talent.fullName,
              title: talent.description || "",
              tier: talent.tier,
              servicesCompleted: `${talent.totalFollowers} Followers`,
              image: talent.image[0] || "/user.png",
              socialMedia: {
                instagram:
                  talent.socialMedia.find((sm) => sm.platform.toLowerCase() === "instagram")?.link || "",
                tiktok:
                  talent.socialMedia.find((sm) => sm.platform.toLowerCase() === "tiktok")?.link || "",
              },
              rating: 5, // default rating
              joinedDate: talent.createdAt,
            }}
          />
        ))}
      </div>

      {/* Results Count */}
      <div className="mt-8 text-center text-sm text-muted-foreground">
        Showing {filteredTalents.length} of {talents?.length || 0} talents
      </div>
    </div>
  );
}
