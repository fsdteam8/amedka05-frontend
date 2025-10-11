

export async function createFrom(payload:File) {
    console.log(payload)
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/creator/request`,
        {
            method: "POST",
            body: payload,
        }
    )
    const resData = await response.json()
    if (!response.ok) throw new Error(resData.message || "Failed ")
    return resData
}
