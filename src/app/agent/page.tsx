import AgentBody from '@/components/agent/AgentBody'
import PageTransition from '@/components/PageTransition'
import HeroSection from '@/components/Shared/Hero'
import React from 'react'

const page = () => {
    return (
        <PageTransition>
            <HeroSection image={'/agentImage.png'} title={'Meet the Brilliant Minds'} brTitle={' Powering Networks.'} description={'Connecting creators with opportunities through trusted partnerships and dedicated agents.'} />
            <AgentBody />
        </PageTransition>
    )
}

export default page