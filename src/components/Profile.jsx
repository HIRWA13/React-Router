import {useNavigate} from 'react-router-dom'
import { useAuth } from "./AuthProvider"

export default function Profile() {
    const auth = useAuth()
    const navigate = useNavigate()
    
    const handleLogout = () => {
        auth.logout()
        navigate('/login')
    }

  return (
    <div>
      <div>Profile Page</div>
      <h1>welcome {auth.user}</h1>
      <button
        className="text-base py-1 px-4 cursor-point bg-gray-400 rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}