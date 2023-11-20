import { NavLink } from "react-router-dom"
import { useAuth } from "./AuthProvider";

export default function NavBar() {

    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : "normal",
            color: isActive ? 'blue' : 'black'
        }
    }

  const auth = useAuth()

  return (
    <>
      <nav className="mt-4">
        <NavLink
          style={navLinkStyles}
          className="text-base p-2 cursor-point active:font-bold"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={navLinkStyles}
          className="text-base p-2 cursor-point active:font-bold"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={navLinkStyles}
          className="text-base p-2 cursor-point active:font-bold"
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          style={navLinkStyles}
          className="text-base p-2 cursor-point active:font-bold"
          to="/users"
        >
          Users
        </NavLink>
        <NavLink
          style={navLinkStyles}
          className="text-base p-2 cursor-point active:font-bold"
          to="/profile"
        >
          Profile
        </NavLink>
        {!auth.user && (
          <NavLink
            style={navLinkStyles}
            className="text-base py-1 px-4 cursor-point bg-gray-400 rounded-md"
            to="/login"
          >
            login
          </NavLink>
        )}
      </nav>
    </>
  );
}