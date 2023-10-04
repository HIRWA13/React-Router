import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const simpleStyles = {
  backgroundColor: "#E17654",
  padding: "4px 20px",
  color: "white",
  borderRadius: "6px",
  width: "85px",
  textAlign: "center",
  fontWeight: "bold"
};
const ruggedStyles = {
  backgroundColor: "#115E59",
  padding: "4px 20px",
  color: "white",
  borderRadius: "6px",
  width: "85px",
  textAlign: "center",
  fontWeight: "bold"
};
const luxuryStyles = {
  backgroundColor: "#161616",
  padding: "4px 20px",
  color: "white",
  borderRadius: "6px",
  width: "85px",
  textAlign: "center",
  fontWeight: "bold"
};

export default function VanDetails() {
  const params = useParams();
  const [van, setVan] = useState({});

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <>
      <section className="w-3/4 mx-auto mt-10 p-2">
        <Link to="/vans">
          <p className="underline cursor-pointer text-lg py-4">Back to all vans</p>
        </Link>
        <article>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-start-1 col-end-2">
              <img
                src={van.imageUrl}
                className="rounded-lg"
              />
            </div>
            <div className="col-start-2 col-end-4 py-4 space-y-4">
              {van.type === "simple" && <p style={simpleStyles}>{van.type}</p>}
              {van.type === "rugged" && <p style={ruggedStyles}>{van.type}</p>}
              {van.type === "luxury" && <p style={luxuryStyles}>{van.type}</p>}
              <h1 className="text-4xl font-bold">{van.name}</h1>
              <h2 className="text-2xl font-semibold">
                ${van.price} <span className="font-thin">/day</span>
              </h2>
              <p className="text-xl">{van.description}</p>
              <div className="bg-primary text-white w-2/4 py-2 px-4 text-center font-semibold rounded-md cursor-pointer">Rent this van</div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
