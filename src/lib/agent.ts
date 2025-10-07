import { AgentApiResponse } from "@/types/agentDataType"

export async function getAgent() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/agent`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
    if (!response.ok) {
        let errorMessage = "Failed to get agent"
        try {
            const errorData = await response.json()
            errorMessage = errorData.message || errorMessage
        } catch {
        }
        throw new Error(errorMessage)
    }

    const resData: AgentApiResponse = await response.json()
    return resData
}
