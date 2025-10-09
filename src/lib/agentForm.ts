import { AgentData } from "@/types/agentDataType"



export async function createAgent(payload: AgentData) {
    console.log(payload)
    const formData = new FormData()
    formData.append("fullName", payload.fullName)
    formData.append("email", payload.emailAddress)
    formData.append("phoneNumber", payload.phoneNumber)
    formData.append("country", payload.country)
    formData.append("designation", payload.designation)
    formData.append("brandName", payload.brandName)
    formData.append("workingFrom", payload.workingFrom)
    
    if (payload.image && payload.image) {
        formData.append("image", payload.image)
    }
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/agent/request`,
        {
            method: "POST",
            body: formData,
        }
    )
    const resData = await response.json()
    if (!response.ok) throw new Error(resData.message || "Failed to create partnership")
    return resData
}