import PageTransition from '@/components/PageTransition'

import React from 'react'
import TripBody from './_components/TripBody'

const page = () => {
    return (
        <PageTransition>
       <TripBody/>        
        </PageTransition>
    )
}

export default page