import { redirect } from "react-router-dom"

export async function requireAuth() {
    const isLoggedIn = localStorage.getItem("login")
    
    if (!isLoggedIn) {
       const re= redirect("/login?message= Please login to continue")
       re.body=true
       throw re
    } 
    return null
}