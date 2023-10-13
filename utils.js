import { redirect } from "react-router-dom"

export async function requireAuth() {
    const isLoggedIn = false
    
    if (!isLoggedIn) {
       const re= redirect("/login")
       re.body=true
       throw re
    } 
}