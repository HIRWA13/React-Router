import { Link, Outlet, useSearchParams } from "react-router-dom"

export default function Users() {
  const [searchParams, setSearchParams] = useSearchParams()
  const isActive = searchParams.get('filter') === 'active'
  const isSpecial = searchParams.get('special') === 'admin'
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
      <div>
        <button
          onClick={() => setSearchParams({ filter: "active" })}
          className="bg-gray-400 p-1 ml-2 cursor-pointer rounded-sm"
        >
          active users
        </button>
        <button
          onClick={() => setSearchParams({ special: "admin" })}
          className="bg-gray-400 p-1 ml-2 cursor-pointer rounded-sm"
        >
          special users
        </button>
        <button
          onClick={() => setSearchParams({})}
          className="bg-gray-400 p-1 ml-2 cursor-pointer rounded-sm"
        >
          reset filter
        </button>
      </div>
      {isActive && <h1 className="text-2xl font-bold">Showing active users</h1>}
      {isSpecial && <h1 className="text-2xl font-bold">Showing special users</h1>}
    </>
  );
}