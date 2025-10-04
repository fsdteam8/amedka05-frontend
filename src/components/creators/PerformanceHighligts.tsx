import type React from "react"
import { Users, Star, Eye } from "lucide-react"
import { FaStar } from "react-icons/fa";

interface MetricProps {
  icon: React.ReactNode
  value: string
  label: string
}

function MetricCard({ icon, value, label }: MetricProps) {
  return (
    <div className="flex mx-auto bg-[#1A1919]  w-[300px] rounded-lg px-5 py-4 justify-between items-center text-center space-y-3 sm:space-y-4">
      <div className="text-cyan-400 mb-2">{icon}</div>
      <div className="space-y-1 w-60">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{value}</div>
        <div className="text-sm sm:text-base text-gray-300 font-medium  min-w-[150px]">{label}</div>
      </div>
    </div>
  )
}

export function PerformanceHighlights() {
  const metrics = [
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      value: "160k",
      label: "Followers",
    },
    {
      icon: <FaStar className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      value: "4.8%",
      label: "Engagement Rate",
    },
    {
      icon: <Eye className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      value: "250k",
      label: "Avg. Views",
    },
  ]

  return (
    <section className="bg-[#1D1D1D] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">
            Performance Highlights
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            Numbers that reflect influence, interaction, and audience engagement.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-12 xl:gap-16">
          {metrics.map((metric, index) => (
            <MetricCard key={index} icon={metric.icon} value={metric.value} label={metric.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
