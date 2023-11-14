import { NavLink } from "react-router-dom"

export default function NavBar() {

    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : "normal",
            color: isActive ? 'blue' : 'black'
        }
    }

  return (
    <nav>
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
    </nav>
  );
}