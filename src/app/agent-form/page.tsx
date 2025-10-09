import React from 'react'
import AgentForm from './_components/agentFormBody'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

const page = () => {
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
        <Button
          variant="ghost"
          size="icon"
          className="mb-8 text-white hover:bg-white/10"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <h1 className="text-[#7DD3DD] font-normal text-center text-[40px] mb-10 ">
          Collaborate For Growth
        </h1>
           <AgentForm/>
      </div>
    </div>
  )
}

export default page