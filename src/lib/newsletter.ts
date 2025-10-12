
export async function createNewsletter(payload: { email: string }) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/newsletter`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        }
    )
    const resData = await response.json()
    if (!response.ok) throw new Error(resData.message || "Failed create newsletter")
    return resData
}