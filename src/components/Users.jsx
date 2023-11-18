import { Link, Outlet } from "react-router-dom"

export default function Users() {
  return (
    <>
      <div>
        <Link to="1" className="text-sm m-3 underline">
          User 1
        </Link>
        <Link to="2" className="text-sm m-3 underline">
          User 2
        </Link>
        <Link to="3" className="text-sm m-3 underline">
          User 3
        </Link>
      </div>
      <Outlet />
    </>
  );
}