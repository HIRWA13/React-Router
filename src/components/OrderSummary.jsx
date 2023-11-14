import { useNavigate } from "react-router-dom"

export default function OrderSummary() {
    const navigate = useNavigate()
  return (
    <>
      <div>view your order summary here</div>
      <button
        className="py-2 px-6 bg-gray-400 w-44"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </>
  );
}