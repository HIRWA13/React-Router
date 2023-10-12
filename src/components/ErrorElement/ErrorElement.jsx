export default function ErrorElement() {
  return (
    <>
        <section className="text-gray-600 body-font flex flex-col gap-2 items-center justify-center mt-10">
            <h1 className="text-5xl p-4 font-semibold text-center">Error</h1>
            <div>
                <h1 className="text-center text-2xl font-semibold">there was an error</h1>
            </div>
            <h1 className="text-center text-white bg-black w-1/4 p-2 rounded-md">Try again later</h1>
        </section>
    </>
  )
}