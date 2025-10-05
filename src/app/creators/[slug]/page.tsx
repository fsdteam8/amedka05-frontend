import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Instagram, Music, Mail, Phone,  } from "lucide-react"
import MediaCarousel from "@/components/creators/MediaCarousel"
import { PerformanceHighlights } from "@/components/creators/PerformanceHighligts"
import { PartnershipsColaborations } from "@/components/creators/PartnershipsColaborations"


// Mock data - replace with your actual data source
const mockTalents = [
  {
    id: "gal-gadot",
    name: "Gal Gadot",
    title: "Director of influence Tier",
    tier: "Top Tier",
    servicesCompleted: "20K Services Completed",
    image: "/fulluser.png",
    socialMedia: {
      instagram: "@galgadot",
      tiktok: "@galgadot",
    },
    rating: 5,
    joinedDate: "2023-01-15",
    bio: "Gal Gadot is a lifestyle and fashion influencer known for blending elegance with everyday authenticity. With a strong presence on TikTok and Instagram, she creates engaging content that highlights fashion trends, beauty tips, and travel experiences. Olivia has collaborated with global brands like Nike, Samsung, and RedBull, helping them connect with young, style-conscious audiences. Her passion for storytelling and her ability to inspire through creative visuals make her one of the most impactful voices in today's creator economy.",
    interests: [
      "Fashion",
      "Travel",
      "Lifestyle",
      "Creator & Social",
      "Lifestyle & Personal",
      "ImpactThroughCreativity",
      "VibeCurator",
      "VibeCurator",
      "JetSetLife",
    ],
    contact: {
      phone: "(+965) - 549774 - 032",
      email: "GalGadotofficial@olivia.com",
    },
  },
]



interface TalentDetailPageProps {
  params: Promise<{ slug: string }>
}

export default async function TalentDetailPage({ params }: TalentDetailPageProps) {
  const { slug } = await params
  const talent = mockTalents.find((t) => t.id === slug)

  if (!talent) {
    notFound()
  }

  return (
<main className="min-h-screen bg-black text-white py-10">
 
 creators details 
  <div className="container mx-auto px-4 py-8 text-white">
    {/* Back Button */}
    <Link
      href="/creators"
      className="inline-flex items-center gap-2 text-white hover:text-gray-300 mb-8 transition-colors"
    >
      <ArrowLeft size={20} />
      Back to Talents
    </Link>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column - Image */}
      <div className="relative max-w-[650px] ">
        <Card className="overflow-hidden border-none bg-black">
          <CardContent className="p-0">
            <div className="relative aspect-[4/5] overflow-hidden ">
              <Image
                src={talent.image || "/placeholder.svg"}
                alt={talent.name}
                fill
                className="object-cover "
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Column - Details */}
      <div className="space-y-6 text-white">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Badge className="bg-white text-black">
              {talent.tier}
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-2">{talent.name}</h1>
          <p className="text-xl mb-4">{talent.title}</p>
          <p className="text-lg">{talent.servicesCompleted}</p>
        </div>

        {/* Bio */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="leading-relaxed text-pretty">{talent.bio}</p>
        </div>

        {/* Interests */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {talent.interests.map((interest, index) => (
              <Badge key={index} variant="outline" className="text-sm text-white bg-[#31434D]  border-none px-5 py-2 rounded-sm">
                #{interest}
              </Badge>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Social Media</h3>
          <div className="flex items-center gap-4">
            <a
              href={`https://instagram.com/${talent.socialMedia.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
            >
              <Instagram size={20} />
              <span>{talent.socialMedia.instagram}</span>
            </a>
            <a
              href={`https://tiktok.com/${talent.socialMedia.tiktok.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
            >
              <Music size={20} />
              <span>{talent.socialMedia.tiktok}</span>
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{talent.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>{talent.contact.email}</span>
            </div>
          </div>
        </div>

     
      </div>
    </div>


    <div className="mt-16 space-y-4">
      <h1 className="text-3xl font-bold">Lifestyle & Fashion Influencer</h1>
      <p className="text-pretty">Gal Gadot is a lifestyle and fashion influencer known for blending elegance with everyday authenticity. With a strong presence on TikTok and Instagram, she creates engaging content that highlights fashion trends, beauty tips, and travel experiences. Olivia has collaborated with global brands like Nike, Samsung, and RedBull, helping them connect with young, style-conscious audiences. Her passion for storytelling and her ability to inspire through creative visuals make her one of the most impactful voices in today&apos;s creator economy.</p>
    </div>
  </div>

<MediaCarousel/>

<PerformanceHighlights/>
<PartnershipsColaborations/>
</main>

  )
}
