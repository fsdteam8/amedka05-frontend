import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const TripCta1 = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
                {/* Text Section */}
                <div className="space-y-6 md:space-y-6 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#FFFFFF] font-medium">
                        Learn Network Collaborate
                    </h1>
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#9F8700] font-medium">
                        It&apos;s Not Just A Trip
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] text-[#E7E7E7] max-w-xl">
                        It&apos;s not just a trip; it&apos;s an opportunity to learn from those around you while also enjoying yourself in the process. Only we can offer this.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <Button className="text-[#131313] flex items-center bg-[linear-gradient(135deg,#7DD3DD_0%,#89CFF0_50%,#A7C8F7_100%)] hover:opacity-90 w-full sm:w-auto">
                            Creator Application <ArrowRight className="ml-2" />
                        </Button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative w-full md:w-[50%] flex items-center justify-center">
                    <Image
                        src={'/air.png'}
                        alt='Professional businessman with headset working on laptop'
                        width={900}
                        height={900}
                        className="object-cover w-full h-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default TripCta1
