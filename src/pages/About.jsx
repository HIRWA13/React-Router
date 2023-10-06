import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="mx-auto">
        <div className="w-full">
          <img src="/images/about-hero.png" className="w-full"/>
        </div>
        <div className="p-10">
          <h1 className="text-2xl font-bold text-center p-2">Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p className="w-3/4 text-center text-lg mx-auto">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="text-center mt-2">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="p-5 bg-primary  text-2xl font-semibold w-2/4 mx-auto flex flex-col items-center justify-center gap-5 mb-5 rounded-lg">
          <h2>
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link className="bg-black text-white py-2 px-4 rounded-md font-semibold" to="/vans">
            Explore our vans
          </Link>
        </div>
      </section>
    </>
  );
}
