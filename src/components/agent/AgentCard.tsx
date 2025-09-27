import Image from 'next/image'
import React from 'react'

const AgentCard = () => {
    return (
        <div className='bg-[#2A2A2A] p-6   rounded-lg'>
            <div className=''>
                <Image src={"/agent.png"} width={900} className='rounded-lg w-[453px] h-[442px]' height={900} alt='' />
            </div>
            <div className='text-center my-4'>
                <h1 className='text-[#FFFFFF] font-bold text-2xl'>James Wiliam</h1>
                <p className='text-[#929292] text-[16px] font-normal mb-6'>Hype Media Agency</p>
                <div className='space-y-[16px]'>
                    <p className='text-[#929292] font-semibold'>Country: <span className='font-normal'>Shanghai, China</span>     </p>
                    <p className='text-[#929292] font-semibold text-center'>Designation: <span className='font-normal'>Talent Management Campaigns - Logistics</span></p>
                    <p className='text-[#929292] font-semibold text-center'>Working <span className='font-normal'>From: 2020</span> </p>
                </div>
            </div>
        </div>
    )
}

export default AgentCard