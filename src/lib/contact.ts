import { contactDataType } from "@/types/contactDataType"


export async function createContact(payload:contactDataType) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/contact/create`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(payload),
        }
    )
    const resData = await response.json()
    if (!response.ok) throw new Error(resData.message || "Failed to create contact")
    return resData
}
