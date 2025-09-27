import Image from 'next/image'
import React from 'react'

const TopProductCard = () => {
    return (
        <div className='bg-[#2A2A2A]'>
            <div>
                <Image src={'/product1.png'} alt='Professional businessman with headset working on laptop' width={900} height={900} className='object-cover  ' />
            </div>
            <div className='bg-[#424242]'>
                <p className='text-[#7DD3DD] py-3 text-center text-[20px]'>Footwears</p>
            </div>
        </div>
    )
}

export default TopProductCard