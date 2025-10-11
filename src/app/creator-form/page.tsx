import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import CreatorBody from "./_components/creatorBody"
import Link from "next/link"


export default function CreatorForm() {


  return (
    <div
      className="min-h-screen text-white p-8"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >

      <div className="max-w-7xl mx-auto">
         <Link href="/"> 
        <Button
          variant="ghost"
          size="icon"
          className="mb-8 text-white hover:bg-white/10"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
         </Link>
 
        <h1 className="text-[#7DD3DD] font-normal text-center text-[40px] mb-10 ">
          Turn Creativity Into Opportunity
        </h1>

        <CreatorBody />
      </div>
    </div>
  )
}
