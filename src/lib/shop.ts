import { PartnershipApiResponse } from "@/types/shopDataType"

export async function getShop() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/partnership`,
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

    const resData:PartnershipApiResponse = await response.json()
    return resData
}
