import { TripsApiResponse } from "@/types/tripDataType"


export async function getAllTrip() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/trip`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
    if (!response.ok) {
        let errorMessage = "Failed to get trip"
        try {
            const errorData = await response.json()
            errorMessage = errorData.message || errorMessage
        } catch {
        }
        throw new Error(errorMessage)
    }

    const resData: TripsApiResponse = await response.json()
    return resData
}
