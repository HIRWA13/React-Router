import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="relative">
        <img src="images/home-img.png" className="w-full"/>
        <div className="absolute bg-secondary w-3/4 p-20 opacity-40 left-28 top-2/4">
          <h1 className="text-3xl p-2 text-center font-bold">You got the travel plans, we got the travel vans.</h1>
          <p className="text-lg text-center font-semibold">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Link to="vans">
            <h1 className="text-center py-2 px-4 mt-2 bg-primary w-1/4 mx-auto">Let's find you a van</h1>
          </Link>
        </div>
      </section>
    </>
  );
}
