import ContactInfo from '@/components/Shared/ContactInfo'
import ContactUsForm from '@/components/Shared/ContactUs'
import HeroSection from '@/components/Shared/Hero'
import React from 'react'


const page = () => {
    return (
        <div>
            <HeroSection image={'/contactuspic1.png'} title={'Your Next Big Collaboration'} brTitle={'Begins Here.'} description={'our journey with creators, brands, and opportunities starts with a simple message.'} />
            <ContactUsForm />
            <ContactInfo />
        </div>
    )
}

export default page