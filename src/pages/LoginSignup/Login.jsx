import { useState } from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { loginUser } from "../../../api";

export const loader = ({request}) => {
  return new URL(request.url).searchParams.get("message")
}

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  const navigate = useNavigate()

    const  handleSubmit = (e)=> {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(loginFormData)
            .then(data => {
              navigate("/host", {replace: true})
            })
            .catch(err => setError(err))
            .finally(() => setStatus("idle"))
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
  const message = useLoaderData();
  return (
    <>
      <section>
        <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
          <div className="w-full sm:max-w-md p-5 mx-auto">
            <h2 className="mb-12 text-center text-5xl font-extrabold">Sign in to your account</h2>
            {error && <p className="text-red-500 text-center mb-4">{error.message}</p>}
            {message && <p className="text-red-500 text-center mb-4">{message}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-1"> Email-Address</label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={loginFormData.email}
                  className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={loginFormData.password}  
                  className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <a href="#" className="text-sm">
                  {" "}
                  Forgot your password?{" "}
                </a>
              </div>
              <div className="mt-6">
                <button 
                disabled={status === "submitting"}
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                  {status === "submitting" ? "Logging..." : "Sign In"}
                </button>
              </div>
              <div className="mt-6 text-center">
                <a href="#" className="underline">
                  Sign up for an account
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
