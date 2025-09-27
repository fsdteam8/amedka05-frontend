import AgentBody from '@/components/agent/AgentBody'
import DownloadAgent from '@/components/agent/DownloadAgent'
import HeroSection from '@/components/Shared/Hero'
import React from 'react'

const page = () => {
    return (
        <div>
            <HeroSection image={'/agentImage.png'} title={'Meet the Brilliant Minds'} brTitle={' Powering Networks.'} description={'Connecting creators with opportunities through trusted partnerships and dedicated agents.'} />
             <AgentBody/>
             <DownloadAgent/>
        </div>
    )
}

export default page