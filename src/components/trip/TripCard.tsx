import { Calendar, Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const TripCard = () => {
    return (
        <div className='rounded-lg overflow-hidden'>
            <div className="relative">
                <Image
                    src="/tripContent.jpg"
                    alt="tripcard"
                    width={900}
                    height={900}
                    className="object-cover"
                />
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className='flex flex-col items-center my-4 gap-2'>
                <h1 className='text-[#FFFFFF] font-bold text-2xl'>China,Beijing</h1>
                <p className='text-[#929292] flex gap-3'><Users size={20} /> Participants</p>
                <p className='text-[#929292] flex gap-3'><Calendar />15 Nov 2025 - 22 Nov 2025</p>
                <p className='text-[#929292]'>Guomao (China World Trade Center area)</p>
            </div>
        </div>
    )
}

export default TripCard