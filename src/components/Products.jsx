import { Link, Outlet } from "react-router-dom"

export default function Products() {
  return (
    <>
      <div>
        <div className="mx-2">
          <input type="search" placeholder="search" />
        </div>
        <Link to="featured" className="p-2 underline m-5">
          Featured
        </Link>
        <Link to="new" className="p-2 underline m-1">
          New
        </Link>
      </div>
      <Outlet />
    </>
  );
}