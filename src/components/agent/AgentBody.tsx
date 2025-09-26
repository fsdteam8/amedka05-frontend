import React from 'react'
import AgentCard from './AgentCard'

const AgentBody = () => {
    return (
        <div className='bg-[#1B1B1B] py-[72px]'>
            <div className='container mb-10'>
                <h1 className='text-[#E7E7E7] text-[40px] font-normal italic'>Agents</h1>
                <p className='text-[#E7E7E7] text-[16px] font-normal'>The minds shaping tomorrow’s <span className='text-[#9F8700]'>creator economy</span></p>
            </div>
            <div className='grid container grid-cols-3  mt-10 gap-4'>
                {[...Array(4)].map((_, i) => (
                    <AgentCard key={i} />
                ))}
            </div>
        </div>
    )
}

export default AgentBody