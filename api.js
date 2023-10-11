export async function getVans() {
    const response = await fetch("/api/vans")
    if(!response.ok) {
        throw {
            message: "Couldn't get the vans, something went wrong",
            statusText: response.statusText,
            status: response.status
        }
    }
    const data = await response.json()
    return data.vans
}