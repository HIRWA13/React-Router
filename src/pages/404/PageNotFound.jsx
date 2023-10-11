import { Link } from "react-router-dom"

export default function PageNotFound() {
  return (
   <>
    <section className="w-3/4 mx-auto mt-10 p-2">
      <article className="w-full flex flex-col items-center justify-center mx-auto gap-3">
        <h1 className="text-6xl p-4 font-semibold text-center">404!</h1>
        <h2 className="text-2xl font-semibold">Page not found</h2>
        <p className="text-xl">The page you are looking for does not exist.</p>
        <Link to="/" className="w-3/5">
          <button className="bg-black text-white w-full py-3 px-4 text-center font-semibold rounded-md cursor-pointer">Return to Home</button>
        </Link>
      </article>
    </section>
   </>
  )
}