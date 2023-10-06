import { NavLink , Outlet } from "react-router-dom"

export default function HostLayout() {
  const activeStyles = {
    fontWeight: "bold",
    color: "black",
    textDecoration: "underline"
  }
  return (
    <>
        <nav className="p-4 flex gap-3">
        <NavLink 
                  to="/host"
                  end
                  style={({isActive}) => isActive ? activeStyles : null}
                  >Dashboard</NavLink>
         
         <NavLink 
                  to="/host/income"
                  style={({isActive}) => isActive ? activeStyles : null}
                  >Income</NavLink>  
         <NavLink 
                  to="/host/vans"
                  style={({isActive}) => isActive ? activeStyles : null}
                  >Vans</NavLink>      
         <NavLink 
                  to="/host/reviews"
                  style={({isActive}) => isActive ? activeStyles : null}
                  >Reviews</NavLink>        
        </nav>
        <Outlet/>
    </>
  )
}