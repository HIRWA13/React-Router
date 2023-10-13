import { useRouteError } from "react-router-dom"

export default function ErrorElement() {
const error = useRouteError()
  return (
    <>
        <section className="body-font flex flex-col gap-2 items-center justify-center mt-10">
            <h1 className="text-gray-600 text-5xl p-4 font-semibold text-center">Error</h1>
            <div>
                <pre className="text-center text-2xl">there was an error {error.message}</pre>
            </div>
            <h1 className="text-center text-white bg-black w-1/4 p-2 rounded-md">Try again later</h1>
        </section>
    </>
  )
}