"use client"
import { useAgentGet } from '@/hooks/ApiCalling';
import React from 'react'
import AgentCard from '../agent/AgentCard';
import { Agent } from '@/types/agentDataType';

const AgentBodyHome = () => {
    const agentGet = useAgentGet();
    const data = Array.isArray(agentGet.data?.data) ? agentGet.data?.data : [];
    return (
        <div>
            <div className="grid container sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-4">
                {data && data?.map((agent: Agent) => (
                    <AgentCard key={agent._id} agent={agent} />
                ))}
            </div>
        </div>
    )
}

export default AgentBodyHome