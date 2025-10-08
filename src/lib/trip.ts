import { EventResponse } from "@/types/contentDataType"
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


export async function getAllTripContent() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/event`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
    if (!response.ok) {
        let errorMessage = "Failed to get event"
        try {
            const errorData = await response.json()
            errorMessage = errorData.message || errorMessage
        } catch {
        }
        throw new Error(errorMessage)
    }

    const resData: EventResponse = await response.json()
    return resData
}
