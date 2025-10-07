import DownloadAgent from '@/components/agent/DownloadAgent'
import { TalentGrid } from '@/components/creators/TalentGrid'
import PageTransition from '@/components/PageTransition'
import HeroSection from '@/components/Shared/Hero'
import React from 'react'

const Page = () => {
  return (
   <PageTransition>

    <div>
          <HeroSection image={'/creators.png'} title={'Discover the Brilliant Faces'} brTitle={' Driving Innovation.'} description={'Meet the creators shaping trends, building influence, and inspiring collaborations worldwide.'} />

  <main className="min-h-screen bg-[#131313] text-white">
      <div className="container mx-auto px-4 py-8">
        <TalentGrid />
      </div>
    </main>


                <DownloadAgent />
    </div>
   </PageTransition>
  )
}

export default Page