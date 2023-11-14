import { Link } from "react-router-dom"

export default function Products() {
  return (
    <div>
      <div>
        <Link
          to="featured"
          className="py-2 px-6 w-44 underline text-base"
        >
          Featured
        </Link>
        <Link
          to="new"
          className="py-2 px-6 w-44 underline text-base"
        >
          new
        </Link>
      </div>
    </div>
  );
}