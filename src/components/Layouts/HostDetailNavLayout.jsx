import { NavLink, Outlet } from "react-router-dom"

export default function HostDetailNav() {
  return (
    <>
        <nav className="flex items-center gap-2 mt-2">
            <NavLink>
              <p>Details</p>
            </NavLink>
            <NavLink>
              <p>Pricing</p>
            </NavLink>
            <NavLink>
              <p>Photos</p>
            </NavLink>
        </nav>
        <Outlet />
    </>
  )
}