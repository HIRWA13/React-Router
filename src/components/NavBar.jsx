import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav>
      <Link className="text-base p-2 cursor-point" to="/">
        Home
      </Link>
      <Link className="text-base p-2 cursor-point" to="/about">
        About
      </Link>
    </nav>
  );
}