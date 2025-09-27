import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const TripCta1 = () => {
    return (
        <div className='container '>
            <div className='flex justify-between items-center'>
                <div className='space-y-[24px] '>
                    <h1 className='text-[#FFFFFF] text-5xl font-medium'>Learn Network Collaborate</h1>
                    <p className='text-[#9F8700]  text-5xl font-medium'>It&apos;s Not Just A Trip</p>
                    <p className='text-[#E7E7E7] font-normal text-[16px]'>t&apos;s not just a trip its an oppurtunity to learn from those around you while also enjoying yourself in the process. Only we can offer this</p>
                    <Button className="text-[#131313] flex items-center  bg-[linear-gradient(135deg,#7DD3DD_0%,#89CFF0_50%,#A7C8F7_100%)] hover:opacity-90">
                        Creator Application <ArrowRight className="ml-2" />
                    </Button>
                </div>
                <div className='relative flex items-center  justify-center'>
                    <Image src={'/air.png'} alt='Professional businessman with headset working on laptop' width={900} height={900} className='object-cover  ' />
                </div>
            </div>
        </div>
    )
}

export default TripCta1