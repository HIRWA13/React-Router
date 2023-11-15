import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
    <NavBar />
      <div className="text-xl font-bold">Home Page</div>
      <button onClick={() => navigate('order-summary')} className="py-2 px-6 bg-gray-400 w-44">place your order</button>
    </>
  );
}