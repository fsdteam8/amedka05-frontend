import DownloadAgent from '@/components/agent/DownloadAgent'
import PageTransition from '@/components/PageTransition'
import HeroSection from '@/components/Shared/Hero'
import React from 'react'

const Page = () => {
  return (
   <PageTransition>

    <div>
          <HeroSection image={'/creators.png'} title={'Discover the Brilliant Faces'} brTitle={' Driving Innovation.'} description={'Meet the creators shaping trends, building influence, and inspiring collaborations worldwide.'} />

                <DownloadAgent />
    </div>
   </PageTransition>
  )
}

export default Page