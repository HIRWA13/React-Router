import { NavLink } from "react-router-dom";

export const activeStyles = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#161616",
};

export default function Header() {

  return (
    <>
      <header className="flex justify-between py-4 px-4 bg-secondary shadow-md">
        <div>
          <NavLink to="/">
            <h1 className="text-2xl uppercase font-bold cursor-pointer">
              #vanlife
            </h1>
          </NavLink>
        </div>
        <nav>
          <ul className="flex items-center gap-5">
            <NavLink to="/host"
            style={({isActive}) => isActive ? activeStyles : null}
            >
              <li className="capitalize cursor-pointer text-lg font-semibold">
                host
              </li>
            </NavLink>
            <NavLink to="/about"
            style={({isActive}) => isActive ? activeStyles : null}
            >
              <li className="capitalize cursor-pointer text-lg font-semibold">
                about
              </li>
            </NavLink>
            <NavLink to="/vans"
            style={({isActive}) => isActive ? activeStyles : null}
            >
              <li className="capitalize cursor-pointer text-lg font-semibold">
                vans
              </li>
            </NavLink>
            <NavLink to="/login">
                <img src="/images/userCircle.svg"/>
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}
