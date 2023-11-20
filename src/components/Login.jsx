import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function Login() {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user)
    navigate('/', {replace: true});
  };

  return (
    <div>
      <div>Login Page</div>
      <div>
        <label>
          username:{" "}
          <input
            type="text"
            onChange={(e) => setUser(e.target.value)}
            className="border p-1"
          />
        </label>
        <button onClick={handleLogin} className="bg-gray-300 p-1 px-2 ml-1">
          login
        </button>
      </div>
    </div>
  );
}
