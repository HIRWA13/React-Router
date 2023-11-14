import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div>Page Not Found</div>
      <button
        className="py-2 px-6 bg-gray-400 w-44"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </>
  );
}
