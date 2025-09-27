import PageTransition from '@/components/PageTransition'
import TripCard from '@/components/trip/TripCard'
import TripCta from '@/components/trip/TripCta'
import TripCta1 from '@/components/trip/TripCta1'
import TripHero from '@/components/trip/TripHero'
import React from 'react'

const page = () => {
    return (
        <PageTransition>

        <div>
            <TripHero />
            <div className='text-center py-6'>
                <h2><span className='text-[56px] font-semibold italic text-[#7DD3DD]'>2025</span>  <span className='text-[#FFFFFF] text-[40px] font-normal '>Tips</span></h2>
                <p className='text-[#9F8700] text-[16px] font-normal'>Productivity & Work</p>
            </div>
            <div className='grid container lg:grid-cols-2 sm:grid-cols-1 gap-6 py-7'>
                <TripCard />
                <TripCard />
                <TripCard />
                <TripCard />
            </div>
            <TripCta />
            <TripCta1/>
        </div>
        </PageTransition>
    )
}

export default page